type ResponsiveArrayStyleValue = string | number | boolean | undefined | null;

export const convertResponsiveValue = <
  T extends ResponsiveArrayStyleValue = ResponsiveArrayStyleValue,
  R extends ResponsiveArrayStyleValue = ResponsiveArrayStyleValue
>(
  responsiveValue: T[] | T,
  converterFn: (value: T, index: number) => T extends T ? R : R[]
) =>
  Array.isArray(responsiveValue)
    ? responsiveValue.map(converterFn)
    : converterFn(responsiveValue, 0);
