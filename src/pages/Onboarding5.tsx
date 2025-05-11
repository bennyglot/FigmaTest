import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Content1 from "../components/Content1";
import Actions from "../components/Actions";
import styled from "styled-components";
import Footer from "../components/Footer";

const Main = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  flex-shrink: 0;
  max-width: 100%;
`;
const OnboardingRoot = styled(Box)`
  width: 100%;
  height: 1080px;
  position: relative;
  background-color: var(--White);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 367px;
  box-sizing: border-box;
  gap: 87px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1000px) {
    gap: var(--gap-24xl);
  }
  @media screen and (max-width: 725px) {
    gap: var(--gap-3xl);
  }
  @media screen and (max-width: 450px) {
    height: auto;
  }
`;

const Onboarding5: FunctionComponent = () => {
  return (
    <OnboardingRoot>
      <Main>
        <Content1 />
        <Actions />
      </Main>
      <Footer />
    </OnboardingRoot>
  );
};

export default Onboarding5;
