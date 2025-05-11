import { FunctionComponent } from "react";
import { Typography, Button, Box } from "@mui/material";
import RectangleComponent from "./RectangleComponent";
import WebsiteHeaderAlt from "./WebsiteHeaderAlt";
import styled from "styled-components";

export type Content1Type = {
  className?: string;
};

const WelcomeToStardox = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 0.71px;
`;
const YouCanNow = styled(Typography)`
  margin: 0;
`;
const WelcomeToStardoxContainer = styled(Typography)`
  margin: 0;
  align-self: stretch;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    font-size: var(--font-size-18xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-9xl);
  }
`;
const FormFieldsChild = styled(Button)`
  align-self: stretch;
  height: 60px;
  padding: var(--padding-mini) var(--padding-153xl) var(--padding-mini)
    var(--padding-154xl);
  box-sizing: border-box;
  z-index: 1;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const LogIn = styled(Box)`
  width: 86.5px;
  position: absolute;
  margin: 0 !important;
  top: -22px;
  left: 219.2px;
  font-size: var(--font-size-xl);
  font-family: var(--font-poppins);
  color: var(--White);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const FrameChild = styled(Box)`
  height: 60px;
  width: 526px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-100);
  display: none;
  max-width: 100%;
`;
const Password = styled(Box)`
  flex: 1;
  position: relative;
  font-size: var(--font-size-lg);
  font-family: var(--font-poppins);
  color: var(--Bluish-grey-SW);
  text-align: center;
  z-index: 1;
`;
const RectangleParent = styled(Box)`
  flex: 1;
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-153xl) var(--padding-base)
    var(--padding-154xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 725px) {
    padding-left: var(--padding-67xl);
    padding-right: var(--padding-67xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const InputFields = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const FormFields = styled(Box)`
  width: 526px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 100%;
`;
const OnboardingMessage = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const WelcomeMessage = styled(Box)`
  width: 1054px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-71xl);
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    gap: var(--gap-26xl);
  }
  @media screen and (max-width: 725px) {
    gap: var(--gap-3xl);
  }
`;
const ContentRoot = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-4xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-80xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-27xl);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1000px) {
    gap: var(--gap-30xl);
  }
  @media screen and (max-width: 725px) {
    gap: var(--gap-6xl);
  }
`;

const Content1: FunctionComponent<Content1Type> = ({ className = "" }) => {
  return (
    <ContentRoot className={className}>
      <RectangleComponent />
      <WebsiteHeaderAlt />
      <OnboardingMessage>
        <WelcomeMessage>
          <WelcomeToStardoxContainer
            variant="inherit"
            component="h1"
            sx={{ fontWeight: "500", letterSpacing: "-0.02em" }}
          >
            <WelcomeToStardox variant="inherit">
              Welcome to StarDox, John!
            </WelcomeToStardox>
            <YouCanNow variant="inherit">
              You can now log in to your account
            </YouCanNow>
          </WelcomeToStardoxContainer>
          <OnboardingMessage>
            <FormFields>
              <FormFieldsChild
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#9eadb9",
                  fontSize: "18",
                  background: "#edf0f4",
                  borderRadius: "30px",
                  "&:hover": { background: "#edf0f4" },
                  height: 60,
                }}
              >
                Email address
              </FormFieldsChild>
              <InputFields>
                <LogIn>Log In</LogIn>
                <RectangleParent>
                  <FrameChild />
                  <Password>Password</Password>
                </RectangleParent>
              </InputFields>
            </FormFields>
          </OnboardingMessage>
        </WelcomeMessage>
      </OnboardingMessage>
    </ContentRoot>
  );
};

export default Content1;
