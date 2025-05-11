import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import styled from "styled-components";
import PlanCardInstanceContainer from "../components/PlanCardInstanceContainer";
import FooterOB from "../components/FooterOB";

const FrameGroup = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-6xl);
  }
`;
const SelectPackageRoot = styled(Box)`
  width: 100%;
  position: relative;
  background-color: var(--White);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-184xl);
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1050px) {
    gap: var(--gap-82xl);
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-32xl);
  }
`;

const SelectPackage4: FunctionComponent = () => {
  return (
    <SelectPackageRoot>
      <FrameParent>
        <FrameGroup>
          <FrameComponent1 />
          <FrameComponent2 />
        </FrameGroup>
        <PlanCardInstanceContainer />
      </FrameParent>
      <FooterOB stargoLogo="/stargo-logo-1.svg" />
    </SelectPackageRoot>
  );
};

export default SelectPackage4;
