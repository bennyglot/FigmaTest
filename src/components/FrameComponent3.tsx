import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import BackgroundGradientOB from "./BackgroundGradientOB";
import HeaderOB from "./HeaderOB";
import styled from "styled-components";
import GroupComponent1 from "./GroupComponent1";

export type FrameComponent3Type = {
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
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 154.5%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: var(--font-size-13xl);
  }
`;
const WelcomeMessage = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  min-width: 20.125rem;
  max-width: 100%;
`;
const WelcomeMessageParent = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-6xl);
    flex-wrap: wrap;
  }
`;
const StartUsingStardoxContainer = styled(Typography)`
  margin: 0;
  flex: 1;
  position: relative;
  white-space: pre-wrap;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-16xl);
    line-height: 2.563rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-7xl);
    line-height: 1.938rem;
  }
`;
const StartUsingStardoxWrapper = styled(Box)`
  width: 45.375rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-25xl);
`;
const WelcomeContent = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-3xl);
  }
`;
const CongratulationsAndWelcome = styled(Box)`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 154.5%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 1.563rem;
  }
`;
const Your3DayTrial = styled(Typography)`
  margin: 0;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: var(--font-size-8xl);
  }
`;
const CongratulationsAndWelcomeToParent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
  max-width: 100%;
`;
const FrameContainer = styled(Box)`
  width: 41.375rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-xl);
`;
const CarreersHeader = styled.img`
  width: 45rem;
  position: absolute;
  margin: 0 !important;
  right: -42.025rem;
  bottom: -23.562rem;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const WelcomeContentParent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs) 0rem 0rem;
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-24xl);
  min-width: 30.438rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-7xl);
  @media screen and (max-width: 750px) {
    gap: var(--gap-2xl);
    min-width: 100%;
  }
`;
const FrameChild = styled(Box)`
  height: 4.063rem;
  width: 12.5rem;
  position: relative;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: none;
`;
const B = styled(Typography)`
  width: 4.15rem;
  position: relative;
  display: flex;
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
const SelectRelevantUse = styled(Box)`
  margin-left: -0.325rem;
  height: 2.981rem;
  position: relative;
  line-height: var(--font-size-lg);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
`;
const SelectRelevantUseCasesWrapper = styled(Box)`
  width: 7.281rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const RectangleParent = styled(Box)`
  align-self: stretch;
  box-shadow: 5.2px 5.2px 13px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-6xs-1);
  background-color: var(--White);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-8) var(--padding-8xs) var(--padding-4xs-6);
  z-index: 1;
`;
const FrameDiv = styled(Box)`
  width: 13.113rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-4xs) 0rem 0rem;
  box-sizing: border-box;
`;
const PaymentOptionsLabel = styled(Box)`
  width: 7.388rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const Component1 = styled(Button)`
  width: 8.75rem;
  height: 3.438rem;
  padding: var(--padding-lg) var(--padding-12xl) var(--padding-3xs);
  box-sizing: border-box;
`;
const FrameGroup = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-28xl);
`;
const FrameWrapper = styled(Box)`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
`;
const StartUsingStardox = styled(Box)`
  margin-left: -0.319rem;
  height: 2.981rem;
  position: relative;
  line-height: var(--font-size-lg);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
`;
const StartUsingStardoxFrame = styled(Box)`
  width: 6.806rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const RectangleContainer = styled(Box)`
  width: 12.5rem;
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
const Component2 = styled(Button)`
  align-self: stretch;
  height: 3.438rem;
  padding: var(--padding-lg) var(--padding-lg) var(--padding-6xs)
    var(--padding-xl);
  box-sizing: border-box;
  z-index: 1;
`;
const FrameWrapper1 = styled(Box)`
  width: 13.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
`;
const FrameParent = styled(Box)`
  width: 87.563rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-2xs-2);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const FrameWrapper2 = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-2xl) 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const BackgroundGradientObParentRoot = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-21xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-15xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--color-gray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
    gap: var(--gap-mid);
  }
`;

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <BackgroundGradientObParentRoot className={className}>
      <BackgroundGradientOB />
      <HeaderOB stargoLogo="/stargo-logo.svg" />
      <FrameWrapper2>
        <FrameParent>
          <WelcomeContentParent>
            <WelcomeContent>
              <WelcomeMessageParent>
                <WelcomeMessage>
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
                </WelcomeMessage>
                <GroupComponent1 />
              </WelcomeMessageParent>
              <StartUsingStardoxWrapper>
                <StartUsingStardoxContainer
                  variant="inherit"
                  component="h1"
                  sx={{ lineHeight: "3.188rem", letterSpacing: "-0.02em" }}
                >
                  <WelcomeToStardox
                    variant="inherit"
                    component="span"
                    sx={{ fontWeight: "300" }}
                  >{`4. `}</WelcomeToStardox>
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
                    Start using StarDox
                  </WelcomeToStardox>
                </StartUsingStardoxContainer>
              </StartUsingStardoxWrapper>
            </WelcomeContent>
            <FrameContainer>
              <CongratulationsAndWelcomeToParent>
                <CongratulationsAndWelcome>
                  Congratulations and welcome to StarDox! You’re all set to
                  explore a smarter, faster way to manage your documents. We’re
                  excited to have you on board—let’s get started!
                </CongratulationsAndWelcome>
                <Your3DayTrial
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "500",
                    fontSize: "var(--font-size-3xl)",
                    lineHeight: "154.5%",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Your 3-day trial will begin immediately after you click the
                  ‘Start Free Trial’ button.
                </Your3DayTrial>
              </CongratulationsAndWelcomeToParent>
            </FrameContainer>
            <CarreersHeader
              loading="lazy"
              alt=""
              src="/carreers-header--75-1@2x.png"
            />
          </WelcomeContentParent>
          <FrameDiv>
            <RectangleParent>
              <FrameChild />
              <B
                variant="inherit"
                component="b"
                sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
              >
                2.
              </B>
              <SelectRelevantUseCasesWrapper>
                <SelectRelevantUse>Select relevant use cases</SelectRelevantUse>
              </SelectRelevantUseCasesWrapper>
            </RectangleParent>
          </FrameDiv>
          <FrameWrapper>
            <FrameGroup>
              <RectangleParent>
                <FrameChild />
                <B
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
                >
                  3.
                </B>
                <PaymentOptionsLabel>
                  <SelectRelevantUse>Payment options</SelectRelevantUse>
                </PaymentOptionsLabel>
              </RectangleParent>
              <Component1
                startIcon={
                  <img width="18px" height="16px" src="/primary1.svg" />
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
            </FrameGroup>
          </FrameWrapper>
          <FrameWrapper1>
            <FrameGroup>
              <RectangleContainer>
                <FrameChild />
                <B
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
                >
                  4.
                </B>
                <StartUsingStardoxFrame>
                  <StartUsingStardox>Start using StarDox</StartUsingStardox>
                </StartUsingStardoxFrame>
              </RectangleContainer>
              <Component2
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#002846",
                  borderRadius: "30px",
                  "&:hover": { background: "#002846" },
                  height: 55,
                }}
              >
                Start Free Trial
              </Component2>
            </FrameGroup>
          </FrameWrapper1>
        </FrameParent>
      </FrameWrapper2>
    </BackgroundGradientObParentRoot>
  );
};

export default FrameComponent3;
