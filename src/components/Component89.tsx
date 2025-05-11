import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export type Component89Type = {
  className?: string;
};

const SummaryBackground = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-mini);
  background-color: var(--White);
  z-index: 0;
`;
const OrderSummary = styled(Typography)`
  margin: 0;
  width: 377px;
  position: relative;
  color: var(--Light-Text-SW);
  display: inline-block;
`;
const FreeStardoxTrial = styled(Typography)`
  margin: 0;
  width: 511px;
  height: 56px;
  position: relative;
  display: flex;
  align-items: center;
`;
const FrameChild = styled.img`
  width: 28px;
  height: 89px;
  position: relative;
`;
const FrameWrapper = styled(Box)`
  height: 90px;
  width: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  z-index: 2;
`;
const Free3Days = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 0.87px;
`;
const Free3DaysContainer = styled(Box)`
  width: 285px;
  position: relative;
  line-height: var(--font-size-13xl);
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const FrameGroup = styled(Box)`
  height: 98px;
  width: 328px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const TrialDetails = styled(Box)`
  width: 335px;
  height: 98px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-6xs);
  box-sizing: border-box;
  font-size: var(--font-size-xl);
`;
const OrderSummaryParent = styled(Box)`
  height: 212px;
  width: 511px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  z-index: 2;
`;
const Empty = styled(Box)`
  width: 98px;
  height: 18px;
  position: relative;
  line-height: var(--font-size-lg);
  font-weight: 300;
  display: flex;
  align-items: center;
`;
const EmptyWrapper = styled(Box)`
  height: 27px;
  width: 98px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
  z-index: 1;
  margin-left: -42px;
  position: relative;
  text-align: right;
  font-size: var(--font-size-51xl);
`;
const FrameParent = styled(Box)`
  width: 567px;
  height: 212px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
`;
const ExploreKeyFeatures = styled(Typography)`
  margin: 0;
`;
const ExperienceLimitedAccessContainer = styled(Box)`
  width: 560px;
  position: relative;
  display: inline-block;
`;
const PlatformDescription = styled(Box)`
  width: 567px;
  height: 91px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-6xs);
  box-sizing: border-box;
  z-index: 1;
  font-size: var(--font-size-xl);
`;
const SummaryContent = styled(Box)`
  width: 567px;
  height: 321px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  z-index: 3;
`;
const LearnMoreAbout = styled(Box)`
  width: 390px;
  position: relative;
  text-decoration: underline;
  line-height: var(--font-size-16xl);
  display: inline-block;
  flex-shrink: 0;
`;
const TrialInformationLink = styled(Box)`
  width: 396px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  z-index: 2;
  font-size: var(--font-size-mid);
`;
const ComponentRoot = styled(Box)`
  position: absolute;
  top: 367px;
  left: 1001px;
  width: 660px;
  height: 507px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl) var(--padding-25xl) var(--padding-24xl);
  box-sizing: border-box;
  gap: var(--gap-59xl);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
`;

const Component89: FunctionComponent<Component89Type> = ({
  className = "",
}) => {
  return (
    <ComponentRoot className={className}>
      <SummaryBackground />
      <SummaryContent>
        <FrameParent>
          <OrderSummaryParent>
            <OrderSummary
              variant="inherit"
              component="h2"
              sx={{ fontWeight: "400", letterSpacing: "-0.02em" }}
            >
              Order summary:
            </OrderSummary>
            <FreeStardoxTrial
              variant="inherit"
              component="h1"
              sx={{ fontWeight: "500", fontSize: "var(--font-size-18xl)" }}
            >
              Free StarDox Trial
            </FreeStardoxTrial>
            <TrialDetails>
              <FrameGroup>
                <FrameWrapper>
                  <FrameChild loading="lazy" alt="" src="/group-241438.svg" />
                </FrameWrapper>
                <Free3DaysContainer>
                  <Free3Days variant="inherit">Free 3 days trial</Free3Days>
                  <Free3Days variant="inherit">5 Price Requests</Free3Days>
                  <Free3Days variant="inherit">
                    3 Processed Rate sheets
                  </Free3Days>
                </Free3DaysContainer>
              </FrameGroup>
            </TrialDetails>
          </OrderSummaryParent>
          <EmptyWrapper>
            <Empty>$0</Empty>
          </EmptyWrapper>
        </FrameParent>
        <PlatformDescription>
          <ExperienceLimitedAccessContainer>
            <Free3Days variant="inherit">{`Experience limited access to our platform’s capabilities. `}</Free3Days>
            <ExploreKeyFeatures variant="inherit">
              Explore key features with no commitment required during the trial
              period.
            </ExploreKeyFeatures>
          </ExperienceLimitedAccessContainer>
        </PlatformDescription>
      </SummaryContent>
      <TrialInformationLink>
        <LearnMoreAbout>Learn more about free trial period</LearnMoreAbout>
      </TrialInformationLink>
    </ComponentRoot>
  );
};

export default Component89;
