import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

export type FooterOBType = {
  className?: string;
};

const FooterBg = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  background-color: var(--color-whitesmoke);
  z-index: 0;
`;
const LogoTrnsprnt = styled(Box)`
  width: 9.625rem;
  height: 3.375rem;
  position: absolute;
  margin: 0 !important;
  top: 2rem;
  left: 15.688rem;
  z-index: 1;
`;
const StargoLogoIcon = styled.img`
  width: 9.625rem;
  height: 3.188rem;
  position: relative;
  z-index: 2;
`;
const LogoSeparator = styled(Box)`
  width: 87.563rem;
  height: 0.063rem;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
  z-index: 1;
`;
const StargoLogoParent = styled(Box)`
  width: 87.5rem;
  height: 4.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-12xs);
  box-sizing: border-box;
  gap: var(--gap-7xl);
  z-index: 2;
`;
const Solutions = styled(Box)`
  width: 5.063rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const Stardox = styled(Typography)`
  margin: 0;
`;
const StardoxStarpayMarineContainer = styled(Box)`
  width: 11.313rem;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 1.938rem;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 1;
`;
const SolutionsParent = styled(Box)`
  height: 14.563rem;
  width: 11.313rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const UseCases = styled(Box)`
  width: 5.75rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const FreightForwardersShippersContainer = styled(Box)`
  width: 11.438rem;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 1.938rem;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 1;
`;
const UseCasesParent = styled(Box)`
  height: 14.563rem;
  width: 11.438rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  z-index: 3;
`;
const Resources = styled(Box)`
  width: 5.625rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const ResourcesParent = styled(Box)`
  height: 14.563rem;
  width: 11.313rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  z-index: 4;
`;
const About = styled(Box)`
  width: 3.5rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const CompanyOverviewMeetContainer = styled(Box)`
  width: 11.375rem;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 1.938rem;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 1;
`;
const AboutParent = styled(Box)`
  height: 14.563rem;
  width: 11.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const Legal = styled(Box)`
  width: 9.438rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;
const FrameParent = styled(Box)`
  height: 14.563rem;
  width: 22.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
`;
const LinksContainer = styled(Box)`
  height: 14.563rem;
  width: 56.75rem;
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
  width: 2.05rem;
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
const SocialContainer = styled(Box)`
  width: 13.688rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-8);
  color: var(--color-dimgray);
`;
const ExistingStardoxUsers = styled(Box)`
  width: 15.25rem;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const PortalLink = styled(Button)`
  width: 8.75rem;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
  flex-shrink: 0;
`;
const Login = styled(Box)`
  width: 15.25rem;
  height: 4.494rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs-2);
`;
const CheckHowMuch = styled(Box)`
  width: 20.125rem;
  position: relative;
  display: inline-block;
`;
const CalculatorLink = styled(Button)`
  width: 8.75rem;
  height: 2.5rem;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
`;
const Calculator = styled(Box)`
  width: 20.125rem;
  height: 4.438rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const SocialLinks = styled(Box)`
  height: 15.425rem;
  width: 20.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi-6);
  z-index: 1;
  font-size: var(--font-size-mini-8);
`;
const FooterLinks = styled(Box)`
  width: 87.438rem;
  height: 16.188rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-150xl);
  z-index: 5;
`;
const CopyrightSeparator = styled(Box)`
  width: 87.563rem;
  height: 0.063rem;
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
  width: 87.5rem;
  position: relative;
  line-height: 184.7%;
  display: inline-block;
`;
const Copyright = styled(Box)`
  width: 87.5rem;
  height: 4.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  z-index: 4;
  font-size: var(--font-size-smi);
  color: var(--Light-Text-SW);
`;
const FooterObRoot = styled.footer`
  width: 120rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xl) var(--padding-232xl) var(--padding-31xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-15xl);
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-gray);
  font-family: var(--font-poppins);
`;

const FooterOB: FunctionComponent<FooterOBType> = ({ className = "" }) => {
  return (
    <FooterObRoot className={className}>
      <FooterBg />
      <LogoTrnsprnt />
      <StargoLogoParent>
        <StargoLogoIcon alt="" src="/stargo-logo-1.svg" />
        <LogoSeparator />
      </StargoLogoParent>
      <FooterLinks>
        <LinksContainer>
          <SolutionsParent>
            <Solutions>Solutions</Solutions>
            <StardoxStarpayMarineContainer>
              <Stardox variant="inherit">Stardox</Stardox>
              <Stardox variant="inherit">Starpay</Stardox>
              <Stardox variant="inherit">Marine Insurance</Stardox>
              <Stardox variant="inherit">Starboard</Stardox>
            </StardoxStarpayMarineContainer>
          </SolutionsParent>
          <UseCasesParent>
            <UseCases>Use Cases</UseCases>
            <FreightForwardersShippersContainer>
              <Stardox variant="inherit">Freight Forwarders</Stardox>
              <Stardox variant="inherit">Shippers</Stardox>
              <Stardox variant="inherit">Freight Brokers</Stardox>
              <Stardox variant="inherit">Domestic Road</Stardox>
              <Stardox variant="inherit">Carriers</Stardox>
              <Stardox variant="inherit">Customs Brokers</Stardox>
            </FreightForwardersShippersContainer>
          </UseCasesParent>
          <ResourcesParent>
            <Resources>Resources</Resources>
            <StardoxStarpayMarineContainer>
              <Stardox variant="inherit">Blog</Stardox>
              <Stardox variant="inherit">Case Studies</Stardox>
              <Stardox variant="inherit">Press</Stardox>
              <Stardox variant="inherit">Investors</Stardox>
              <Stardox variant="inherit">Integrations</Stardox>
              <Stardox variant="inherit">Contact Us</Stardox>
            </StardoxStarpayMarineContainer>
          </ResourcesParent>
          <FrameParent>
            <AboutParent>
              <About>About</About>
              <CompanyOverviewMeetContainer>
                <Stardox variant="inherit">Company Overview</Stardox>
                <Stardox variant="inherit">Meet the Team</Stardox>
                <Stardox variant="inherit">Board</Stardox>
                <Stardox variant="inherit">Careers</Stardox>
                <Stardox variant="inherit">Partners</Stardox>
              </CompanyOverviewMeetContainer>
            </AboutParent>
            <SolutionsParent>
              <Legal>{`Legal `}</Legal>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">{`Terms & Conditions`}</Stardox>
                <Stardox variant="inherit">Privacy Policy</Stardox>
              </StardoxStarpayMarineContainer>
            </SolutionsParent>
          </FrameParent>
        </LinksContainer>
        <SocialLinks>
          <SocialContainer>
            <FollowUsAnd>Follow us and stay up to date</FollowUsAnd>
            <SocialIcons>
              <Icons loading="lazy" alt="" src="/frame-14.svg" />
              <Icons loading="lazy" alt="" src="/frame-15.svg" />
              <Icons loading="lazy" alt="" src="/frame-16.svg" />
            </SocialIcons>
          </SocialContainer>
          <Login>
            <ExistingStardoxUsers>
              Existing StarDox users login page
            </ExistingStardoxUsers>
            <PortalLink
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "13.1",
                background: "#9eadb9",
                borderRadius: "20px",
                "&:hover": { background: "#9eadb9" },
                width: 140,
                height: 39.7,
              }}
            >
              Portal Sign In
            </PortalLink>
          </Login>
          <Calculator>
            <CheckHowMuch>Check how much you can save with Stargo</CheckHowMuch>
            <CalculatorLink
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "13.1",
                background: "#9eadb9",
                borderRadius: "20px",
                "&:hover": { background: "#9eadb9" },
                width: 140,
                height: 40,
              }}
            >
              ROI Calculator
            </CalculatorLink>
          </Calculator>
        </SocialLinks>
      </FooterLinks>
      <Copyright>
        <CopyrightSeparator />
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
    </FooterObRoot>
  );
};

export default FooterOB;
