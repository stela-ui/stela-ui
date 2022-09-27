import { from } from '../mediaQueries/mediaQueries';
import { defaultTheme } from '../theme';
import {
  createStyleObject,
  createStyleObjectWithOptions,
} from './convertStyleObject';
import type {
  ResponsiveStyleProp,
  KeyValueConverter,
  ResponsiveStyleValue,
} from './convertStyleObject';

describe('convertStyleObject', () => {
  describe('createStyleObject', () => {
    describe('nonResponsiveStyles', () => {
      it('should create style object', () => {
        const marginValue = '1px';

        expect(
          createStyleObject({ margin: marginValue }, defaultTheme)
        ).toEqual({
          margin: marginValue,
        });
      });

      it('should create style object when passing nested styles', () => {
        const marginValue = '1px';
        const nestedStyles = {
          ['.bla']: { margin: marginValue },
        };

        expect(createStyleObject(nestedStyles, defaultTheme)).toEqual(
          nestedStyles
        );
      });

      it('should create style object when passing nested styles with multiple styles', () => {
        const marginValue = '1px';
        const displayValue = 'block';
        const nestedStyles = {
          ['.bla']: { margin: marginValue, display: displayValue },
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

      it('should create style object when passing style with a converter function', () => {
        const marginValue: ResponsiveStyleProp<boolean> = true;
        const marginConvertedValue = '1px';
        const styleConverter = (value: ResponsiveStyleValue) =>
          value ? marginConvertedValue : null;

        expect(
          createStyleObject(
            {
              margin: [marginValue, styleConverter],
            },
            defaultTheme
          )
        ).toEqual({
          margin: marginConvertedValue,
        });
      });
    });

    describe('responsiveStyles', () => {
      it('should create style object when passing styles with 0 breakpoint size', () => {
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

      it('should create style object when passing nested styles with multiple styles', () => {
        const marginValue: ResponsiveStyleProp<string> = '1px';
        const displayValue: ResponsiveStyleProp<string> = 'block';

        const marginResponsiveValue = {
          _: marginValue,
        };
        const displayResponsiveValue = {
          _: displayValue,
        };

        const nestedStyles = {
          ['.bla']: {
            margin: marginResponsiveValue,
            display: displayResponsiveValue,
          },
        };

        expect(createStyleObject(nestedStyles, defaultTheme)).toEqual({
          ['.bla']: {
            margin: marginValue,
            display: displayValue,
          },
        });
      });

      it('should create style object when passing nested styles with 0 breakpoint size', () => {
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

      it('should create style object when passing styles with mobile breakpoint size', () => {
        const marginValue: ResponsiveStyleProp<string> = '1px';
        const marginResponsiveValue = {
          mobile: marginValue,
        };

        expect(
          createStyleObject({ margin: marginResponsiveValue }, defaultTheme)
        ).toEqual({
          [from('mobile', defaultTheme)]: {
            margin: marginValue,
          },
        });
      });

      it('should create style object when passing multiple styles with different breakpoint sizes', () => {
        const marginValue: ResponsiveStyleProp<string> = '1px';
        const displayValue: ResponsiveStyleProp<string> = 'block';

        const marginResponsiveValue = {
          mobile: marginValue,
        };
        const displayResponsiveValue = {
          _: displayValue,
        };

        const nestedStyles = {
          margin: marginResponsiveValue,
          display: displayResponsiveValue,
        };

        expect(createStyleObject(nestedStyles, defaultTheme)).toEqual({
          display: displayValue,
          [from('mobile', defaultTheme)]: {
            margin: marginValue,
          },
        });
      });

      it('should create style object when passing nested styles with mobile breakpoint size', () => {
        const marginValue: ResponsiveStyleProp<string> = '1px';
        const marginResponsiveValue = {
          mobile: marginValue,
        };

        const nestedStyles = {
          ['.bla']: { margin: marginResponsiveValue },
        };

        expect(createStyleObject(nestedStyles, defaultTheme)).toEqual({
          [from('mobile', defaultTheme)]: {
            ['.bla']: {
              margin: marginValue,
            },
          },
        });
      });

      it('should create style object when passing multiple nested styles with mobile breakpoint size', () => {
        const marginValue: ResponsiveStyleProp<string> = '1px';
        const displayValue: ResponsiveStyleProp<string> = 'block';

        const marginResponsiveValue = {
          mobile: marginValue,
        };
        const displayResponsiveValue = {
          mobile: displayValue,
        };

        const nestedStyles = {
          ['.bla']: {
            margin: marginResponsiveValue,
            display: displayResponsiveValue,
          },
        };

        expect(createStyleObject(nestedStyles, defaultTheme)).toEqual({
          [from('mobile', defaultTheme)]: {
            ['.bla']: {
              margin: marginValue,
              display: displayValue,
            },
          },
        });
      });
      it('should create style object when passing multiple nested styles with different breakpoint sizes', () => {
        const marginValue: ResponsiveStyleProp<string> = '1px';
        const displayValue: ResponsiveStyleProp<string> = 'block';

        const marginResponsiveValue = {
          mobile: marginValue,
        };
        const displayResponsiveValue = {
          _: displayValue,
        };

        const nestedStyles = {
          ['.bla']: {
            margin: marginResponsiveValue,
            display: displayResponsiveValue,
          },
        };

        expect(createStyleObject(nestedStyles, defaultTheme)).toEqual({
          ['.bla']: {
            display: displayValue,
          },
          [from('mobile', defaultTheme)]: {
            ['.bla']: {
              margin: marginValue,
            },
          },
        });
      });

      it('should create style object when passing style with a converter function', () => {
        const marginValue: ResponsiveStyleProp<boolean> = true;
        const marginConvertedValue = '1px';
        const marginResponsiveValue = {
          _: marginValue,
        };
        const styleConverter = (value: ResponsiveStyleValue) =>
          value ? marginConvertedValue : null;

        expect(
          createStyleObject(
            {
              ['.bla']: {
                margin: [marginResponsiveValue, styleConverter],
              },
            },
            defaultTheme
          )
        ).toEqual({
          ['.bla']: {
            margin: marginConvertedValue,
          },
        });
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

    it('should not return styles when keyValueConverter is passed and the returned value is null and breakpoint is mobile', () => {
      const marginValue: ResponsiveStyleProp<boolean> = false;
      const marginResponsiveValue = {
        mobile: marginValue,
      };
      const nestedStyles = { ['.bla']: { m: marginResponsiveValue } };
      const keyValueConverter: KeyValueConverter = (key, value) => ({
        key: key === 'm' ? 'margin' : key,
        value: value ? '1px' : null,
      });

      expect(
        createStyleObjectWithOptions(nestedStyles, defaultTheme, {
          from,
          keyValueConverter,
        })
      ).toEqual({});
    });
    it('should not return styles when keyValueConverter is passed and the returned value is null and breakpoint is mobile', () => {
      const marginValue: ResponsiveStyleProp<boolean> = false;
      const keyValueConverter: KeyValueConverter = (key, value) => ({
        key: key === 'm' ? 'margin' : key,
        value: value ? '1px' : null,
      });
      const marginResponsiveValue = {
        mobile: marginValue,
      };
      const nestedStyles = { m: marginResponsiveValue };

      expect(
        createStyleObjectWithOptions(nestedStyles, defaultTheme, {
          from,
          keyValueConverter,
        })
      ).toEqual({});
    });
  });
});
