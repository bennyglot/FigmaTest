import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import BackgroundGradientOB from "./BackgroundGradientOB";
import HeaderOB from "./HeaderOB";
import styled from "styled-components";

export type FrameComponent1Type = {
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
const WelcomeToStardoxContainer = styled.span`
  width: 100%;
`;
const WelcomeToStardoxContainer1 = styled(Box)`
  width: 30.938rem;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 154.5%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: var(--font-size-13xl);
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
const StepsPlaceholder = styled(Typography)`
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
const SelectYour = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 0.87px;
`;
const Package = styled(Typography)`
  margin: 0;
`;
const SelectYourPackageContainer = styled(Box)`
  margin-left: -0.319rem;
  width: 7.556rem;
  height: 2.981rem;
  position: relative;
  line-height: var(--font-size-lg);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
`;
const SelectYourPackageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  text-align: left;
  font-size: var(--font-size-mini);
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
  box-sizing: border-box;
  min-width: 11.5rem;
  max-width: 12.5rem;
  z-index: 1;
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
const PaymentOptionsWrapper = styled(Box)`
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
const StartUsingStardoxWrapper = styled(Box)`
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
const PackageSelection = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl-9);
  min-width: 35.063rem;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-17xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const WelcomeMessage = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-24xl);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-2xl);
  }
`;
const SelectYourPackageContainer1 = styled.span`
  width: 100%;
  white-space: pre-wrap;
`;
const SelectYourPackageContainer2 = styled(Typography)`
  margin: 0;
  width: 32.5rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
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
const PackageSelectChild = styled(Button)`
  height: 4.125rem;
  width: 8.75rem;
  padding: 0rem 0rem var(--padding-2xs);
  box-sizing: border-box;
`;
const PackageSelect = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  font-size: var(--font-size-25xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const WelcomeMessageParent = styled(Box)`
  width: 87.563rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  max-width: 100%;
`;
const FrameWrapper = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-2xl) 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const GroupIcon = styled.img`
  width: 6.938rem;
  height: 6.938rem;
  position: absolute;
  margin: 0 !important;
  right: 13.313rem;
  bottom: 14.063rem;
  z-index: 2;
`;
const BackgroundGradientObParentRoot = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-254xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-16xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-7xl);
  color: var(--color-gray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
    gap: var(--gap-mid);
    padding-bottom: var(--padding-158xl);
    box-sizing: border-box;
  }
`;

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <BackgroundGradientObParentRoot className={className}>
      <BackgroundGradientOB />
      <HeaderOB stargoLogo="/stargo-logo.svg" />
      <FrameWrapper>
        <WelcomeMessageParent>
          <WelcomeMessage>
            <WelcomeToStardoxContainer1>
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
            </WelcomeToStardoxContainer1>
            <PackageSelection>
              <RectangleParent>
                <FrameChild />
                <StepsPlaceholder
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
                >
                  1.
                </StepsPlaceholder>
                <SelectYourPackageWrapper>
                  <SelectYourPackageContainer>
                    <WelcomeToStardoxContainer>
                      <SelectYour variant="inherit">{`Select your `}</SelectYour>
                      <Package variant="inherit">package</Package>
                    </WelcomeToStardoxContainer>
                  </SelectYourPackageContainer>
                </SelectYourPackageWrapper>
              </RectangleParent>
              <RectangleParent>
                <FrameChild />
                <StepsPlaceholder
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
                >
                  2.
                </StepsPlaceholder>
                <SelectRelevantUseCasesWrapper>
                  <SelectRelevantUse>
                    Select relevant use cases
                  </SelectRelevantUse>
                </SelectRelevantUseCasesWrapper>
              </RectangleParent>
              <RectangleParent>
                <FrameChild />
                <StepsPlaceholder
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
                >
                  3.
                </StepsPlaceholder>
                <PaymentOptionsWrapper>
                  <SelectRelevantUse>Payment options</SelectRelevantUse>
                </PaymentOptionsWrapper>
              </RectangleParent>
              <RectangleParent>
                <FrameChild />
                <StepsPlaceholder
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "2.981rem", fontWeight: "700" }}
                >
                  4.
                </StepsPlaceholder>
                <StartUsingStardoxWrapper>
                  <StartUsingStardox>Start using StarDox</StartUsingStardox>
                </StartUsingStardoxWrapper>
              </RectangleParent>
            </PackageSelection>
          </WelcomeMessage>
          <PackageSelect>
            <SelectYourPackageContainer2
              variant="inherit"
              component="h1"
              sx={{ lineHeight: "3.188rem", letterSpacing: "-0.02em" }}
            >
              <SelectYourPackageContainer1>
                <WelcomeToStardox
                  variant="inherit"
                  component="span"
                  sx={{ fontWeight: "300" }}
                >{`1. `}</WelcomeToStardox>
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
                  Select your package
                </WelcomeToStardox>
              </SelectYourPackageContainer1>
            </SelectYourPackageContainer2>
            <PackageSelectChild
              endIcon={<img width="18px" height="16px" src="/primary.svg" />}
              disableElevation
              variant="text"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                borderRadius: "0px 0px 0px 0px",
                width: 140,
                height: 66,
              }}
            >
              Next
            </PackageSelectChild>
          </PackageSelect>
        </WelcomeMessageParent>
      </FrameWrapper>
      <GroupIcon alt="" src="/group-240531.svg" />
    </BackgroundGradientObParentRoot>
  );
};

export default FrameComponent1;
