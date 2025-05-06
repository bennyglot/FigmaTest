import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

export type Component11Type = {
  className?: string;
  stripeLogoRevised2016svg1?: string;

  /** Variant props */
  property1?: "Component 7" | "Component 10";
};

const PaymentLogoBackground = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const StripeLogoRevised2016svgIcon = styled.img`
  position: absolute;
  width: 80%;
  top: 0.25rem;
  right: 10%;
  left: 10%;
  max-width: 100%;
  overflow: hidden;
  height: 1.456rem;
  object-fit: cover;
  z-index: 1;
`;
const Root = styled(Box)`
  align-self: stretch;
  height: 1.875rem;
  position: relative;
  z-index: 2;
  &[data-property1="Component 10"] {
    z-index: 1;
  }
  &[data-property1="Component 10"] .paymentLogoBackground {
    right: -1.43%;
    left: 1.43%;
  }
  &[data-property1="Component 10"] .stripeLogoRevised2016svgIcon {
    width: 85.71%;
    top: 23.33%;
    right: 7.14%;
    left: 7.14%;
    height: 53.67%;
    object-fit: unset;
    bottom: 23%;
    max-height: 100%;
  }
`;

const Component11: FunctionComponent<Component11Type> = ({
  className = "",
  property1 = "Component 7",
  stripeLogoRevised2016svg1,
}) => {
  return (
    <Root data-property1={property1} className={className}>
      <PaymentLogoBackground className="paymentLogoBackground" />
      <StripeLogoRevised2016svgIcon
        className="stripeLogoRevised2016svgIcon"
        loading="lazy"
        alt=""
        src={stripeLogoRevised2016svg1}
      />
    </Root>
  );
};

export default Component11;
