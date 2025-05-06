import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export type GroupComponent1Type = {
  className?: string;
};

const FrameChild = styled(Box)`
  height: 4.063rem;
  width: 12.5rem;
  position: relative;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: none;
`;
const Empty = styled(Typography)`
  width: 4.15rem;
  position: relative;
  line-height: 2.981rem;
  display: flex;
  color: var(--color-gray);
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
    line-height: 2.375rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: var(--font-size-10xl);
  }
`;
const SelectYour = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 0.87px;
`;
const Package = styled(Typography)`
  margin: 0;
`;
const SelectYourPackageContainer = styled.span`
  width: 100%;
`;
const SelectYourPackageContainer1 = styled(Box)`
  margin-left: -0.319rem;
  width: 7.556rem;
  height: 2.981rem;
  position: relative;
  font-size: var(--font-size-mini);
  line-height: var(--font-size-lg);
  font-family: var(--font-poppins);
  color: var(--color-gray);
  text-align: left;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
`;
const PackageSelection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
`;
const RectangleParent = styled(Box)`
  flex: 1;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-8) var(--padding-8xs) var(--padding-4xs-6);
`;
const FrameWrapperRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 12.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0.3;
  z-index: 1;
`;

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <FrameWrapperRoot className={className}>
      <RectangleParent>
        <FrameChild />
        <Empty
          component="b"
          sx={{
            fontFamily: "var(--font-poppins)",
            fontSize: "var(--font-size-17xl)",
          }}
        >
          1.
        </Empty>
        <PackageSelection>
          <SelectYourPackageContainer1>
            <SelectYourPackageContainer>
              <SelectYour variant="inherit">{`Select your `}</SelectYour>
              <Package variant="inherit">package</Package>
            </SelectYourPackageContainer>
          </SelectYourPackageContainer1>
        </PackageSelection>
      </RectangleParent>
    </FrameWrapperRoot>
  );
};

export default GroupComponent1;
