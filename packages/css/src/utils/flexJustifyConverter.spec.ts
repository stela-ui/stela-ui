import type { FlexJustifyProps } from './flexJustifyConverter';
import { flexJustifyConverter } from './flexJustifyConverter';
// column justifyX === align-items
// column justifyY === justify-content && stretch === > * flex-grow: 1;

// row justifyY === align-items && stretch === > * flex-grow: 1;
// row justifyX === justify-content

describe('utils -> flexJustifyConverter', () => {
  it('returns proper value when non responsive and flow is column', () => {
    expect(
      flexJustifyConverter({
        flow: 'column',
        justifyY: 'stretch',
        justifyX: 'stretch',
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
        justifyY: 'stretch',
        justifyX: 'stretch',
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
      justifyY: ['stretch', null, 'flex-start', null, 'stretch'],
      justifyX: ['stretch', 'flex-end', null],
    };
    expect(flexJustifyConverter(props as FlexJustifyProps)).toEqual({
      alignItems: [
        props.justifyY[0],
        props.justifyY[1],
        props.justifyY[2],
        // swapped to column, last value was at index 1
        props.justifyX[1],
        null,
      ],
      flexFlow: props.flow,
      justifyContent: [
        props.justifyX[0],
        props.justifyX[1],
        props.justifyX[2],
        // swapped to column, last value was at index 2
        props.justifyY[2],
        props.justifyY[4],
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
