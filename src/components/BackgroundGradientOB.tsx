import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

export type BackgroundGradientOBType = {
  className?: string;
};

const GradientRect = styled(Box)`
  height: 37.5rem;
  width: 120rem;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(197, 206, 218, 0.7),
    rgba(255, 255, 255, 0)
  );
`;
const BackgroundGradientObRoot = styled(Box)`
  width: 100%;
  height: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;

const BackgroundGradientOB: FunctionComponent<BackgroundGradientOBType> = ({
  className = "",
}) => {
  return (
    <BackgroundGradientObRoot className={className}>
      <GradientRect />
    </BackgroundGradientObRoot>
  );
};

export default BackgroundGradientOB;
