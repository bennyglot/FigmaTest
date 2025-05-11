import { FunctionComponent, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export type PricingBlockType = {
  className?: string;
  stars?: string;
  basicPlan?: string;
  group241312?: string;
  group241313?: string;

  /** Style props */
  pricingBlockPosition?: CSSProperties["position"];
  pricingBlockTop?: CSSProperties["top"];
  pricingBlockLeft?: CSSProperties["left"];
  pricingBlockBackgroundBoxShadow?: CSSProperties["boxShadow"];
  groupDivBorder?: CSSProperties["border"];
  groupDivPadding?: CSSProperties["padding"];
  groupDivBackgroundColor?: CSSProperties["backgroundColor"];
  annualBillingBorder?: CSSProperties["border"];
  annualBillingPadding?: CSSProperties["padding"];
  annualBillingBackgroundColor?: CSSProperties["backgroundColor"];
};

const PricingBlockBackground = styled(Box)<{
  pricingBlockBackgroundBoxShadow?: CSSProperties["boxShadow"];
}>`
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
  box-shadow: ${(p) => p.pricingBlockBackgroundBoxShadow};
`;
const StarsIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BasicPlan = styled(Typography)`
  margin: 0;
  height: 18px;
  width: 511px;
  position: relative;
  display: flex;
  align-items: center;
`;
const StarsParent = styled(Box)`
  width: 561px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const PrimaryIcon = styled.img`
  width: 28px;
  height: 19px;
  position: relative;
`;
const PlanTransactionIcons = styled(Box)`
  width: 28px;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-5);
`;
const PlanTransactionLimit = styled(Box)`
  height: 91px;
  width: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  z-index: 2;
`;
const TransactionsAnnually = styled(Typography)`
  margin-block-start: 0;
  margin-block-end: 0.87px;
`;
const UseAcrossAny = styled(Typography)`
  margin: 0;
`;
const TransactionsAnnually165Container = styled(Box)`
  width: 517px;
  position: relative;
  line-height: var(--font-size-13xl);
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const PlanPricing = styled(Box)`
  width: 560px;
  height: 98px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-xl);
`;
const PlanDetails = styled(Box)`
  width: 561px;
  height: 161px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
`;
const FrameChild = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  z-index: 0;
`;
const Typography1 = styled(Typography)``;
const Span = styled(Typography)`
  white-space: pre-wrap;
`;
const PerMonthTxtContainer = styled.span`
  width: 100%;
`;
const PerMonth = styled(Box)`
  width: 280px;
  position: relative;
  line-height: 35.9px;
  display: flex;
  align-items: center;
`;
const MonthlyBilling = styled(Box)`
  height: 52px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-base-1);
  box-sizing: border-box;
  z-index: 1;
`;
const AnnualBillingChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 280px;
  height: 70px;
  object-fit: contain;
`;
const Annualy = styled(Box)`
  position: absolute;
  top: 18px;
  left: 0px;
  line-height: 35.9px;
  color: var(--White);
  text-align: center;
  display: flex;
  align-items: center;
`;
const AnnualBilling = styled.button<{
  annualBillingBorder?: CSSProperties["border"];
  annualBillingPadding?: CSSProperties["padding"];
  annualBillingBackgroundColor?: CSSProperties["backgroundColor"];
}>`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 70px;
  width: 280px;
  position: relative;
  z-index: 2;
  border: ${(p) => p.annualBillingBorder};
  padding: ${(p) => p.annualBillingPadding};
  background-color: ${(p) => p.annualBillingBackgroundColor};
`;
const FrameParent = styled(Box)<{
  groupDivBorder?: CSSProperties["border"];
  groupDivPadding?: CSSProperties["padding"];
  groupDivBackgroundColor?: CSSProperties["backgroundColor"];
}>`
  width: 560px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  font-size: var(--font-size-8xl);
  color: var(--White);
  border: ${(p) => p.groupDivBorder};
  padding: ${(p) => p.groupDivPadding};
  background-color: ${(p) => p.groupDivBackgroundColor};
`;
const PricingBlockContent = styled(Box)`
  width: 561px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
  z-index: 3;
`;
const LearnMoreAbout = styled(Box)`
  width: 350px;
  position: relative;
  font-size: var(--font-size-mid);
  text-decoration: underline;
  line-height: var(--font-size-16xl);
  display: inline-block;
  z-index: 2;
`;
const PricingBlockRoot = styled(Box)<{
  pricingBlockPosition?: CSSProperties["position"];
  pricingBlockTop?: CSSProperties["top"];
  pricingBlockLeft?: CSSProperties["left"];
}>`
  height: 386px;
  width: 660px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) var(--padding-30xl) var(--padding-16xl)
    var(--padding-31xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-3xl);
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
  position: ${(p) => p.pricingBlockPosition};
  top: ${(p) => p.pricingBlockTop};
  left: ${(p) => p.pricingBlockLeft};
`;

const PricingBlock: FunctionComponent<PricingBlockType> = ({
  className = "",
  pricingBlockPosition,
  pricingBlockTop,
  pricingBlockLeft,
  stars,
  basicPlan,
  group241312,
  group241313,
  pricingBlockBackgroundBoxShadow,
  groupDivBorder,
  groupDivPadding,
  groupDivBackgroundColor,
  annualBillingBorder,
  annualBillingPadding,
  annualBillingBackgroundColor,
}) => {
  return (
    <PricingBlockRoot
      pricingBlockPosition={pricingBlockPosition}
      pricingBlockTop={pricingBlockTop}
      pricingBlockLeft={pricingBlockLeft}
      className={className}
    >
      <PricingBlockBackground
        pricingBlockBackgroundBoxShadow={pricingBlockBackgroundBoxShadow}
      />
      <PricingBlockContent>
        <PlanDetails>
          <StarsParent>
            <StarsIcon loading="lazy" alt="" src={stars} />
            <BasicPlan
              variant="inherit"
              component="h1"
              sx={{ fontWeight: "500", lineHeight: "var(--font-size-lg)" }}
            >
              {basicPlan}
            </BasicPlan>
          </StarsParent>
          <PlanPricing>
            <PlanTransactionLimit>
              <PlanTransactionIcons>
                <PrimaryIcon alt="" src="/primary-1.svg" />
                <PrimaryIcon alt="" src="/primary-2.svg" />
                <PrimaryIcon alt="" src="/primary-2.svg" />
              </PlanTransactionIcons>
            </PlanTransactionLimit>
            <TransactionsAnnually165Container>
              <TransactionsAnnually variant="inherit">
                29,000 transactions* annually
              </TransactionsAnnually>
              <TransactionsAnnually variant="inherit">
                $1.65 per transaction
              </TransactionsAnnually>
              <UseAcrossAny variant="inherit">
                Use across any department or workflow
              </UseAcrossAny>
            </TransactionsAnnually165Container>
          </PlanPricing>
        </PlanDetails>
        <FrameParent
          groupDivBorder={groupDivBorder}
          groupDivPadding={groupDivPadding}
          groupDivBackgroundColor={groupDivBackgroundColor}
        >
          <FrameChild alt="" src={group241312} />
          <MonthlyBilling>
            <PerMonth>
              <PerMonthTxtContainer>
                <Typography1 variant="inherit" component="b">
                  <Typography1 variant="inherit" component="span">
                    $4,000
                  </Typography1>
                  <Span
                    variant="inherit"
                    component="span"
                    sx={{ fontSize: "var(--font-size-xl)" }}
                  >{`   `}</Span>
                </Typography1>
                <Typography1
                  variant="inherit"
                  component="span"
                  sx={{ fontSize: "var(--font-size-base)" }}
                >
                  Per month
                </Typography1>
              </PerMonthTxtContainer>
            </PerMonth>
          </MonthlyBilling>
          <AnnualBilling
            annualBillingBorder={annualBillingBorder}
            annualBillingPadding={annualBillingPadding}
            annualBillingBackgroundColor={annualBillingBackgroundColor}
          >
            <AnnualBillingChild alt="" src={group241313} />
            <Annualy>
              <PerMonthTxtContainer>
                <Typography1
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "var(--font-poppins)" }}
                >
                  <Typography1
                    variant="inherit"
                    component="span"
                    sx={{ fontSize: "var(--font-size-8xl)" }}
                  >{`$48,000 `}</Typography1>
                  <Span
                    variant="inherit"
                    component="span"
                    sx={{ fontSize: "var(--font-size-xl)" }}
                  >{`  `}</Span>
                </Typography1>
                <Typography1
                  variant="inherit"
                  component="span"
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "var(--font-size-base)",
                  }}
                >
                  Annualy
                </Typography1>
              </PerMonthTxtContainer>
            </Annualy>
          </AnnualBilling>
        </FrameParent>
      </PricingBlockContent>
      <LearnMoreAbout>Contact Us to Learn more about this plan</LearnMoreAbout>
    </PricingBlockRoot>
  );
};

export default PricingBlock;
