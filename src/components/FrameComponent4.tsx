import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import PricingBlock from "./PricingBlock";

export type FrameComponent4Type = {
  className?: string;
};

const FrameChild = styled(Box)`
  width: 660px;
  height: 386px;
  position: relative;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-mini);
  background-color: var(--White);
  display: none;
  max-width: 100%;
`;
const FrameItem = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 1;
`;
const FrameInner = styled.img`
  height: 89px;
  width: 28px;
  position: relative;
  z-index: 1;
`;
const FrameWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-12xs);
`;
const FrameContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
`;
const FreeTrial = styled(Typography)`
  margin: 0;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
    line-height: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 11px;
  }
`;
const FreeTrialWrapper = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Free3Days = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 0.87px;
`;
const Free3DaysContainer = styled(Box)`
  width: 285px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: var(--font-size-13xl);
  font-weight: 500;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: var(--font-size-7xl);
  }
`;
const FrameDiv = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  min-width: 229px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const FrameGroup = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  min-width: 258px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Div = styled(Box)`
  align-self: stretch;
  position: relative;
  line-height: var(--font-size-lg);
  font-weight: 300;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-37xl);
    line-height: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
    line-height: 11px;
  }
`;
const Wrapper = styled(Box)`
  width: 98px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  text-align: right;
  font-size: var(--font-size-51xl);
`;
const FrameParent = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-50xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-15xl);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mid);
  }
`;
const ExploreKeyFeatures = styled(Typography)`
  margin: 0;
`;
const ExperienceLimitedAccessContainer = styled(Box)`
  flex: 1;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const ExperienceLimitedAccessToOWrapper = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-12xs);
  font-size: var(--font-size-xl);
`;
const LearnMoreAbout = styled(Box)`
  width: 390px;
  position: relative;
  font-size: var(--font-size-mid);
  text-decoration: underline;
  line-height: var(--font-size-16xl);
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const RectangleParent = styled(Box)`
  flex: 1;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-mini);
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) var(--padding-27xl) var(--padding-16xl)
    var(--padding-31xl);
  box-sizing: border-box;
  gap: var(--gap-mini);
  min-width: 429px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-6xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-238xl);
    padding-bottom: var(--padding-4xl);
    box-sizing: border-box;
  }
`;
const PricingBlocks = styled(Box)`
  width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: var(--gap-61xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-21xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const PricingBlocksWrapperRoot = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  margin-top: -237px;
  position: relative;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
`;

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <PricingBlocksWrapperRoot className={className}>
      <PricingBlocks>
        <RectangleParent>
          <FrameChild />
          <FrameParent>
            <FrameGroup>
              <FrameContainer>
                <FrameItem loading="lazy" alt="" src="/group-241330.svg" />
                <FrameWrapper>
                  <FrameInner loading="lazy" alt="" src="/group-241438.svg" />
                </FrameWrapper>
              </FrameContainer>
              <FrameDiv>
                <FreeTrialWrapper>
                  <FreeTrial
                    variant="inherit"
                    component="h1"
                    sx={{
                      fontWeight: "500",
                      lineHeight: "var(--font-size-lg)",
                    }}
                  >
                    Free Trial
                  </FreeTrial>
                </FreeTrialWrapper>
                <Free3DaysContainer>
                  <Free3Days variant="inherit">Free 3 days trial</Free3Days>
                  <Free3Days variant="inherit">5 Price Requests</Free3Days>
                  <Free3Days variant="inherit">
                    3 Processed Rate sheets
                  </Free3Days>
                </Free3DaysContainer>
              </FrameDiv>
            </FrameGroup>
            <Wrapper>
              <Div>$0</Div>
            </Wrapper>
          </FrameParent>
          <ExperienceLimitedAccessToOWrapper>
            <ExperienceLimitedAccessContainer>
              <Free3Days variant="inherit">{`Experience limited access to our platform’s capabilities. `}</Free3Days>
              <ExploreKeyFeatures variant="inherit">
                Explore key features with no commitment required during the
                trial period.
              </ExploreKeyFeatures>
            </ExperienceLimitedAccessContainer>
          </ExperienceLimitedAccessToOWrapper>
          <LearnMoreAbout>Learn more about free trial period</LearnMoreAbout>
        </RectangleParent>
        <PricingBlock
          pricingBlockPosition="relative"
          pricingBlockTop="unset"
          pricingBlockLeft="unset"
          stars="/stars.svg"
          basicPlan="Basic Plan"
          group241312="/group-241312@2x.png"
          group241313="/group-241313@2x.png"
          pricingBlockBackgroundBoxShadow="0px 10px 35px rgba(71, 92, 112, 0.35)"
          groupDivBorder="none"
          groupDivPadding="0"
          groupDivBackgroundColor="transparent"
          annualBillingBorder="unset"
          annualBillingPadding="unset"
          annualBillingBackgroundColor="unset"
        />
      </PricingBlocks>
    </PricingBlocksWrapperRoot>
  );
};

export default FrameComponent4;
