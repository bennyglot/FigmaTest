import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import FrameComponent3 from "../components/FrameComponent3";

const StarsIcon = styled.img`
  width: 2rem;
  height: 2rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 0;
`;
const FrameChild = styled(Box)`
  height: 11.5rem;
  width: 41.25rem;
  position: relative;
  border: 2px dashed var(--Blue-SW);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const FinalTextWill = styled(Box)`
  height: 7.75rem;
  width: 28.875rem;
  position: relative;
  line-height: 1.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: var(--font-size-5xl);
  }
`;
const RectangleParent = styled(Box)`
  flex: 1;
  border: 2px dashed var(--Blue-SW);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-7xl) var(--padding-xl) var(--padding-9xl);
  min-height: 11.5rem;
  max-width: 100%;
`;
const FrameWrapper = styled(Box)`
  width: 73.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 16.25rem;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-111xl);
    padding-right: var(--padding-111xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-46xl);
    padding-right: var(--padding-46xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6.562rem;
  flex-shrink: 0;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--Blue-SW);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1050px) {
    gap: 3.25rem;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-7xl);
  }
`;
const YoullReceiveAn = styled(Typography)`
  margin: 0 !important;
  width: 41.25rem;
  position: absolute;
  top: 36.438rem;
  left: 16.25rem;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: var(--font-size-8xl);
  }
`;
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
const FooterLogoChild = styled(Box)`
  width: 87.563rem;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
  height: 0.063rem;
  z-index: 1;
`;
const FooterLogo = styled(Box)`
  width: 87.5rem;
  height: 5.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-6xs);
  box-sizing: border-box;
  gap: var(--gap-7xl);
  z-index: 4;
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
const FooterNavigationColumn = styled(Box)`
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
const FooterNavigationColumn1 = styled(Box)`
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
const FooterNavigationColumn2 = styled(Box)`
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
const AboutLegalItems = styled(Box)`
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
const AboutLegalColumn = styled(Box)`
  height: 14.563rem;
  width: 22.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
`;
const FooterNavigationItems = styled(Box)`
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
const SocialMediaIconsChild = styled.img`
  width: 2.05rem;
  border-radius: var(--br-lg);
  max-height: 100%;
`;
const SocialMediaIcons = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-1);
`;
const FollowUsAndStayUpToDateParent = styled(Box)`
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
const PortalSignInLink = styled(Button)`
  width: 8.75rem;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
  flex-shrink: 0;
`;
const PortalSignIn = styled(Box)`
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
const RoiCalculatorLink = styled(Button)`
  width: 8.75rem;
  height: 2.5rem;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
`;
const RoiCalculator = styled(Box)`
  width: 20.125rem;
  height: 4.438rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const FollowUs = styled(Box)`
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
const FooterNavigation = styled(Box)`
  width: 87.438rem;
  height: 16.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-150xl);
  z-index: 6;
`;
const FooterObChild = styled(Box)`
  width: 87.563rem;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
  height: 0.063rem;
  z-index: 3;
`;
const AllRightsReserved = styled(Typography)`
  margin: 0;
  white-space: pre-wrap;
`;
const AllRightsReservedContainer = styled(Box)`
  width: 87.5rem;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 184.7%;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 5;
`;
const FooterOb1 = styled.footer`
  width: 120rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xl) var(--padding-232xl) var(--padding-31xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-7xl);
  flex-shrink: 0;
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-gray);
  font-family: var(--font-poppins);
`;
const FinishRoot = styled(Box)`
  width: 100%;
  height: 113.125rem;
  position: relative;
  background-color: var(--White);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 57.562rem;
  box-sizing: border-box;
  gap: 32.312rem;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gray);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    height: auto;
  }
  @media screen and (max-width: 1050px) {
    gap: 16.125rem;
  }
  @media screen and (max-width: 750px) {
    gap: 8.063rem;
  }
`;

const Finish1: FunctionComponent = () => {
  return (
    <FinishRoot>
      <StarsIcon alt="" />
      <FrameParent>
        <FrameComponent3 />
        <FrameWrapper>
          <RectangleParent>
            <FrameChild />
            <FinalTextWill>Final text will be added here</FinalTextWill>
          </RectangleParent>
        </FrameWrapper>
      </FrameParent>
      <YoullReceiveAn
        variant="inherit"
        component="h3"
        sx={{
          fontWeight: "500",
          lineHeight: "154.5%",
          letterSpacing: "-0.02em",
        }}
      >
        You’ll receive an email containing everything you need to begin
        streamlining your workflow with the power of StarDox.
      </YoullReceiveAn>
      <FooterOb1>
        <FooterBg />
        <LogoTrnsprnt />
        <FooterLogo>
          <StargoLogoIcon alt="" src="/stargo-logo-1.svg" />
          <FooterLogoChild />
        </FooterLogo>
        <FooterNavigation>
          <FooterNavigationItems>
            <FooterNavigationColumn>
              <Solutions>Solutions</Solutions>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">Stardox</Stardox>
                <Stardox variant="inherit">Starpay</Stardox>
                <Stardox variant="inherit">Marine Insurance</Stardox>
                <Stardox variant="inherit">Starboard</Stardox>
              </StardoxStarpayMarineContainer>
            </FooterNavigationColumn>
            <FooterNavigationColumn1>
              <UseCases>Use Cases</UseCases>
              <FreightForwardersShippersContainer>
                <Stardox variant="inherit">Freight Forwarders</Stardox>
                <Stardox variant="inherit">Shippers</Stardox>
                <Stardox variant="inherit">Freight Brokers</Stardox>
                <Stardox variant="inherit">Domestic Road</Stardox>
                <Stardox variant="inherit">Carriers</Stardox>
                <Stardox variant="inherit">Customs Brokers</Stardox>
              </FreightForwardersShippersContainer>
            </FooterNavigationColumn1>
            <FooterNavigationColumn2>
              <Resources>Resources</Resources>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">Blog</Stardox>
                <Stardox variant="inherit">Case Studies</Stardox>
                <Stardox variant="inherit">Press</Stardox>
                <Stardox variant="inherit">Investors</Stardox>
                <Stardox variant="inherit">Integrations</Stardox>
                <Stardox variant="inherit">Contact Us</Stardox>
              </StardoxStarpayMarineContainer>
            </FooterNavigationColumn2>
            <AboutLegalColumn>
              <AboutLegalItems>
                <About>About</About>
                <CompanyOverviewMeetContainer>
                  <Stardox variant="inherit">Company Overview</Stardox>
                  <Stardox variant="inherit">Meet the Team</Stardox>
                  <Stardox variant="inherit">Board</Stardox>
                  <Stardox variant="inherit">Careers</Stardox>
                  <Stardox variant="inherit">Partners</Stardox>
                </CompanyOverviewMeetContainer>
              </AboutLegalItems>
              <FooterNavigationColumn>
                <Legal>{`Legal `}</Legal>
                <StardoxStarpayMarineContainer>
                  <Stardox variant="inherit">{`Terms & Conditions`}</Stardox>
                  <Stardox variant="inherit">Privacy Policy</Stardox>
                </StardoxStarpayMarineContainer>
              </FooterNavigationColumn>
            </AboutLegalColumn>
          </FooterNavigationItems>
          <FollowUs>
            <FollowUsAndStayUpToDateParent>
              <FollowUsAnd>Follow us and stay up to date</FollowUsAnd>
              <SocialMediaIcons>
                <SocialMediaIconsChild
                  loading="lazy"
                  alt=""
                  src="/frame-141.svg"
                />
                <SocialMediaIconsChild
                  loading="lazy"
                  alt=""
                  src="/frame-151.svg"
                />
                <SocialMediaIconsChild
                  loading="lazy"
                  alt=""
                  src="/frame-161.svg"
                />
              </SocialMediaIcons>
            </FollowUsAndStayUpToDateParent>
            <PortalSignIn>
              <ExistingStardoxUsers>
                Existing StarDox users login page
              </ExistingStardoxUsers>
              <PortalSignInLink
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
              </PortalSignInLink>
            </PortalSignIn>
            <RoiCalculator>
              <CheckHowMuch>
                Check how much you can save with Stargo
              </CheckHowMuch>
              <RoiCalculatorLink
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
              </RoiCalculatorLink>
            </RoiCalculator>
          </FollowUs>
        </FooterNavigation>
        <FooterObChild />
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
      </FooterOb1>
    </FinishRoot>
  );
};

export default Finish1;
