import { from } from '../mediaQueries/mediaQueries';
import { defaultTheme } from '../theme';
import {
  createStyleObject,
  createStyleObjectWithOptions,
} from './convertStyleObject';
import type {
  ResponsiveStyleProp,
  KeyValueConverter,
} from './convertStyleObject';

describe('convertStyleObject', () => {
  describe('createStyleObject', () => {
    it('should create style object when not passing any responsive styles', () => {
      const marginValue = '1px';

      expect(createStyleObject({ margin: marginValue }, defaultTheme)).toEqual({
        margin: marginValue,
      });
    });

    it('should create style object when not passing any responsive styles with 0 breakpoint size', () => {
      const marginValue: ResponsiveStyleProp<string> = '1px';
      const marginResponsiveValue = {
        _: marginValue,
      };

      expect(
        createStyleObject({ margin: marginResponsiveValue }, defaultTheme)
      ).toEqual({
        margin: marginValue,
      });
    });

    it('should create style object when not passing nested non-responsive styles', () => {
      const marginValue = '1px';
      const nestedStyles = {
        ['.bla']: { margin: marginValue },
      };

      expect(createStyleObject(nestedStyles, defaultTheme)).toEqual(
        nestedStyles
      );
    });

    it('should throw an error when passing deeply nested styles', () => {
      const nestedStyles = {
        ['.first']: { ['.second']: { margin: '1px' } },
      };
      // @ts-expect-error nestedStyles is incorrect
      expect(() => createStyleObject(nestedStyles, defaultTheme)).toThrow(
        Error('Responsive style objects can only be nested once')
      );
    });

    it('should create style object when not passing nested responsive styles with 0 breakpoint size', () => {
      const marginValue: ResponsiveStyleProp<string> = '1px';
      const marginResponsiveValue = {
        _: marginValue,
      };
      const nestedStyles = { ['.bla']: { margin: marginResponsiveValue } };

      expect(createStyleObject(nestedStyles, defaultTheme)).toEqual({
        ['.bla']: {
          margin: marginValue,
        },
      });
    });
  });

  describe('createStyleObjectWithOptions', () => {
    it('should convert key values when a keyValueConverter is passed', () => {
      const marginValue: ResponsiveStyleProp<boolean> = true;
      const marginResponsiveValue = {
        _: marginValue,
      };
      const nestedStyles = {
        m: marginResponsiveValue,
        padding: marginResponsiveValue,
      };
      const keyValueConverter: KeyValueConverter = (key, value) => ({
        key: key === 'm' ? 'margin' : key,
        value: value ? '1px' : null,
      });

      expect(
        createStyleObjectWithOptions(nestedStyles, defaultTheme, {
          from,
          keyValueConverter,
        })
      ).toEqual({
        padding: '1px',
        margin: '1px',
      });
    });

    it('should convert key values when a keyValueConverter is passed with nested styles', () => {
      const marginValue: ResponsiveStyleProp<boolean> = true;
      const marginResponsiveValue = {
        _: marginValue,
      };
      const nestedStyles = {
        ['.bla']: { m: marginResponsiveValue, padding: marginResponsiveValue },
      };
      const keyValueConverter: KeyValueConverter = (key, value) => ({
        key: key === 'm' ? 'margin' : key,
        value: value ? '1px' : null,
      });

      expect(
        createStyleObjectWithOptions(nestedStyles, defaultTheme, {
          from,
          keyValueConverter,
        })
      ).toEqual({
        ['.bla']: {
          margin: '1px',
          padding: '1px',
        },
      });
    });

    it('should not return styles when keyValueConverter is passed and the returned value is null', () => {
      const marginValue: ResponsiveStyleProp<boolean> = false;
      const paddingValue: ResponsiveStyleProp<boolean> = true;
      const marginResponsiveValue = {
        _: marginValue,
      };
      const nestedStyles = {
        ['.bla']: { m: marginResponsiveValue, padding: paddingValue },
      };
      const keyValueConverter: KeyValueConverter = (key, value) => ({
        key: key === 'm' ? 'margin' : key,
        value: value ? '1px' : null,
      });

      expect(
        createStyleObjectWithOptions(nestedStyles, defaultTheme, {
          from,
          keyValueConverter,
        })
      ).toEqual({ ['.bla']: { padding: '1px' } });
    });
  });
});
