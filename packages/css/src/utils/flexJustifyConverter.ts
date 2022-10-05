import type { ResponsiveStyleValue, ThemeUIEmpty } from '@theme-ui/css';

import type { ConverterFn } from './convertResponsiveValue';
import { convertResponsiveValue } from './convertResponsiveValue';

type FlowType = 'column' | 'row';
type JustifyType = 'flex-start' | 'flex-end' | 'stretch' | 'center';
type JustifyResponsiveValue = JustifyType | null | undefined | boolean;
type FlexGrowValue = 1 | 'initial' | null;

export interface FlexJustifyProps {
  flow?: ResponsiveStyleValue<FlowType>;
  justifyX?: ResponsiveStyleValue<JustifyType>;
  justifyY?: ResponsiveStyleValue<JustifyType>;
}

interface AlignConverterArg extends FlexJustifyProps {
  flow: Array<FlowType | ThemeUIEmpty>;
}

interface JustifyBaseConverterArg extends FlexJustifyProps {
  flow: FlowType;
}
// column justifyX === align-items
// column justifyY === justify-content && stretch === > * flex-grow: 1;

// row justifyX === justify-content && stretch === > * flex-grow: 1;
// row justifyY === align-items

const flexGrowConverter: ConverterFn<
  ResponsiveStyleValue<JustifyType>,
  FlexGrowValue
> = (value) =>
  (value === 'stretch' && 1) ||
  (typeof value === 'string' && value !== 'stretch' && 'initial') ||
  null;

const justifyBaseConverter = ({
  flow,
  justifyX,
  justifyY,
}: JustifyBaseConverterArg) => {
  const isRow = flow === 'row';
  return {
    '> *': {
      flexGrow: convertResponsiveValue(
        isRow ? justifyX : justifyY,
        flexGrowConverter
      ),
    },
    flexFlow: flow,
    alignItems: isRow ? justifyY : justifyX,
    justifyContent: isRow ? justifyX : justifyY,
  };
};

const alignConverter = ({ flow, justifyX, justifyY }: AlignConverterArg) => {
  const justifyXIsArray = Array.isArray(justifyX);
  const justifyYIsArray = Array.isArray(justifyY);
  const maxLength = Math.max(
    (justifyXIsArray && justifyX.length) || 0,
    (justifyYIsArray && justifyY.length) || 0
  );

  const filledFlow =
    flow.length >= maxLength
      ? flow
      : [...flow, ...new Array(maxLength - flow.length).fill(null)];

  const alignItems: JustifyResponsiveValue[] = [];
  const justifyContent: JustifyResponsiveValue[] = [];
  const flexGrow: FlexGrowValue[] = [];

  let lastFlowValue: string;
  let lastJustifyXValue: JustifyResponsiveValue = justifyXIsArray
    ? null
    : justifyX;
  let lastJustifyYValue: JustifyResponsiveValue = justifyYIsArray
    ? null
    : justifyY;

  filledFlow.forEach((currFlow, i) => {
    const currJustifyXValue = (justifyXIsArray && justifyX[i]) || null;
    const currJustifyYValue = (justifyYIsArray && justifyY[i]) || null;
    const currOrLastJustifyXValue = currJustifyXValue || lastJustifyXValue;
    const currOrLastJustifyYValue = currJustifyYValue || lastJustifyYValue;
    const currIsRow = currFlow === 'row';
    const currOrLastIsRow = currIsRow || lastFlowValue === 'row';

    if (currFlow && currFlow !== lastFlowValue) {
      alignItems.push(
        currIsRow ? currOrLastJustifyYValue : currOrLastJustifyXValue
      );
      justifyContent.push(
        currIsRow ? currOrLastJustifyXValue : currOrLastJustifyYValue
      );
      const lastStretchValue = currIsRow
        ? lastJustifyYValue
        : lastJustifyXValue;

      const currStretchValue = currIsRow
        ? currJustifyXValue
        : currJustifyYValue;

      flexGrow.push(
        (lastStretchValue === 'stretch' &&
          currStretchValue !== 'stretch' &&
          'initial') ||
          (currStretchValue === 'stretch' && 1) ||
          null
      );
    } else {
      alignItems.push(currOrLastIsRow ? currJustifyYValue : currJustifyXValue);
      justifyContent.push(
        currOrLastIsRow ? currJustifyXValue : currJustifyYValue
      );
      const currFlexGrowType = currOrLastIsRow
        ? currJustifyXValue
        : currJustifyYValue;

      flexGrow.push(
        (currFlexGrowType === 'stretch' && 1) ||
          (currFlexGrowType && currFlexGrowType !== 'stretch' && 'initial') ||
          null
      );
    }
    lastJustifyXValue = currOrLastJustifyXValue;
    lastJustifyYValue = currOrLastJustifyYValue;
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
  justifyX,
  justifyY,
}: FlexJustifyProps) =>
  (Array.isArray(flow) && {
    ...alignConverter({ flow, justifyX, justifyY }),
    flexFlow: flow,
  }) ||
  (typeof flow === 'string' &&
    justifyBaseConverter({ flow, justifyX, justifyY })) ||
  {};
