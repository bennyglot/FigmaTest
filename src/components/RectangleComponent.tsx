import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

export type RectangleComponentType = {
  className?: string;
};

const Image1 = styled(Box)`
  height: 600px;
  width: 1920px;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(197, 206, 218, 0.7),
    rgba(255, 255, 255, 0)
  );
`;
const ImageWrapperRoot = styled(Box)`
  width: 100%;
  height: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;

const RectangleComponent: FunctionComponent<RectangleComponentType> = ({
  className = "",
}) => {
  return (
    <ImageWrapperRoot className={className}>
      <Image1 />
    </ImageWrapperRoot>
  );
};

export default RectangleComponent;
