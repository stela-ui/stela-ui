import type { FlexAlignProps } from './flexJustifyConverter';
import { flexJustifyConverter } from './flexJustifyConverter';
// column alignX === align-items
// column alignY === justify-content && stretch === > * flex-grow: 1;

// row alignY === align-items && stretch === > * flex-grow: 1;
// row alignX === justify-content

describe('utils -> flexJustifyConverter', () => {
  it('returns proper value when non responsive and flow is column', () => {
    expect(
      flexJustifyConverter({
        flow: 'column',
        alignY: 'stretch',
        alignX: 'stretch',
      })
    ).toEqual({
      flexFlow: 'column',
      justifyContent: 'stretch',
      alignItems: 'stretch',
      '> *': { flexGrow: 1 },
    });
  });
  it('returns proper value when non responsive and flow is row', () => {
    expect(
      flexJustifyConverter({
        flow: 'row',
        alignY: 'stretch',
        alignX: 'stretch',
      })
    ).toEqual({
      flexFlow: 'row',
      justifyContent: 'stretch',
      alignItems: 'stretch',
      '> *': { flexGrow: 1 },
    });
  });

  it('returns proper value when passing responsive values', () => {
    const props = {
      flow: ['row', null, null, 'column'],
      alignY: ['stretch', null, 'flex-start', null, 'stretch'],
      alignX: ['stretch', 'flex-end', null],
    };
    expect(flexJustifyConverter(props as FlexAlignProps)).toEqual({
      alignItems: [
        props.alignY[0],
        props.alignY[1],
        props.alignY[2],
        // swapped to column, last value was at index 1
        props.alignX[1],
        null,
      ],
      flexFlow: props.flow,
      justifyContent: [
        props.alignX[0],
        props.alignX[1],
        props.alignX[2],
        // swapped to column, last value was at index 2
        props.alignY[2],
        props.alignY[4],
      ],
      '> *': {
        flexGrow: [
          1,
          'initial',
          null,
          // swapped to clumn but last value is flex-start
          null,
          1,
        ],
      },
    });
  });
});
