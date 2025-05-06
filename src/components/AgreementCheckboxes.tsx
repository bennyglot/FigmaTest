import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Component11 from "./Component11";

export type AgreementCheckboxesType = {
  className?: string;
};

const AgreementCheckboxesChild = styled(Box)`
  height: 5rem;
  width: 41.25rem;
  position: relative;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.35);
  border-radius: var(--br-3xs);
  background-color: var(--White);
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const CreditCard = styled(Typography)`
  margin: 0;
  height: 2rem;
  width: 22.375rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 0.875rem;
  }
`;
const Component12Wrapper = styled(Box)`
  width: 4.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
`;
const AgreementCheckboxesItem = styled.img`
  height: 6.938rem;
  width: 6.938rem;
  position: absolute;
  margin: 0 !important;
  right: 12.813rem;
  bottom: -3.5rem;
  z-index: 3;
`;
const AgreementCheckboxesRoot = styled(Box)`
  position: absolute;
  top: 33.938rem;
  left: 16.25rem;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.35);
  border-radius: var(--br-3xs);
  background-color: var(--White);
  width: 41.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-5xl) var(--padding-4xl) var(--padding-5xl)
    var(--padding-8xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

const AgreementCheckboxes: FunctionComponent<AgreementCheckboxesType> = ({
  className = "",
}) => {
  return (
    <AgreementCheckboxesRoot className={className}>
      <AgreementCheckboxesChild />
      <CreditCard
        variant="inherit"
        component="h3"
        sx={{ fontWeight: "400", lineHeight: "var(--font-size-lg)" }}
      >
        Credit Card
      </CreditCard>
      <Component12Wrapper>
        <Component11
          property1="Component 7"
          stripeLogoRevised2016svg1="/stripe-logo-revised-2016svg-1@2x.png"
        />
      </Component12Wrapper>
      <AgreementCheckboxesItem loading="lazy" alt="" src="/group-240531.svg" />
    </AgreementCheckboxesRoot>
  );
};

export default AgreementCheckboxes;
