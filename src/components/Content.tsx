import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import BackgroundGradientOB from "./BackgroundGradientOB";
import HeaderOB from "./HeaderOB";
import styled from "styled-components";
import GroupComponent1 from "./GroupComponent1";

export type ContentType = {
  className?: string;
};

const WelcomeToStardox = styled(Typography)``;
const WelcomeToStardoxJohn = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 1px;
`;
const WereHereToHelpYouThrough = styled(Typography)`
  margin: 0;
  color: var(--Light-Text-SW);
`;
const WelcomeToStardoxContainer = styled(Box)`
  flex: 1;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 154.5%;
  display: inline-block;
  min-width: 322px;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: var(--font-size-13xl);
  }
`;
const WelcomeToStardoxJohnWeParent = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-24xl);
  @media screen and (max-width: 750px) {
    gap: var(--gap-2xl);
    flex-wrap: wrap;
  }
`;
const Checkout = styled(Typography)`
  margin: 0;
  align-self: stretch;
  position: relative;
  white-space: pre-wrap;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-16xl);
    line-height: 41px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-7xl);
    line-height: 31px;
  }
`;
const YouveChosenTo = styled(Typography)`
  margin: 0;
  width: 660px;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
    line-height: var(--font-size-7xl);
  }
`;
const CheckoutParent = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-xl);
  }
`;
const ChooseAPayment = styled(Typography)`
  margin: 0;
  width: 660px;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const FrameGroup = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xl);
  max-width: 100%;
`;
const FrameWrapper = styled(Box)`
  width: 726px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-25xl);
`;
const FrameParent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-25xl);
  min-width: 480px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-7xl);
  @media screen and (max-width: 750px) {
    gap: var(--gap-3xl);
    min-width: 100%;
  }
`;
const FrameChild = styled(Box)`
  height: 65px;
  width: 200px;
  position: relative;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: none;
`;
const Empty = styled(Typography)`
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
const SelectRelevantUse = styled(Box)`
  margin-left: -5.2px;
  height: 47.7px;
  position: relative;
  line-height: var(--font-size-lg);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
`;
const UseCaseSelection = styled(Box)`
  width: 116.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const RectangleParent = styled(Box)`
  width: 200px;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-8) var(--padding-8xs) var(--padding-4xs-6);
  box-sizing: border-box;
  z-index: 1;
`;
const ButtonLabels = styled(Box)`
  width: 118.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const RectangleGroup = styled(Box)`
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
  min-width: 130px;
  z-index: 1;
`;
const StartUsingStardoxWrapper = styled(Box)`
  width: 108.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const ButtonNavigation = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Component1 = styled(Button)`
  height: 55px;
  width: 140px;
  padding: var(--padding-lg) var(--padding-12xl) var(--padding-3xs);
  box-sizing: border-box;
  z-index: 2;
`;
const Component2 = styled(Button)`
  height: 55px;
  width: 140px;
  padding: var(--padding-lg) var(--padding-11xl) var(--padding-3xs)
    var(--padding-13xl);
  box-sizing: border-box;
  opacity: 0.2;
  z-index: 1;
`;
const NavigationButtons = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Buttons = styled(Box)`
  width: 421.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-28xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-4xl);
  }
`;
const PageContent = styled(Box)`
  width: 1401px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-9);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const Body = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-2xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const ContentRoot = styled(Box)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-55xl);
  box-sizing: border-box;
  gap: var(--gap-16xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
    gap: var(--gap-mid);
  }
`;

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <ContentRoot className={className}>
      <BackgroundGradientOB />
      <HeaderOB stargoLogo="/stargo-logo.svg" />
      <Body>
        <PageContent>
          <FrameParent>
            <WelcomeToStardoxJohnWeParent>
              <WelcomeToStardoxContainer>
                <WelcomeToStardoxJohn variant="inherit">
                  <WelcomeToStardox variant="inherit" component="span">
                    <WelcomeToStardox
                      variant="inherit"
                      component="span"
                      sx={{ fontWeight: "600" }}
                    >{`Welcome to StarDox, John! `}</WelcomeToStardox>
                  </WelcomeToStardox>
                </WelcomeToStardoxJohn>
                <WereHereToHelpYouThrough
                  variant="inherit"
                  sx={{ fontSize: "var(--font-size-xl)" }}
                >
                  <WelcomeToStardox variant="inherit" component="span">
                    <WelcomeToStardox variant="inherit" component="span">
                      We're here to help you through a quick onboarding
                    </WelcomeToStardox>
                  </WelcomeToStardox>
                </WereHereToHelpYouThrough>
              </WelcomeToStardoxContainer>
              <GroupComponent1 />
            </WelcomeToStardoxJohnWeParent>
            <FrameWrapper>
              <FrameGroup>
                <CheckoutParent>
                  <Checkout
                    variant="inherit"
                    component="h1"
                    sx={{ lineHeight: "51px", letterSpacing: "-0.02em" }}
                  >
                    <WelcomeToStardox
                      variant="inherit"
                      component="span"
                      sx={{ fontWeight: "300" }}
                    >{`3. `}</WelcomeToStardox>
                    <WelcomeToStardox
                      variant="inherit"
                      component="span"
                      sx={{ fontWeight: "500" }}
                    >{` `}</WelcomeToStardox>
                    <WelcomeToStardox
                      variant="inherit"
                      component="span"
                      sx={{ fontWeight: "300" }}
                    >
                      Checkout
                    </WelcomeToStardox>
                  </Checkout>
                  <YouveChosenTo
                    variant="inherit"
                    component="h3"
                    sx={{
                      fontWeight: "400",
                      fontSize: "var(--font-size-2xl)",
                      lineHeight: "154.5%",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    You’ve chosen to try StarDox for free. Don’t worry, your
                    card won’t be charged. We only need your credit card number
                    to complete the registration process
                  </YouveChosenTo>
                </CheckoutParent>
                <ChooseAPayment
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "500",
                    fontSize: "var(--font-size-4xl)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Choose a payment option:
                </ChooseAPayment>
              </FrameGroup>
            </FrameWrapper>
          </FrameParent>
          <RectangleParent>
            <FrameChild />
            <Empty
              variant="inherit"
              component="b"
              sx={{ lineHeight: "47.7px", fontWeight: "700" }}
            >
              2.
            </Empty>
            <UseCaseSelection>
              <SelectRelevantUse>Select relevant use cases</SelectRelevantUse>
            </UseCaseSelection>
          </RectangleParent>
          <Buttons>
            <ButtonNavigation>
              <RectangleGroup>
                <FrameChild />
                <Empty
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "47.7px", fontWeight: "700" }}
                >
                  3.
                </Empty>
                <ButtonLabels>
                  <SelectRelevantUse>Payment options</SelectRelevantUse>
                </ButtonLabels>
              </RectangleGroup>
              <RectangleGroup>
                <FrameChild />
                <Empty
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "47.7px", fontWeight: "700" }}
                >
                  4.
                </Empty>
                <StartUsingStardoxWrapper>
                  <SelectRelevantUse>Start using StarDox</SelectRelevantUse>
                </StartUsingStardoxWrapper>
              </RectangleGroup>
            </ButtonNavigation>
            <NavigationButtons>
              <Component1
                startIcon={
                  <img width="18px" height="16px" src="/primary2.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#9eadb9",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#9eadb9" },
                  width: 140,
                  height: 55,
                }}
              >
                Back
              </Component1>
              <Component2
                endIcon={
                  <img width="18px" height="16px" src="/primary-1.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#002846",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#002846" },
                  width: 140,
                  height: 55,
                }}
              >
                Next
              </Component2>
            </NavigationButtons>
          </Buttons>
        </PageContent>
      </Body>
    </ContentRoot>
  );
};

export default Content;
