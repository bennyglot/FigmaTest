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
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  box-shadow: 0px 5px 35px rgba(93, 96, 109, 0.1);
  background-color: var(--White);
  z-index: 0;
`;
const StargoLogoIcon = styled.img`
  height: 3.75rem;
  width: 11.25rem;
  position: relative;
  z-index: 1;
`;
const Home = styled(Box)`
  height: 1.5rem;
  width: 3.688rem;
  position: relative;
  font-weight: 600;
  color: var(--Blue-SW);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Solutions = styled(Box)`
  height: 1.5rem;
  width: 5.625rem;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Resources = styled(Box)`
  height: 1.5rem;
  width: 6.375rem;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Support = styled(Box)`
  height: 1.5rem;
  width: 5rem;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Company = styled(Box)`
  height: 1.5rem;
  width: 6.188rem;
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
  width: 39.375rem;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HeaderContent = styled(Box)`
  height: 2.625rem;
  width: 40.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-lg) 0rem 0rem;
  box-sizing: border-box;
  z-index: 2;
`;
const HeaderObChild = styled(Button)`
  height: 3.5rem;
  width: 10.063rem;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  z-index: 3;
`;
const HeaderObRoot = styled.header`
  width: 120rem;
  height: 7.125rem;
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
  color: var(--color-gray);
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
