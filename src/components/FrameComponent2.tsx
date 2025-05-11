import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import PricingBlock from "./PricingBlock";

export type FrameComponent2Type = {
  className?: string;
};

const PlansContainerChild = styled(Box)`
  width: 662px;
  height: 388px;
  position: relative;
  box-shadow: 0px 0px 30px rgba(24, 123, 220, 0.75);
  border-radius: var(--br-mini);
  background-color: var(--White);
  border: 1px solid var(--Blue-SW);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const PlanCardChild = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 2;
`;
const PlanBodyChild = styled.img`
  height: 89px;
  width: 28px;
  position: relative;
  z-index: 2;
`;
const PlanBody = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-12xs);
`;
const PlanCard = styled(Box)`
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
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
    line-height: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 11px;
  }
`;
const PlanNameContainer = styled(Box)`
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
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: var(--font-size-7xl);
  }
`;
const PlanInfo = styled(Box)`
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
const PlanContainer = styled(Box)`
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
const PlanActionPlaceholder = styled(Box)`
  align-self: stretch;
  position: relative;
  line-height: var(--font-size-lg);
  font-weight: 300;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-37xl);
    line-height: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
    line-height: 11px;
  }
`;
const PlanAction = styled(Box)`
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
const PlanRow = styled(Box)`
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
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const PlanFeatures = styled(Box)`
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
  z-index: 2;
`;
const PlansContainer = styled(Box)`
  flex: 1;
  box-shadow: 0px 0px 30px rgba(24, 123, 220, 0.75);
  border-radius: var(--br-mini);
  background-color: var(--White);
  border: 1px solid var(--Blue-SW);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-26xl) var(--padding-14xl)
    var(--padding-30xl);
  gap: var(--gap-mini);
  min-width: 429px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-5xl);
    padding-right: var(--padding-3xl);
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-238xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const PricingContent = styled(Box)`
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
const PricingContentWrapperRoot = styled(Box)`
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

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <PricingContentWrapperRoot className={className}>
      <PricingContent>
        <PlansContainer>
          <PlansContainerChild />
          <PlanRow>
            <PlanContainer>
              <PlanCard>
                <PlanCardChild loading="lazy" alt="" src="/group-241330.svg" />
                <PlanBody>
                  <PlanBodyChild
                    loading="lazy"
                    alt=""
                    src="/group-241438.svg"
                  />
                </PlanBody>
              </PlanCard>
              <PlanInfo>
                <PlanNameContainer>
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
                </PlanNameContainer>
                <Free3DaysContainer>
                  <Free3Days variant="inherit">Free 3 days trial</Free3Days>
                  <Free3Days variant="inherit">5 Price Requests</Free3Days>
                  <Free3Days variant="inherit">
                    3 Processed Rate sheets
                  </Free3Days>
                </Free3DaysContainer>
              </PlanInfo>
            </PlanContainer>
            <PlanAction>
              <PlanActionPlaceholder>$0</PlanActionPlaceholder>
            </PlanAction>
          </PlanRow>
          <PlanFeatures>
            <ExperienceLimitedAccessContainer>
              <Free3Days variant="inherit">{`Experience limited access to our platform’s capabilities. `}</Free3Days>
              <ExploreKeyFeatures variant="inherit">
                Explore key features with no commitment required during the
                trial period.
              </ExploreKeyFeatures>
            </ExperienceLimitedAccessContainer>
          </PlanFeatures>
          <LearnMoreAbout>Learn more about free trial period</LearnMoreAbout>
        </PlansContainer>
        <PricingBlock
          stars="/stars.svg"
          basicPlan="Basic Plan"
          group241312="/group-241312@2x.png"
          group241313="/group-241313@2x.png"
        />
      </PricingContent>
    </PricingContentWrapperRoot>
  );
};

export default FrameComponent2;
