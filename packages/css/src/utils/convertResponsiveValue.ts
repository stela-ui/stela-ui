type ResponsiveArrayStyleValue = string | number | boolean | undefined | null;

type ReturnValue = string | number | false | undefined | null;

export type ConverterFn<
  T extends ResponsiveArrayStyleValue | ResponsiveArrayStyleValue[],
  R extends ReturnValue | ReturnValue[] = T extends ResponsiveArrayStyleValue
    ? ReturnValue
    : ReturnValue[]
> = (
  value: T[] | T | null | undefined | false,
  index: number
) => R | null | undefined | false;

export const convertResponsiveValue = <
  T extends ResponsiveArrayStyleValue = ResponsiveArrayStyleValue,
  R extends ReturnValue | ReturnValue[] = T extends ResponsiveArrayStyleValue
    ? ReturnValue
    : ReturnValue[]
>(
  responsiveValue: T[] | T,
  converterFn: ConverterFn<T[] | T, R>
) =>
  Array.isArray(responsiveValue)
    ? responsiveValue.map(converterFn)
    : converterFn(responsiveValue, 0);
