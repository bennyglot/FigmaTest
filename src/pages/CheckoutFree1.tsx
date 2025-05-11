import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
import Content from "../components/Content";
import AgreementCheckboxes from "../components/AgreementCheckboxes";
import Component11 from "../components/Component11";
import Component89 from "../components/Component89";

const PleaseReadAnd = styled(Typography)``;
const NonDisclosureAgreement = styled(Typography)`
  text-decoration: underline;
`;
const Span = styled(Typography)`
  color: var(--Light-Text-SW);
`;
const NonDisclosureAgreement1 = styled(Typography)`
  color: var(--Dark-Blue-SW);
`;
const PleaseReadAndContainer = styled(Box)`
  position: absolute;
  top: 775px;
  left: 293px;
`;
const CheckboxOb = styled.input`
  margin: 0;
  position: absolute;
  top: 775px;
  left: 259px;
  border-radius: var(--br-8xs);
  width: 24px;
  height: 24px;
`;
const TermsConditions = styled(Typography)`
  text-decoration: underline;
  color: var(--Dark-Blue-SW);
`;
const PleaseReadAndContainer1 = styled(Box)`
  position: absolute;
  top: 814px;
  left: 293px;
`;
const CheckboxOb1 = styled.input`
  margin: 0;
  position: absolute;
  top: 814px;
  left: 259px;
  border-radius: var(--br-8xs);
  width: 24px;
  height: 24px;
`;
const PleaseReadAndContainer2 = styled(Box)`
  position: absolute;
  top: 853px;
  left: 293px;
`;
const CheckboxOb2 = styled.input`
  margin: 0;
  position: absolute;
  top: 853px;
  left: 259px;
  border-radius: var(--br-8xs);
  width: 24px;
  height: 24px;
`;
const FrameChild = styled(Box)`
  height: 80px;
  width: 660px;
  position: relative;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-3xs);
  background-color: var(--White);
  display: none;
  max-width: 100%;
`;
const Paypal = styled(Typography)`
  margin: 0;
  height: 32px;
  width: 358px;
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 14px;
  }
`;
const Component13Wrapper = styled(Box)`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const RectangleParent = styled(Box)`
  position: absolute;
  top: 643px;
  left: 260px;
  box-shadow: 0px 10px 35px rgba(71, 92, 112, 0.15);
  border-radius: var(--br-3xs);
  background-color: var(--White);
  width: 660px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-5xl) var(--padding-4xl) var(--padding-5xl)
    var(--padding-8xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  font-size: var(--font-size-3xl);
  color: var(--Dark-Blue-SW);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const PleaseReadAndApproveStargoParent = styled.section`
  align-self: stretch;
  height: 877px;
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-mid);
  color: var(--Light-Text-SW);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1125px) {
    height: auto;
    min-height: 877;
  }
`;
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
const FrameItem = styled(Box)`
  width: 1401px;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
  height: 1px;
  z-index: 1;
`;
const StargoLogoParent = styled(Box)`
  width: 1400px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xs);
  box-sizing: border-box;
  gap: var(--gap-7xl);
  z-index: 4;
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
const LinkHeaders = styled(Box)`
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
const LinkHeaders1 = styled(Box)`
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
const LinkHeaders2 = styled(Box)`
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
const AboutLegalHeaders = styled(Box)`
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
const LinkHeadersParent = styled(Box)`
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
const FollowUsAndStayUpToDateParent = styled(Box)`
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
const FrameInner = styled(Button)`
  width: 140px;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
  flex-shrink: 0;
`;
const ExistingStardoxUsersLoginPParent = styled(Box)`
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
const CalculatorButton = styled(Button)`
  width: 140px;
  height: 40px;
  padding: var(--padding-3xs-8) var(--padding-base-4);
  box-sizing: border-box;
`;
const CheckHowMuchYouCanSaveWiParent = styled(Box)`
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
  height: 267px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-150xl);
  z-index: 6;
`;
const FooterSeparator = styled(Box)`
  width: 1401px;
  height: 1px;
  position: relative;
  background-color: var(--Line-SW);
  border-top: 1px solid var(--Line-SW);
  box-sizing: border-box;
  z-index: 3;
`;
const AllRightsReserved = styled(Typography)`
  margin: 0;
  white-space: pre-wrap;
`;
const AllRightsReservedContainer = styled(Box)`
  width: 1400px;
  position: relative;
  font-size: var(--font-size-smi);
  line-height: 184.7%;
  color: var(--Light-Text-SW);
  display: inline-block;
  z-index: 5;
`;
const FooterOb1 = styled.footer`
  width: 1920px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xl) var(--padding-232xl) var(--padding-31xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-7xl);
  flex-shrink: 0;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--Dark-Blue-SW);
  font-family: var(--font-poppins);
`;
const CheckoutFreeRoot = styled(Box)`
  width: 100%;
  height: 1810px;
  position: relative;
  background-color: var(--White);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 933px;
  box-sizing: border-box;
  gap: 529px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1125px) {
    height: auto;
  }
  @media screen and (max-width: 1050px) {
    gap: 264px;
  }
  @media screen and (max-width: 750px) {
    gap: 132px;
  }
`;

const CheckoutFree1: FunctionComponent = () => {
  return (
    <CheckoutFreeRoot>
      <PleaseReadAndApproveStargoParent>
        <PleaseReadAndContainer>
          <PleaseReadAnd
            variant="inherit"
            component="span"
          >{`Please read and approve Stargo’s `}</PleaseReadAnd>
          <NonDisclosureAgreement1
            variant="inherit"
            component="span"
            sx={{ fontWeight: "500" }}
          >
            <NonDisclosureAgreement variant="inherit" component="span">
              Non-disclosure Agreement
            </NonDisclosureAgreement>
            <Span variant="inherit" component="span">{` `}</Span>
          </NonDisclosureAgreement1>
        </PleaseReadAndContainer>
        <CheckboxOb type="checkbox" />
        <PleaseReadAndContainer1>
          <PleaseReadAnd
            variant="inherit"
            component="span"
          >{`Please read and approve Stargo’s `}</PleaseReadAnd>
          <TermsConditions
            variant="inherit"
            component="span"
            sx={{ fontWeight: "500" }}
          >{`Terms & Conditions`}</TermsConditions>
        </PleaseReadAndContainer1>
        <CheckboxOb1 type="checkbox" />
        <PleaseReadAndContainer2>
          <PleaseReadAnd
            variant="inherit"
            component="span"
          >{`Please read and approve Stargo’s `}</PleaseReadAnd>
          <TermsConditions
            variant="inherit"
            component="span"
            sx={{ fontWeight: "500" }}
          >
            Data Processing Agreement
          </TermsConditions>
        </PleaseReadAndContainer2>
        <CheckboxOb2 type="checkbox" />
        <Content />
        <AgreementCheckboxes />
        <RectangleParent>
          <FrameChild />
          <Paypal
            variant="inherit"
            component="h3"
            sx={{ fontWeight: "400", lineHeight: "var(--font-size-lg)" }}
          >
            PayPal
          </Paypal>
          <Component13Wrapper>
            <Component11
              property1="Component 10"
              stripeLogoRevised2016svg1="/group-241357.svg"
            />
          </Component13Wrapper>
        </RectangleParent>
        <Component89 />
      </PleaseReadAndApproveStargoParent>
      <FooterOb1>
        <FooterBg />
        <LogoTrnsprnt />
        <StargoLogoParent>
          <StargoLogoIcon alt="" src="/stargo-logo-1.svg" />
          <FrameItem />
        </StargoLogoParent>
        <FooterLinks>
          <LinkHeadersParent>
            <LinkHeaders>
              <Solutions>Solutions</Solutions>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">Stardox</Stardox>
                <Stardox variant="inherit">Starpay</Stardox>
                <Stardox variant="inherit">Marine Insurance</Stardox>
                <Stardox variant="inherit">Starboard</Stardox>
              </StardoxStarpayMarineContainer>
            </LinkHeaders>
            <LinkHeaders1>
              <UseCases>Use Cases</UseCases>
              <FreightForwardersShippersContainer>
                <Stardox variant="inherit">Freight Forwarders</Stardox>
                <Stardox variant="inherit">Shippers</Stardox>
                <Stardox variant="inherit">Freight Brokers</Stardox>
                <Stardox variant="inherit">Domestic Road</Stardox>
                <Stardox variant="inherit">Carriers</Stardox>
                <Stardox variant="inherit">Customs Brokers</Stardox>
              </FreightForwardersShippersContainer>
            </LinkHeaders1>
            <LinkHeaders2>
              <Resources>Resources</Resources>
              <StardoxStarpayMarineContainer>
                <Stardox variant="inherit">Blog</Stardox>
                <Stardox variant="inherit">Case Studies</Stardox>
                <Stardox variant="inherit">Press</Stardox>
                <Stardox variant="inherit">Investors</Stardox>
                <Stardox variant="inherit">Integrations</Stardox>
                <Stardox variant="inherit">Contact Us</Stardox>
              </StardoxStarpayMarineContainer>
            </LinkHeaders2>
            <AboutAndLegal>
              <AboutLegalHeaders>
                <About>About</About>
                <CompanyOverviewMeetContainer>
                  <Stardox variant="inherit">Company Overview</Stardox>
                  <Stardox variant="inherit">Meet the Team</Stardox>
                  <Stardox variant="inherit">Board</Stardox>
                  <Stardox variant="inherit">Careers</Stardox>
                  <Stardox variant="inherit">Partners</Stardox>
                </CompanyOverviewMeetContainer>
              </AboutLegalHeaders>
              <LinkHeaders>
                <Legal>{`Legal `}</Legal>
                <StardoxStarpayMarineContainer>
                  <Stardox variant="inherit">{`Terms & Conditions`}</Stardox>
                  <Stardox variant="inherit">Privacy Policy</Stardox>
                </StardoxStarpayMarineContainer>
              </LinkHeaders>
            </AboutAndLegal>
          </LinkHeadersParent>
          <SocialMedia>
            <FollowUsAndStayUpToDateParent>
              <FollowUsAnd>Follow us and stay up to date</FollowUsAnd>
              <SocialIcons>
                <Icons loading="lazy" alt="" src="/frame-14.svg" />
                <Icons loading="lazy" alt="" src="/frame-15.svg" />
                <Icons loading="lazy" alt="" src="/frame-162.svg" />
              </SocialIcons>
            </FollowUsAndStayUpToDateParent>
            <ExistingStardoxUsersLoginPParent>
              <ExistingStardoxUsers>
                Existing StarDox users login page
              </ExistingStardoxUsers>
              <FrameInner
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
              </FrameInner>
            </ExistingStardoxUsersLoginPParent>
            <CheckHowMuchYouCanSaveWiParent>
              <CheckHowMuch>
                Check how much you can save with Stargo
              </CheckHowMuch>
              <CalculatorButton
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
              </CalculatorButton>
            </CheckHowMuchYouCanSaveWiParent>
          </SocialMedia>
        </FooterLinks>
        <FooterSeparator />
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
    </CheckoutFreeRoot>
  );
};

export default CheckoutFree1;
