import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export type FooterType = {
  className?: string;
};

const FooterBg = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--Light-Background-SW);
  z-index: 0;
`;
const LogoTrnsprnt = styled(Box)`
  width: 154px;
  height: 54px;
  position: absolute;
  margin: 0 !important;
  top: 32px;
  left: 251px;
  z-index: 1;
`;
const StargoLogoIcon = styled.img`
  width: 154px;
  height: 51px;
  position: relative;
  z-index: 2;
`;
const FooterDivider = styled(Box)`
  width: 1401px;
  height: 1px;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
  z-index: 1;
`;
const StargoLogoParent = styled(Box)`
  width: 1400px;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  gap: var(--gap-7xl);
`;
const Solutions = styled(Box)`
  width: 81px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const Stardox = styled(Typography)`
  margin: 0;
`;
const StardoxStarpayMarineContainer = styled(Box)`
  width: 181px;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 31px;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 1;
`;
const LinkColumns = styled(Box)`
  height: 233px;
  width: 181px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const UseCases = styled(Box)`
  width: 92px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const FreightForwardersShippersContainer = styled(Box)`
  width: 183px;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 31px;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 1;
`;
const LinkColumns1 = styled(Box)`
  height: 233px;
  width: 183px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  z-index: 3;
`;
const Resources = styled(Box)`
  width: 90px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const LinkColumns2 = styled(Box)`
  height: 233px;
  width: 181px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  z-index: 4;
`;
const About = styled(Box)`
  width: 56px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const CompanyOverviewMeetContainer = styled(Box)`
  width: 182px;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 31px;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 1;
`;
const AboutAndLegalColumns = styled(Box)`
  height: 233px;
  width: 182px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const Legal = styled(Box)`
  width: 151px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const AboutAndLegal = styled(Box)`
  height: 233px;
  width: 363px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
`;
const LinkColumnsParent = styled(Box)`
  height: 233px;
  width: 908px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
`;
const FollowUsAnd = styled(Box)`
  position: relative;
`;
const Icons = styled.img`
  width: 32.8px;
  border-radius: var(--br-lg);
  max-height: 100%;
`;
const SocialIcons = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-1);
`;
const SocialMediaContent = styled(Box)`
  width: 219px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-8);
  color: var(--color-dimgray);
`;
const ExistingStardoxUsers = styled(Box)`
  width: 244px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const SignInButton = styled(Box)`
  width: 140px;
  border-radius: var(--br-xl);
  background-color: var(--Bluish-grey-SW);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
  flex-shrink: 0;
  font-size: var(--font-size-sm-1);
  color: var(--White);
`;
const ExistingUsers = styled(Box)`
  width: 244px;
  height: 71.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs-2);
`;
const CheckHowMuch = styled(Box)`
  width: 322px;
  position: relative;
  display: inline-block;
`;
const RoiCalculator = styled(Box)`
  width: 94.4px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const CalculatorButton = styled(Box)`
  width: 140px;
  height: 40px;
  border-radius: var(--br-xl);
  background-color: var(--Bluish-grey-SW);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
  font-size: var(--font-size-sm-1);
  color: var(--White);
`;
const Savings = styled(Box)`
  width: 322px;
  height: 71px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const SocialMedia = styled(Box)`
  height: 246.8px;
  width: 322px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi-6);
  z-index: 1;
  font-size: var(--font-size-mini-8);
`;
const FooterLinks = styled(Box)`
  width: 1399px;
  height: 137px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-150xl);
`;
const FooterContent = styled.footer`
  width: 1400px;
  height: 249px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
  z-index: 4;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
`;
const CopyrightDivider = styled(Box)`
  width: 1401px;
  height: 1px;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
`;
const AllRightsReserved = styled(Typography)`
  margin: 0;
  white-space: pre-wrap;
`;
const AllRightsReservedContainer = styled(Box)`
  width: 1400px;
  position: relative;
  line-height: 184.7%;
  display: inline-block;
`;
const Copyright = styled(Box)`
  width: 1400px;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  z-index: 3;
`;
const FooterRoot = styled.section`
  width: 1920px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xl) var(--padding-232xl) var(--padding-31xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-137xl);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--Light-Text-SW);
  font-family: var(--font-poppins);
`;

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <FooterBg />
      <LogoTrnsprnt />
      <FooterContent>
        <StargoLogoParent>
          <StargoLogoIcon alt="" src="/stargo-logo-1.svg" />
          <FooterDivider />
        </StargoLogoParent>
        <FooterLinks>
          <LinkColumnsParent>
            <LinkColumns>
              <Solutions>Solutions</Solutions>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">Stardox</Stardox>
                <Stardox variant="inherit">Starpay</Stardox>
                <Stardox variant="inherit">Marine Insurance</Stardox>
                <Stardox variant="inherit">Starboard</Stardox>
              </StardoxStarpayMarineContainer>
            </LinkColumns>
            <LinkColumns1>
              <UseCases>Use Cases</UseCases>
              <FreightForwardersShippersContainer>
                <Stardox variant="inherit">Freight Forwarders</Stardox>
                <Stardox variant="inherit">Shippers</Stardox>
                <Stardox variant="inherit">Freight Brokers</Stardox>
                <Stardox variant="inherit">Domestic Road</Stardox>
                <Stardox variant="inherit">Carriers</Stardox>
                <Stardox variant="inherit">Customs Brokers</Stardox>
              </FreightForwardersShippersContainer>
            </LinkColumns1>
            <LinkColumns2>
              <Resources>Resources</Resources>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">Blog</Stardox>
                <Stardox variant="inherit">Case Studies</Stardox>
                <Stardox variant="inherit">Press</Stardox>
                <Stardox variant="inherit">Investors</Stardox>
                <Stardox variant="inherit">Integrations</Stardox>
                <Stardox variant="inherit">Contact Us</Stardox>
              </StardoxStarpayMarineContainer>
            </LinkColumns2>
            <AboutAndLegal>
              <AboutAndLegalColumns>
                <About>About</About>
                <CompanyOverviewMeetContainer>
                  <Stardox variant="inherit">Company Overview</Stardox>
                  <Stardox variant="inherit">Meet the Team</Stardox>
                  <Stardox variant="inherit">Board</Stardox>
                  <Stardox variant="inherit">Careers</Stardox>
                  <Stardox variant="inherit">Partners</Stardox>
                </CompanyOverviewMeetContainer>
              </AboutAndLegalColumns>
              <LinkColumns>
                <Legal>{`Legal `}</Legal>
                <StardoxStarpayMarineContainer>
                  <Stardox variant="inherit">{`Terms & Conditions`}</Stardox>
                  <Stardox variant="inherit">Privacy Policy</Stardox>
                </StardoxStarpayMarineContainer>
              </LinkColumns>
            </AboutAndLegal>
          </LinkColumnsParent>
          <SocialMedia>
            <SocialMediaContent>
              <FollowUsAnd>Follow us and stay up to date</FollowUsAnd>
              <SocialIcons>
                <Icons loading="lazy" alt="" src="/frame-142.svg" />
                <Icons loading="lazy" alt="" src="/frame-152.svg" />
                <Icons loading="lazy" alt="" src="/frame-162.svg" />
              </SocialIcons>
            </SocialMediaContent>
            <ExistingUsers>
              <ExistingStardoxUsers>
                Existing StarDox users login page
              </ExistingStardoxUsers>
              <SignInButton>
                <FollowUsAnd>Portal Sign In</FollowUsAnd>
              </SignInButton>
            </ExistingUsers>
            <Savings>
              <CheckHowMuch>
                Check how much you can save with Stargo
              </CheckHowMuch>
              <CalculatorButton>
                <RoiCalculator>ROI Calculator</RoiCalculator>
              </CalculatorButton>
            </Savings>
          </SocialMedia>
        </FooterLinks>
      </FooterContent>
      <Copyright>
        <CopyrightDivider />
        <AllRightsReservedContainer>
          <AllRightsReserved variant="inherit">
            All Rights Reserved Stargo 2024 © Stargo is trading name of G-ILS
            Transportation Ltd whose registered office is Hasadna 8 Ra’anana,
            4365104, Israel
          </AllRightsReserved>
          <Stardox variant="inherit">
            Disclaimer: G_ILS is Transportation Ltd not affiliated‭, ‬associated
            with‭, ‬sponsored by or endorsed by any of the shipping lines,
            airlines, trucking companies, domestic carriers, courier providers
            mentioned in this site‭.‬
          </Stardox>
        </AllRightsReservedContainer>
      </Copyright>
    </FooterRoot>
  );
};

export default Footer;
