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
};

const PricingBlockBackground = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-mini);
  background-color: var(--White);
  z-index: 0;
`;
const StarsIcon = styled.img`
  height: 2rem;
  width: 2rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BasicPlan = styled(Typography)`
  margin: 0;
  height: 1.125rem;
  width: 31.938rem;
  position: relative;
  display: flex;
  align-items: center;
`;
const StarsParent = styled(Box)`
  width: 35.063rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const PrimaryIcon = styled.img`
  width: 1.75rem;
  height: 1.188rem;
  position: relative;
`;
const PlanTransactionIcons = styled(Box)`
  width: 1.75rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-5);
`;
const PlanTransactionLimit = styled(Box)`
  height: 5.688rem;
  width: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0rem 0rem;
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
  width: 32.313rem;
  position: relative;
  line-height: var(--font-size-13xl);
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const PlanPricing = styled(Box)`
  width: 35rem;
  height: 6.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-xl);
`;
const PlanDetails = styled(Box)`
  width: 35.063rem;
  height: 10.063rem;
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
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
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
  width: 17.5rem;
  position: relative;
  line-height: 2.244rem;
  display: flex;
  align-items: center;
`;
const MonthlyBilling = styled(Box)`
  height: 3.25rem;
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem var(--padding-base-1);
  box-sizing: border-box;
  z-index: 1;
`;
const AnnualBillingChild = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 17.5rem;
  height: 4.375rem;
  object-fit: contain;
`;
const Annualy = styled(Box)`
  position: absolute;
  top: 1.125rem;
  left: 0rem;
  line-height: 2.244rem;
  color: var(--White);
  text-align: center;
  display: flex;
  align-items: center;
`;
const AnnualBilling = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 4.375rem;
  width: 17.5rem;
  position: relative;
  z-index: 2;
`;
const FrameParent = styled(Box)`
  width: 35rem;
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  font-size: var(--font-size-8xl);
  color: var(--White);
`;
const PricingBlockContent = styled(Box)`
  width: 35.063rem;
  height: 16.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
  z-index: 3;
`;
const LearnMoreAbout = styled(Box)`
  width: 21.875rem;
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
  height: 24.125rem;
  width: 41.25rem;
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
  color: var(--color-gray);
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
}) => {
  return (
    <PricingBlockRoot
      pricingBlockPosition={pricingBlockPosition}
      pricingBlockTop={pricingBlockTop}
      pricingBlockLeft={pricingBlockLeft}
      className={className}
    >
      <PricingBlockBackground />
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
        <FrameParent>
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
          <AnnualBilling>
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
