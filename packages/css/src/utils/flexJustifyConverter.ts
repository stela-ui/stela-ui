import type { ResponsiveStyleValue, ThemeUIEmpty } from '@theme-ui/css';

import type { ConverterFn } from './convertResponsiveValue';
import { convertResponsiveValue } from './convertResponsiveValue';

type FlowType = 'column' | 'row';
type JustifyType = 'flex-start' | 'flex-end' | 'stretch' | 'center';
type JustifyResponsiveValue = JustifyType | null | undefined | boolean;
type FlexGrowValue = 1 | 'initial' | null;

export interface FlexAlignProps {
  flow?: ResponsiveStyleValue<FlowType>;
  alignX?: ResponsiveStyleValue<JustifyType>;
  alignY?: ResponsiveStyleValue<JustifyType>;
}

interface AlignConverterArg extends FlexAlignProps {
  flow: Array<FlowType | ThemeUIEmpty>;
}

interface JustifyBaseConverterArg extends FlexAlignProps {
  flow: FlowType;
}
// column alignX === align-items
// column alignY === justify-content && stretch === > * flex-grow: 1;

// row alignX === justify-content && stretch === > * flex-grow: 1;
// row alignY === align-items

const flexGrowConverter: ConverterFn<
  ResponsiveStyleValue<JustifyType>,
  FlexGrowValue
> = (value) =>
  (value === 'stretch' && 1) ||
  (typeof value === 'string' && value !== 'stretch' && 'initial') ||
  null;

const justifyBaseConverter = ({
  flow,
  alignX,
  alignY,
}: JustifyBaseConverterArg) => {
  const isRow = flow === 'row';
  return {
    '> *': {
      flexGrow: convertResponsiveValue(
        isRow ? alignX : alignY,
        flexGrowConverter
      ),
    },
    flexFlow: flow,
    alignItems: isRow ? alignY : alignX,
    justifyContent: isRow ? alignX : alignY,
  };
};

const alignConverter = ({ flow, alignX, alignY }: AlignConverterArg) => {
  const alignXIsArray = Array.isArray(alignX);
  const alignYIsArray = Array.isArray(alignY);
  const maxLength = Math.max(
    (alignXIsArray && alignX.length) || 0,
    (alignYIsArray && alignY.length) || 0
  );

  const filledFlow =
    flow.length >= maxLength
      ? flow
      : [...flow, ...new Array(maxLength - flow.length).fill(null)];

  const alignItems: JustifyResponsiveValue[] = [];
  const justifyContent: JustifyResponsiveValue[] = [];
  const flexGrow: FlexGrowValue[] = [];

  let lastFlowValue: string;
  let lastalignXValue: JustifyResponsiveValue = alignXIsArray ? null : alignX;
  let lastalignYValue: JustifyResponsiveValue = alignYIsArray ? null : alignY;

  filledFlow.forEach((currFlow, i) => {
    const curralignXValue = (alignXIsArray && alignX[i]) || null;
    const curralignYValue = (alignYIsArray && alignY[i]) || null;
    const currOrLastalignXValue = curralignXValue || lastalignXValue;
    const currOrLastalignYValue = curralignYValue || lastalignYValue;
    const currIsRow = currFlow === 'row';
    const currOrLastIsRow = currIsRow || lastFlowValue === 'row';

    if (currFlow && currFlow !== lastFlowValue) {
      alignItems.push(
        currIsRow ? currOrLastalignYValue : currOrLastalignXValue
      );
      justifyContent.push(
        currIsRow ? currOrLastalignXValue : currOrLastalignYValue
      );
      const lastStretchValue = currIsRow ? lastalignYValue : lastalignXValue;

      const currStretchValue = currIsRow ? curralignXValue : curralignYValue;

      flexGrow.push(
        (lastStretchValue === 'stretch' &&
          currStretchValue !== 'stretch' &&
          'initial') ||
          (currStretchValue === 'stretch' && 1) ||
          null
      );
    } else {
      alignItems.push(currOrLastIsRow ? curralignYValue : curralignXValue);
      justifyContent.push(currOrLastIsRow ? curralignXValue : curralignYValue);
      const currFlexGrowType = currOrLastIsRow
        ? curralignXValue
        : curralignYValue;

      flexGrow.push(
        (currFlexGrowType === 'stretch' && 1) ||
          (currFlexGrowType && currFlexGrowType !== 'stretch' && 'initial') ||
          null
      );
    }
    lastalignXValue = currOrLastalignXValue;
    lastalignYValue = currOrLastalignYValue;
    lastFlowValue = currFlow || lastFlowValue;
  });
  return {
    alignItems,
    justifyContent,
    '> *': {
      flexGrow,
    },
  };
};

export const flexJustifyConverter = ({
  flow,
  alignX,
  alignY,
}: FlexAlignProps) =>
  (Array.isArray(flow) && {
    ...alignConverter({ flow, alignX, alignY }),
    flexFlow: flow,
  }) ||
  (typeof flow === 'string' &&
    justifyBaseConverter({ flow, alignX, alignY })) ||
  {};
