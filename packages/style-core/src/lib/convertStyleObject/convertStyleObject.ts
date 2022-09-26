// TODO: get rid of type casts where possible
import { from as defaultFrom } from '../mediaQueries/mediaQueries';
import type { Theme } from '../theme';

type ObjectKey = string | number;

type UnknownObject = Record<ObjectKey, unknown>;

export type ResponsiveStyleValue = string | number | boolean;

export type ResponsiveStyleProp<
  V extends ResponsiveStyleValue,
  T extends Theme = Theme
> = V | { [key in keyof T['breakpoints']]?: V };

export type From<T extends Theme> = (
  key: keyof T['breakpoints'],
  theme: T
) => string;

export type KeyValueConverter = (
  key: ObjectKey,
  value: ResponsiveStyleValue
) => { key: ObjectKey; value: string | number | null };

interface CreateStyleObjectOptions<T extends Theme> {
  from: From<T>;
  keyValueConverter?: KeyValueConverter;
}

type ConvertedProps<T> = {
  [Key in keyof T]: T[Key] extends UnknownObject
    ? ConvertedProps<T[Key]>
    : Extract<T[Key], ResponsiveStyleValue> | undefined;
};

type MappedStyles<T extends Theme> = Record<
  keyof T['breakpoints'] | NonResponsiveKey,
  ResponsiveStyleObject<T>
>;

// type StyleConverterFn = (style: ResponsiveStyleValue) => string | number;

// export type ResponsiveStyleObject<T extends Theme = Theme> = Record<
//   string,
//   | ResponsiveStyleProp<string | number, T>
//   | [ResponsiveStyleProp<string | number, T>, StyleConverterFn]
//   | Record<
//       string,
//       | ResponsiveStyleProp<string | number, T>
//       | [ResponsiveStyleProp<string | number, T>, StyleConverterFn]
//     >
// >;

type StyleObject<T extends Theme> = Record<
  string,
  ResponsiveStyleProp<ResponsiveStyleValue, T>
>;

export type ResponsiveStyleObject<T extends Theme> = Record<
  string,
  ResponsiveStyleProp<ResponsiveStyleValue, T> | StyleObject<T>
>;

type NonResponsiveKey = 'nonResponsive';
const nonResponsiveKey: NonResponsiveKey = 'nonResponsive';

const assignConvertedStyles = <T extends Theme>(
  styleObject: MappedStyles<T>,
  options: CreateStyleObjectOptions<T>,
  breakpointKey: string,
  styleKey: ObjectKey,
  styleValue: ResponsiveStyleValue,
  parentKey?: ObjectKey
) => {
  const { key: convertedKey, value: convertedValue } =
    options.keyValueConverter?.(styleKey, styleValue) || {
      key: styleKey,
      value: styleValue,
    };

  const shouldAddStyles = convertedValue !== null;

  const assignedStyles = shouldAddStyles
    ? { ...styleObject, [breakpointKey]: { ...styleObject[breakpointKey] } }
    : styleObject;

  if (shouldAddStyles && parentKey) {
    assignedStyles[breakpointKey][parentKey] = {
      ...((assignedStyles[breakpointKey][parentKey] as MappedStyles<T>) || {}),
      [convertedKey]: convertedValue,
    };
  } else if (shouldAddStyles) {
    assignedStyles[breakpointKey][convertedKey] = convertedValue;
  }
  return assignedStyles;
};

const mapResponsiveObjectToBreakpoints = <T extends Theme>(
  responsiveStyle: UnknownObject,
  styleKey: ObjectKey,
  theme: T,
  options: CreateStyleObjectOptions<T>,
  mappedStyles: MappedStyles<T>,
  parentKey?: ObjectKey
): MappedStyles<T> =>
  Object.keys(responsiveStyle).reduce<MappedStyles<T>>(
    (prevMappedStyles, breakpointKey) => {
      let currMappedStyles = { ...prevMappedStyles };
      const breakpointValue = theme.breakpoints[breakpointKey];
      const actualBreakpointKey =
        breakpointValue === 0 ? nonResponsiveKey : breakpointKey;
      const styleValue = responsiveStyle[breakpointKey];

      currMappedStyles = assignConvertedStyles(
        currMappedStyles,
        options,
        actualBreakpointKey,
        styleKey,
        styleValue as ResponsiveStyleValue,
        parentKey
      );
      return currMappedStyles;
    },
    mappedStyles as MappedStyles<T>
  );

const mapStylesToBreakpoint = <
  S extends ResponsiveStyleObject<T>,
  T extends Theme
>(
  styleObject: S,
  theme: T,
  options: CreateStyleObjectOptions<T>,
  mappedStyles: MappedStyles<T> = { nonResponsive: {} } as MappedStyles<T>,
  parentKey?: ObjectKey
): MappedStyles<T> =>
  Object.keys(styleObject).reduce<MappedStyles<T>>(
    (prevMappedStyles, styleKey) => {
      let currMappedStyles = { ...prevMappedStyles };
      const styleValue = styleObject[styleKey];
      const styleValueIsObject = typeof styleValue === 'object';
      const isResponsiveObject =
        styleValueIsObject &&
        !Object.keys(styleValue).some((objKey) =>
          isNaN(theme.breakpoints[objKey])
        );
      const isNestedStyleObject = styleValueIsObject && !isResponsiveObject;

      if (isNestedStyleObject && parentKey) {
        throw Error('Responsive style objects can only be nested once');
      } else if (isNestedStyleObject) {
        Object.keys(styleObject).forEach((key) => {
          currMappedStyles = {
            ...currMappedStyles,
            ...mapStylesToBreakpoint(
              styleObject[key] as S,
              theme,
              options,
              prevMappedStyles,
              key
            ),
          };
        });
      } else if (isResponsiveObject) {
        currMappedStyles = {
          ...currMappedStyles,
          ...mapResponsiveObjectToBreakpoints(
            styleValue,
            styleKey,
            theme,
            options,
            prevMappedStyles,
            parentKey
          ),
        };
      } else {
        currMappedStyles = assignConvertedStyles(
          currMappedStyles,
          options,
          nonResponsiveKey,
          styleKey,
          styleValue as ResponsiveStyleValue,
          parentKey
        );
      }

      return currMappedStyles;
    },
    mappedStyles
  );

const mapBreakpointStylesToStyle = <S extends MappedStyles<T>, T extends Theme>(
  mappedStyles: S,
  theme: T,
  { from }: CreateStyleObjectOptions<T>
): ConvertedProps<S> =>
  (
    Object.keys(mappedStyles) as Array<
      keyof T['breakpoints'] | NonResponsiveKey
    >
  ).reduce<ConvertedProps<S>>((prev, breakpoint) => {
    if (breakpoint === nonResponsiveKey) {
      return { ...prev, ...mappedStyles[breakpoint] };
    }
    return { ...prev, [from(breakpoint, theme)]: mappedStyles[breakpoint] };
  }, {} as ConvertedProps<S>);

export const createStyleObjectWithOptions = <
  S extends ResponsiveStyleObject<T>,
  T extends Theme
>(
  styleObject: S,
  theme: T,
  options: CreateStyleObjectOptions<T>
) => {
  const mappedStyles = mapStylesToBreakpoint(styleObject, theme, options);
  return mapBreakpointStylesToStyle(mappedStyles, theme, options);
};

export const createStyleObject = <
  S extends ResponsiveStyleObject<T>,
  T extends Theme
>(
  styleObject: S,
  theme: T
) => createStyleObjectWithOptions(styleObject, theme, { from: defaultFrom });
