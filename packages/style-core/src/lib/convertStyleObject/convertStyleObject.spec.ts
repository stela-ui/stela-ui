import { createStyleObject } from './convertStyleObject';

describe('responsiveStyles -> createResponsiveStyles', () => {
  it('should create style object when not passing any responsive styles', () => {
    const marginValue = '1px';

    expect(createStyleObject({ margin: marginValue })).toMatchObject({
      margin: marginValue,
    });
  });
});
