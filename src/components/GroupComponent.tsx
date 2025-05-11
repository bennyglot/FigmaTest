import { FunctionComponent, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export type GroupComponentType = {
  className?: string;
  prop?: string;
  selectRelevantUseCases?: string;

  /** Style props */
  frameBoxWidth?: CSSProperties["width"];
  selectRelevantUseMarginLeft?: CSSProperties["marginLeft"];
};

const FrameChild = styled(Box)`
  height: 65px;
  width: 200px;
  position: relative;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: none;
`;
const B = styled(Typography)`
  width: 66.4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: var(--font-size-10xl);
  }
`;
const SelectRelevantUse = styled(Box)<{
  selectRelevantUseMarginLeft?: CSSProperties["marginLeft"];
}>`
  margin-left: -5.2px;
  height: 47.7px;
  position: relative;
  line-height: var(--font-size-lg);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
  margin-left: ${(p) => p.selectRelevantUseMarginLeft};
`;
const SelectRelevantUseCasesWrapper = styled(Box)<{
  frameBoxWidth?: CSSProperties["width"];
}>`
  width: 116.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
  width: ${(p) => p.frameBoxWidth};
`;
const RectangleParentRoot = styled(Box)`
  flex: 1;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-8) var(--padding-8xs) var(--padding-4xs-6);
  box-sizing: border-box;
  min-width: 184px;
  max-width: 200px;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
`;

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  prop,
  frameBoxWidth,
  selectRelevantUseCases,
  selectRelevantUseMarginLeft,
}) => {
  return (
    <RectangleParentRoot className={className}>
      <FrameChild />
      <B
        variant="inherit"
        component="b"
        sx={{ lineHeight: "47.7px", fontWeight: "700" }}
      >
        {prop}
      </B>
      <SelectRelevantUseCasesWrapper frameBoxWidth={frameBoxWidth}>
        <SelectRelevantUse
          selectRelevantUseMarginLeft={selectRelevantUseMarginLeft}
        >
          {selectRelevantUseCases}
        </SelectRelevantUse>
      </SelectRelevantUseCasesWrapper>
    </RectangleParentRoot>
  );
};

export default GroupComponent;
