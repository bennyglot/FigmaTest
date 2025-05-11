import { FunctionComponent } from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

export type HeaderOBType = {
  className?: string;
  stargoLogo?: string;
};

const HeaderBar = styled(Box)`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  box-shadow: 0px 5px 35px rgba(93, 96, 109, 0.1);
  background-color: var(--White);
  z-index: 0;
`;
const StargoLogoIcon = styled.img`
  height: 60px;
  width: 180px;
  position: relative;
  z-index: 1;
`;
const Home = styled(Box)`
  height: 24px;
  width: 59px;
  position: relative;
  font-weight: 600;
  color: var(--Blue-SW);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Solutions = styled(Box)`
  height: 24px;
  width: 90px;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Resources = styled(Box)`
  height: 24px;
  width: 102px;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Support = styled(Box)`
  height: 24px;
  width: 80px;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Company = styled(Box)`
  height: 24px;
  width: 99px;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuOptions = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-31xl);
`;
const MenuOptionsWrapper = styled(Box)`
  width: 630px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HeaderContent = styled(Box)`
  height: 42px;
  width: 648px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-lg) 0px 0px;
  box-sizing: border-box;
  z-index: 2;
`;
const HeaderObChild = styled(Button)`
  height: 56px;
  width: 161px;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  z-index: 3;
`;
const HeaderObRoot = styled.header`
  width: 1920px;
  height: 114px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xl) var(--padding-21xl) var(--padding-7xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-406xl-5);
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
`;

const HeaderOB: FunctionComponent<HeaderOBType> = ({
  className = "",
  stargoLogo,
}) => {
  return (
    <HeaderObRoot className={className}>
      <HeaderBar />
      <StargoLogoIcon loading="lazy" alt="" src={stargoLogo} />
      <HeaderContent>
        <MenuOptionsWrapper>
          <MenuOptions>
            <Home>Home</Home>
            <Solutions>Solutions</Solutions>
            <Resources>Resources</Resources>
            <Support>Support</Support>
            <Company>Company</Company>
          </MenuOptions>
        </MenuOptionsWrapper>
      </HeaderContent>
      <HeaderObChild
        disableElevation
        variant="text"
        sx={{
          textTransform: "none",
          color: "#002846",
          fontSize: "16",
          borderRadius: "0px 0px 0px 0px",
          width: 161,
          height: 56,
        }}
      >
        StarDox Login
      </HeaderObChild>
    </HeaderObRoot>
  );
};

export default HeaderOB;
