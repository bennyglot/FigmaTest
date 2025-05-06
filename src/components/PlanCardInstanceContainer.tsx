import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import PricingBlock from "./PricingBlock";

export type PlanCardInstanceContainerType = {
  className?: string;
};

const ButtonBackgrounds = styled(Box)`
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
  width: 2rem;
  position: relative;
  height: 2rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 1;
`;
const BasicPlan = styled(Typography)`
  margin: 0;
  height: 1.125rem;
  width: 31.938rem;
  position: relative;
  display: flex;
  align-items: center;
`;
const ButtonLabels = styled(Box)`
  width: 35.063rem;
  height: 1.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-31xl);
  box-sizing: border-box;
  z-index: 2;
`;
const PrimaryIcon = styled.img`
  width: 1.75rem;
  height: 1.188rem;
  position: relative;
`;
const PrimaryParent = styled(Box)`
  width: 1.75rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-5);
`;
const DuplicateTransactionLimit = styled(Box)`
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
const DuplicatePlanPricing = styled(Box)`
  width: 35rem;
  height: 6.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
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
const MonthPrice = styled(Box)`
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
const AnnualPriceChild = styled.img`
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
const AnnualPrice = styled.button`
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
const LearnMoreButtonContent = styled(Box)`
  width: 35rem;
  height: 12.313rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
`;
const LearnMoreAbout = styled(Box)`
  width: 21.875rem;
  position: relative;
  font-size: var(--font-size-mid);
  text-decoration: underline;
  line-height: var(--font-size-16xl);
  display: inline-block;
`;
const PlanLearnMoreButton = styled(Box)`
  width: 35rem;
  height: 15.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  z-index: 3;
  font-size: var(--font-size-xl);
`;
const Component1 = styled(Box)`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 41.25rem;
  height: 24.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) var(--padding-30xl) var(--padding-16xl)
    var(--padding-31xl);
  box-sizing: border-box;
  gap: var(--gap-26xl);
`;
const PrimaryIcon1 = styled.img`
  position: absolute;
  top: 2.125rem;
  left: 2.938rem;
  width: 2.5rem;
  height: 2rem;
  z-index: 2;
`;
const PlanCardButtons = styled(Box)`
  align-self: stretch;
  height: 24.125rem;
  position: relative;
`;
const PlanCardButtonsChild = styled.img`
  position: absolute;
  top: 2.188rem;
  left: 2.813rem;
  width: 2.25rem;
  height: 2rem;
  z-index: 2;
`;
const PlanCardComponents = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  min-width: 26.813rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-6xl);
    min-width: 100%;
  }
`;
const Component2 = styled(Box)`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: var(--White);
  width: 41.25rem;
  height: 24.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-15xl) var(--padding-30xl) var(--padding-16xl)
    var(--padding-31xl);
  box-sizing: border-box;
  gap: var(--gap-26xl);
`;
const SecondPlanBlockChild = styled.img`
  position: absolute;
  top: 2.188rem;
  left: 3rem;
  width: 2rem;
  height: 2rem;
  z-index: 2;
`;
const SecondPlanBlock = styled(Box)`
  height: 24.125rem;
  flex: 1;
  position: relative;
  min-width: 26.813rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const PlanCardInstance = styled(Box)`
  width: 87.5rem;
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
const PlanCardInstanceContainerRoot = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--color-gray);
  font-family: var(--font-poppins);
`;

const PlanCardInstanceContainer: FunctionComponent<
  PlanCardInstanceContainerType
> = ({ className = "" }) => {
  return (
    <PlanCardInstanceContainerRoot className={className}>
      <PlanCardInstance>
        <PlanCardComponents>
          <PlanCardButtons>
            <Component1>
              <ButtonBackgrounds />
              <StarsIcon alt="" />
              <ButtonLabels>
                <BasicPlan
                  variant="inherit"
                  component="h1"
                  sx={{ fontWeight: "500", lineHeight: "var(--font-size-lg)" }}
                >
                  Silver Plan
                </BasicPlan>
              </ButtonLabels>
              <PlanLearnMoreButton>
                <LearnMoreButtonContent>
                  <DuplicatePlanPricing>
                    <DuplicateTransactionLimit>
                      <PrimaryParent>
                        <PrimaryIcon alt="" src="/primary-1.svg" />
                        <PrimaryIcon alt="" src="/primary-2.svg" />
                        <PrimaryIcon alt="" src="/primary-2.svg" />
                      </PrimaryParent>
                    </DuplicateTransactionLimit>
                    <TransactionsAnnually165Container>
                      <TransactionsAnnually variant="inherit">
                        54,000 transactions* annually
                      </TransactionsAnnually>
                      <TransactionsAnnually variant="inherit">
                        $1.22 per transaction (26% savings vs Basic)
                      </TransactionsAnnually>
                      <UseAcrossAny variant="inherit">
                        Use across any department or workflow
                      </UseAcrossAny>
                    </TransactionsAnnually165Container>
                  </DuplicatePlanPricing>
                  <FrameParent>
                    <FrameChild alt="" src="/group-241312@2x.png" />
                    <MonthPrice>
                      <PerMonth>
                        <PerMonthTxtContainer>
                          <Typography1 variant="inherit" component="b">
                            <Typography1
                              variant="inherit"
                              component="span"
                            >{`$5,500 `}</Typography1>
                            <Span
                              variant="inherit"
                              component="span"
                              sx={{ fontSize: "var(--font-size-xl)" }}
                            >{`  `}</Span>
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
                    </MonthPrice>
                    <AnnualPrice>
                      <AnnualPriceChild alt="" src="/group-241313@2x.png" />
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
                            >{`$66,000 `}</Typography1>
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
                    </AnnualPrice>
                  </FrameParent>
                </LearnMoreButtonContent>
                <LearnMoreAbout>
                  Contact Us to Learn more about this plan
                </LearnMoreAbout>
              </PlanLearnMoreButton>
            </Component1>
            <PrimaryIcon1 alt="" src="/primary-7.svg" />
          </PlanCardButtons>
          <PlanCardButtons>
            <PricingBlock
              pricingBlockPosition="absolute"
              pricingBlockTop="0rem"
              pricingBlockLeft="0rem"
              stars="pending_I10502:6198;10502:6781"
              basicPlan="Platinum Plan"
              group241312="/group-241312@2x.png"
              group241313="/group-241313@2x.png"
            />
            <PlanCardButtonsChild alt="" src="/group-241372.svg" />
          </PlanCardButtons>
        </PlanCardComponents>
        <SecondPlanBlock>
          <Component2>
            <ButtonBackgrounds />
            <StarsIcon alt="" />
            <ButtonLabels>
              <BasicPlan
                variant="inherit"
                component="h1"
                sx={{ fontWeight: "500", lineHeight: "var(--font-size-lg)" }}
              >
                Gold Plan
              </BasicPlan>
            </ButtonLabels>
            <PlanLearnMoreButton>
              <LearnMoreButtonContent>
                <DuplicatePlanPricing>
                  <DuplicateTransactionLimit>
                    <PrimaryParent>
                      <PrimaryIcon alt="" src="/primary-1.svg" />
                      <PrimaryIcon alt="" src="/primary-2.svg" />
                      <PrimaryIcon alt="" src="/primary-2.svg" />
                    </PrimaryParent>
                  </DuplicateTransactionLimit>
                  <TransactionsAnnually165Container>
                    <TransactionsAnnually variant="inherit">
                      81,300 transactions* annually
                    </TransactionsAnnually>
                    <TransactionsAnnually variant="inherit">
                      $1.18 per transaction  (40% savings vs Basic)
                    </TransactionsAnnually>
                    <UseAcrossAny variant="inherit">
                      Use across any department or workflow
                    </UseAcrossAny>
                  </TransactionsAnnually165Container>
                </DuplicatePlanPricing>
                <FrameParent>
                  <FrameChild alt="" src="/group-241312@2x.png" />
                  <MonthPrice>
                    <PerMonth>
                      <PerMonthTxtContainer>
                        <Typography1 variant="inherit" component="b">
                          <Typography1 variant="inherit" component="span">
                            $8,000
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
                  </MonthPrice>
                  <AnnualPrice>
                    <AnnualPriceChild alt="" src="/group-241313@2x.png" />
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
                          >{`$96,000 `}</Typography1>
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
                  </AnnualPrice>
                </FrameParent>
              </LearnMoreButtonContent>
              <LearnMoreAbout>
                Contact Us to Learn more about this plan
              </LearnMoreAbout>
            </PlanLearnMoreButton>
          </Component2>
          <SecondPlanBlockChild loading="lazy" alt="" src="/group-241373.svg" />
        </SecondPlanBlock>
      </PlanCardInstance>
    </PlanCardInstanceContainerRoot>
  );
};

export default PlanCardInstanceContainer;
