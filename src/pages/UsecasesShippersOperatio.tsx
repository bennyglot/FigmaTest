import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FrameChild = styled.div`
  height: 46.313rem;
  width: 118.75rem;
  position: relative;
  background: linear-gradient(0deg, #edf0f2, rgba(217, 217, 217, 0));
  display: none;
  max-width: 100%;
`;
const FrameItem = styled.div`
  height: 3.125rem;
  width: 3.125rem;
  position: relative;
  box-shadow: 3px 3px 14px rgba(0, 40, 70, 0.2);
  border-radius: 0px 10px 10px 0px;
  background-color: #fff;
  display: none;
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  line-height: 150%;
  font-weight: 300;
  z-index: 2;
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  box-shadow: 3px 3px 14px rgba(0, 40, 70, 0.2);
  border-radius: 0px 10px 10px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.625rem;
  z-index: 1;
`;
const FrameInner = styled.div`
  height: 3.125rem;
  width: 3.125rem;
  position: relative;
  border-radius: 0px 10px 10px 0px;
  background-color: #fff;
  display: none;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;
`;
const FrameWrapper = styled.div`
  width: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.437rem 0rem 0rem;
  box-sizing: border-box;
`;
const HouseBillsOf = styled.h1`
  margin: 0;
  position: absolute;
  top: 13.688rem;
  left: 0rem;
  font-size: 3.125rem;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  width: 41.438rem;
  white-space: nowrap;
  z-index: 1;
`;
const MitigateTheRisk = styled.div`
  position: absolute;
  top: 19.938rem;
  left: 0rem;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 2rem;
  color: #496579;
  display: inline-block;
  width: 43.125rem;
  height: 12rem;
  z-index: 1;
`;
const UseCaseDemo = styled.div`
  position: relative;
  font-size: 1rem;
  font-family: Poppins;
  color: #fff;
  text-align: left;
  display: inline-block;
  min-width: 8rem;
`;
const UseCaseDemoWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.968rem 1.937rem;
  background-color: #002846;
  position: absolute;
  top: 34.063rem;
  left: 0rem;
  border-radius: 112.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: #335c7a;
  }
`;
const RoiCalculator = styled.div`
  position: relative;
  font-size: 1rem;
  font-family: Poppins;
  color: #fff;
  text-align: left;
  display: inline-block;
  min-width: 7.188rem;
`;
const RoiCalculatorWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.968rem 2.312rem;
  background-color: rgba(0, 40, 70, 0.3);
  position: absolute;
  top: 34.063rem;
  left: 13.563rem;
  border-radius: 112.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: rgba(51, 92, 122, 0.3);
  }
`;
const Home = styled.a`
  text-decoration: none;
  width: 3.813rem;
  position: relative;
  color: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const MenuItemsFormselect = styled(Form.Select)`
  font-family: Poppins;
  font-size: 1rem;
  color: #187bdc;
`;
const MenuItemsFormselect1 = styled(Form.Select)`
  font-family: Poppins;
  font-size: 1rem;
  color: #002846;
`;
const MenuItemsFormselect2 = styled(Form.Select)`
  width: 5rem;
  font-family: Poppins;
  font-size: 1rem;
  color: #002846;
`;
const Contact = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 4.188rem;
`;
const MainMenu = styled.div`
  position: absolute;
  top: 1.063rem;
  left: 26.25rem;
  width: 46.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  max-width: 100%;
  z-index: 1;
`;
const PortalLogIn = styled.a`
  text-decoration: none;
  position: relative;
  font-size: 1rem;
  font-family: Poppins;
  color: #002846;
  text-align: left;
  display: inline-block;
  min-width: 6.063rem;
  white-space: nowrap;
`;
const PortalLogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.156rem 0rem 0rem;
`;
const NavigationIconsIbm = styled.img`
  height: 1.813rem;
  width: 1.813rem;
  position: relative;
  min-height: 1.813rem;
`;
const FrameGroup = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.937rem 1.812rem;
  background-color: #fff;
  position: absolute;
  top: 0rem;
  left: 86.875rem;
  box-shadow: 3px 3px 14px rgba(0, 40, 70, 0.2);
  border-radius: 112.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.312rem;
  z-index: 1;
`;
const StargoLogoIcon = styled.img`
  position: absolute;
  top: 0.125rem;
  left: 0rem;
  width: 17.438rem;
  height: 5.75rem;
  z-index: 1;
`;
const Shippers = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 1.75rem;
  font-weight: 300;
  display: inline-block;
  min-width: 4.188rem;
`;
const ExpandMoreIcon = styled.img`
  width: 0.375rem;
  height: 0.663rem;
  position: relative;
  object-fit: contain;
`;
const ShippersOperations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.543rem 0rem 0rem;
`;
const Operations = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 1.75rem;
  font-weight: 300;
  display: inline-block;
  min-width: 5.313rem;
`;
const BillsOfLading = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 1.75rem;
  color: #002846;
  white-space: nowrap;
`;
const MainMenuvariant = styled.div`
  position: absolute;
  top: 9.438rem;
  left: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.937rem;
  z-index: 1;
  color: #9eadb9;
`;
const BillsOfLadingDataStructu = styled.img`
  position: absolute;
  top: 4.938rem;
  left: 47.938rem;
  width: 53.25rem;
  height: 38.938rem;
  object-fit: contain;
  z-index: 1;
`;
const DemoCalculator = styled.div`
  height: 43.875rem;
  width: 101.188rem;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: 1rem;
  color: #002846;
  font-family: Poppins;
`;
const RectangleParent = styled.header`
  flex: 1;
  background: linear-gradient(0deg, #edf0f2, rgba(217, 217, 217, 0));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.75rem 0rem 0.687rem;
  box-sizing: border-box;
  gap: 6.875rem;
  max-width: 100%;
  text-align: center;
  font-size: 1.313rem;
  color: #187bdc;
  font-family: "Font Awesome 6 Pro";
  @media screen and (max-width: 925px) {
    gap: 3.438rem;
  }
  @media screen and (max-width: 450px) {
    gap: 1.688rem;
  }
`;
const UsecasesShippersOperatioInner = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 4.537rem;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    padding-bottom: 2.938rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 1.938rem;
    box-sizing: border-box;
  }
`;
const StargoSolutionBy = styled.p`
  margin-block-start: 0;
  margin-block-end: 1px;
`;
const StargoSolutionByContainer = styled.h1`
  margin: 0;
  width: 40.375rem;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 925px) {
    font-size: 1.813rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.375rem;
    line-height: 2.25rem;
  }
`;
const StargoSolutionByNumbersWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 1.312rem 0rem 1.25rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const FullVisibilityFull = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 2.75rem;
  letter-spacing: -0.02em;
  line-height: 3.831rem;
  font-weight: 500;
  font-family: inherit;
  color: #002846;
  margin-top: -0.288rem;
  @media screen and (max-width: 925px) {
    font-size: 2.188rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.625rem;
    line-height: 2.25rem;
  }
`;
const FrameParent1 = styled.div`
  width: 63.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const FrameDiv = styled.div`
  width: 82.188rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 1.25rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const AccurateHouseBills = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 2rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    line-height: 1.625rem;
  }
`;
const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.287rem;
  max-width: 100%;
`;
const SolutionNumbers = styled.div`
  width: 85.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.75rem 0.562rem;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  font-size: 2.25rem;
  color: #496579;
`;
const AccuracyIconsChild = styled.div`
  width: 41.625rem;
  height: 18.75rem;
  position: relative;
  box-shadow: 0px 6px 35px rgba(180, 182, 187, 0.5);
  border-radius: 15px;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const AllWebsiteIcons = styled.img`
  height: 6.563rem;
  width: 6.625rem;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const AllWebsiteIcons5Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 0rem 0.125rem;
`;
const P = styled.p`
  margin: 0;
  font-size: 2.25rem;
  color: #187bdc;
`;
const HouseBillOfContainer = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  font-weight: 600;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 1.313rem;
  }
`;
const AccuracyIcons = styled.div`
  flex: 1;
  box-shadow: 0px 6px 35px rgba(180, 182, 187, 0.5);
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2.812rem 2.375rem 2.187rem;
  box-sizing: border-box;
  gap: 1.25rem;
  min-width: 27.063rem;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    min-width: 100%;
  }
`;
const AllWebsiteIcons1 = styled.img`
  height: 6.688rem;
  width: 6.688rem;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const AllWebsiteIcons171Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 0rem 0.437rem;
`;
const ComplianceIcons = styled.div`
  flex: 1;
  box-shadow: 0px 6px 35px rgba(180, 182, 187, 0.5);
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2.812rem 2.25rem 2.187rem;
  box-sizing: border-box;
  gap: 1.125rem;
  min-width: 27.063rem;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    min-width: 100%;
  }
`;
const AccuracyIconsParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.5rem;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 925px) {
    gap: 1.75rem;
  }
`;
const AllWebsiteIcons2 = styled.img`
  height: 6.563rem;
  width: 6.563rem;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const AllWebsiteIcons6Wrapper = styled.div`
  width: 35.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
`;
const RectangleParent1 = styled.div`
  flex: 1;
  box-shadow: 0px 6px 35px rgba(180, 182, 187, 0.5);
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 3.062rem 2.375rem 2.187rem;
  box-sizing: border-box;
  gap: 1rem;
  min-width: 27.063rem;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    min-width: 100%;
  }
`;
const AllWebsiteIcons3 = styled.img`
  height: 6.5rem;
  width: 6.563rem;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const AllWebsiteIcons11Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 0rem 0.562rem;
`;
const RectangleParent2 = styled.div`
  flex: 1;
  box-shadow: 0px 6px 35px rgba(180, 182, 187, 0.5);
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 3.687rem 2.25rem 2.187rem;
  box-sizing: border-box;
  gap: 0.437rem;
  min-width: 27.063rem;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    min-width: 100%;
  }
`;
const WebsiteIcons = styled.div`
  width: 86.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.437rem;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    gap: 1.688rem;
  }
`;
const WebsiteIconsWrapper = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 1.25rem 7.875rem;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 1.625rem;
  color: #002846;
  font-family: Poppins;
  @media screen and (max-width: 1350px) {
    padding-bottom: 5.125rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    padding-bottom: 3.313rem;
    box-sizing: border-box;
  }
`;
const HomepageDec23updStargo = styled.div`
  width: 118.75rem;
  height: 50rem;
  position: relative;
  background-color: #f4f6f8;
  display: none;
  max-width: 100%;
`;
const FeatureHighlights = styled.h1`
  margin: 0;
  width: 40.375rem;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 925px) {
    font-size: 1.813rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.375rem;
    line-height: 2.25rem;
  }
`;
const FeatureHighlightsWrapper = styled.div`
  width: 87.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
`;
const Representation = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 1.188rem;
  display: inline-block;
  max-width: 100%;
`;
const InstanceChild = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  border-bottom: 1px solid #9eadb9;
  box-sizing: border-box;
  z-index: 1;
`;
const RepresentationParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.375rem 0rem 0.312rem;
  box-sizing: border-box;
  position: relative;
  min-width: 18.563rem;
  max-width: 100%;
  z-index: 2;
`;
const Representation1 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 1.188rem;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
`;
const InstanceInner = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  border-bottom: 1px solid #187bdc;
  box-sizing: border-box;
  z-index: 1;
`;
const RepresentationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.375rem 0rem 0.312rem;
  box-sizing: border-box;
  position: relative;
  min-width: 18.563rem;
  max-width: 100%;
  z-index: 2;
  color: #187bdc;
`;
const InstanceParent = styled.div`
  width: 87.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 2.25rem;
  max-width: 100%;
  @media screen and (max-width: 925px) {
    gap: 1.125rem;
  }
`;
const SllmMachineLearning = styled.img`
  height: 32.563rem;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 31.875rem;
  z-index: 2;
  @media screen and (max-width: 1350px) {
    min-width: 100%;
  }
`;
const StargoLlm = styled.h1`
  margin: 0;
  width: 35.844rem;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 925px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
const TheFirstLlm = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 2rem;
  color: #496579;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    line-height: 1.625rem;
  }
`;
const StargoLlmParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.437rem;
  max-width: 100%;
`;
const FrameWrapper1 = styled.div`
  width: 37.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 8.437rem;
  box-sizing: border-box;
  min-width: 37.375rem;
  min-height: 23.625rem;
  max-width: 100%;
  @media screen and (max-width: 1825px) {
    flex: 1;
  }
  @media screen and (max-width: 1350px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 5.5rem;
    box-sizing: border-box;
  }
`;
const SllmMachineLearning141Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 4.937rem;
  max-width: 100%;
  text-align: left;
  font-size: 3.125rem;
  color: #002846;
  @media screen and (max-width: 1825px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 925px) {
    gap: 2.438rem;
  }
  @media screen and (max-width: 450px) {
    gap: 1.25rem;
  }
`;
const FrameParent2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.562rem;
  max-width: 100%;
  font-size: 0.944rem;
  color: #9eadb9;
`;
const HomepageDec23updStargo36Parent = styled.section`
  align-self: stretch;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 4.437rem 15.625rem 5.125rem 11.812rem;
  box-sizing: border-box;
  gap: 1.687rem;
  max-width: 100%;
  z-index: 1;
  text-align: center;
  font-size: 2.25rem;
  color: #002846;
  font-family: Poppins;
  @media screen and (max-width: 1350px) {
    padding-left: 5.875rem;
    padding-right: 7.813rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    padding: 2.875rem 3.875rem 3.313rem 2.938rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: 1.875rem;
    padding-bottom: 2.125rem;
    box-sizing: border-box;
  }
`;
const HomepageDec23updStargo1 = styled.div`
  width: 118.75rem;
  height: 50rem;
  position: relative;
  background-color: #fff;
  display: none;
  max-width: 100%;
`;
const StargoBenefitsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 1.25rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const RepresentationParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.375rem 0rem 0.312rem;
  box-sizing: border-box;
  position: relative;
  min-width: 18.563rem;
  max-width: 100%;
  z-index: 1;
`;
const RepresentationParent2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.375rem 0rem 0.312rem;
  box-sizing: border-box;
  position: relative;
  min-width: 18.563rem;
  max-width: 100%;
  z-index: 1;
  color: #187bdc;
`;
const InstanceGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 2.25rem;
  max-width: 100%;
  font-size: 0.944rem;
  color: #9eadb9;
  @media screen and (max-width: 925px) {
    gap: 1.125rem;
  }
`;
const FrameParent3 = styled.div`
  width: 87.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.687rem;
  max-width: 100%;
`;
const Productivity = styled.p`
  margin: 0;
`;
const IncreasedProductivity = styled.h1`
  margin: 0;
  width: 35.125rem;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 925px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
const BoostTeamProductivity = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  line-height: 2rem;
  color: #496579;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    line-height: 1.625rem;
  }
`;
const IncreasedProductivityParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.687rem;
  max-width: 100%;
`;
const FrameWrapper2 = styled.div`
  width: 36.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4rem 0rem 0rem;
  box-sizing: border-box;
  min-width: 36.625rem;
  max-width: 100%;
  @media screen and (max-width: 1825px) {
    flex: 1;
  }
  @media screen and (max-width: 1350px) {
    min-width: 100%;
  }
`;
const Productivity1 = styled.img`
  height: 30rem;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 30.938rem;
  z-index: 1;
  @media screen and (max-width: 1350px) {
    min-width: 100%;
  }
`;
const FrameParent4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.25rem;
  max-width: 100%;
  text-align: left;
  font-size: 3.125rem;
  @media screen and (max-width: 1825px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 925px) {
    gap: 2.125rem;
  }
  @media screen and (max-width: 450px) {
    gap: 1.063rem;
  }
`;
const HomepageDec23updStargo37Parent = styled.section`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.437rem 14.687rem 3.812rem 15.625rem;
  box-sizing: border-box;
  gap: 4.437rem;
  max-width: 100%;
  text-align: center;
  font-size: 2.25rem;
  color: #002846;
  font-family: Poppins;
  @media screen and (max-width: 1350px) {
    gap: 2.188rem;
    padding-left: 7.813rem;
    padding-right: 7.313rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    gap: 1.125rem;
    padding: 2.875rem 3.625rem 2.5rem 3.875rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: 1.875rem;
    padding-bottom: 1.625rem;
    box-sizing: border-box;
  }
`;
const ClientQuote = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  background-color: #f4f6f8;
`;
const SuccessStories = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 925px) {
    font-size: 2rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`;
const R = styled.div`
  width: 33.375rem;
  height: 8.056rem;
  position: relative;
  font-size: 1.188rem;
  letter-spacing: -0.02em;
  line-height: 2.08rem;
  color: rgba(0, 40, 70, 0.7);
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
`;
const SuccessStoriesParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.737rem;
  max-width: 100%;
  z-index: 1;
`;
const Success = styled.div`
  width: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem 0.5rem;
  box-sizing: border-box;
  min-width: 43.75rem;
  max-width: 100%;
  @media screen and (max-width: 1825px) {
    flex: 1;
  }
  @media screen and (max-width: 1350px) {
    min-width: 100%;
  }
`;
const PrimaryIcon = styled.img`
  width: 5.063rem;
  height: 3.563rem;
  position: relative;
  z-index: 1;
`;
const TheStargoSolutionContainer = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 134.8%;
  font-weight: 600;
  font-family: inherit;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: 1.188rem;
    line-height: 1.625rem;
  }
`;
const PersonsTitleCompanyNameContainer = styled.div`
  width: 15.806rem;
  position: relative;
  font-size: 1.063rem;
  color: #505a64;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const ManualImprovement = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.887rem;
  max-width: 100%;
`;
const SolutionDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0.25rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const PrimaryParent = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.231rem;
  min-width: 37.5rem;
  max-width: 100%;
  font-size: 1.5rem;
  @media screen and (max-width: 1825px) {
    flex: 1;
  }
  @media screen and (max-width: 1350px) {
    min-width: 100%;
  }
`;
const Component = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 3.012rem 15.625rem 4.475rem;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  gap: 1.25rem;
  z-index: 1;
  text-align: left;
  font-size: 2.5rem;
  color: #002846;
  font-family: Poppins;
  @media screen and (max-width: 1825px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1350px) {
    padding-left: 7.813rem;
    padding-right: 7.813rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    padding-left: 3.875rem;
    padding-right: 3.875rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: 1.938rem;
    padding-bottom: 2.938rem;
    box-sizing: border-box;
  }
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const SeeRoiIn = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 3.75rem;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 925px) {
    font-size: 1.875rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.375rem;
    line-height: 2.25rem;
  }
`;
const R1 = styled.div`
  width: 37.5rem;
  position: relative;
  font-size: 1.25rem;
  font-weight: 300;
  color: #d5dbe3;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;
const SeeRoiIn12WeeksParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.125rem;
  max-width: 100%;
`;
const SeeROI = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0.062rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const CalculatorButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.812rem 2rem;
  background-color: #187bdc;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: #3094f5;
  }
`;
const SeeROIParent = styled.div`
  width: 43.813rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.625rem;
  max-width: 100%;
  z-index: 1;
`;
const RoiBottomBanner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.187rem 15.562rem;
  box-sizing: border-box;
  position: relative;
  min-height: 20rem;
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 1350px) {
    padding-left: 7.75rem;
    padding-right: 7.75rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    padding-left: 3.875rem;
    padding-right: 3.875rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    box-sizing: border-box;
  }
`;
const FooterBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  background-color: #f4f6f8;
`;
const LogoTrnsprnt = styled.div`
  width: 9.563rem;
  height: 3.375rem;
  position: absolute;
  margin: 0 !important;
  top: 2rem;
  left: 15.688rem;
  z-index: 1;
`;
const StargoLogoIcon1 = styled.img`
  width: 9.563rem;
  height: 3.188rem;
  position: relative;
  z-index: 2;
`;
const LineDiv = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: #d5dbe3;
  border-top: 1px solid #d5dbe3;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const FooterSwInner = styled.div`
  width: 86.688rem;
  height: 0.563rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0.5rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const Solutions = styled.div`
  width: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const StardoxStarpayMarineContainer = styled.div`
  align-self: stretch;
  height: 12.5rem;
  position: relative;
  font-size: 0.813rem;
  line-height: 1.938rem;
  color: #496579;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const SolutionsParent = styled.div`
  width: 11.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.562rem;
`;
const UseCases = styled.div`
  width: 5.625rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const FreightForwardersShippersContainer = styled.div`
  align-self: stretch;
  height: 12.5rem;
  position: relative;
  font-size: 0.813rem;
  line-height: 1.938rem;
  color: #496579;
  display: inline-block;
  flex-shrink: 0;
  z-index: 2;
`;
const BlogCaseStudiesContainer = styled.div`
  align-self: stretch;
  height: 12.5rem;
  position: relative;
  font-size: 0.813rem;
  line-height: 1.938rem;
  color: #496579;
  display: inline-block;
  flex-shrink: 0;
  z-index: 3;
`;
const About = styled.div`
  width: 3.5rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const AboutParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.562rem;
  min-width: 7.313rem;
`;
const Legal = styled.div`
  width: 9.375rem;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const AboutLegalLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 14.625rem;
  max-width: 100%;
  row-gap: 20px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const LinksContainer = styled.div`
  width: 56.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 56.25rem;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1825px) {
    flex: 1;
    min-width: 100%;
  }
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;
const FollowUsAnd = styled.div`
  position: relative;
`;
const RadixIconsinstagramLogo = styled.img`
  height: 1.231rem;
  width: 1.231rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icons = styled.div`
  height: 2.05rem;
  width: 2.05rem;
  border-radius: 18px;
  background-color: #9eadb9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.412rem 0.375rem;
  box-sizing: border-box;
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.825rem;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0.006rem;
  gap: 0.612rem;
  z-index: 1;
  color: #555;
`;
const ExistingStardoxUsers = styled.div`
  position: relative;
  z-index: 1;
`;
const PortalSignIn = styled.div`
  position: relative;
  font-size: 0.819rem;
  font-family: Poppins;
  color: #fff;
  text-align: left;
  display: inline-block;
  min-width: 5.313rem;
`;
const LoginButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.612rem 1.625rem 0.618rem;
  background-color: #9eadb9;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: #6b7a87;
  }
`;
const LoginLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;
`;
const RoiCalculator1 = styled.div`
  position: relative;
  font-size: 0.819rem;
  font-family: Poppins;
  color: #fff;
  text-align: left;
  display: inline-block;
  min-width: 5.9rem;
`;
const SavingsButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.618rem 1.312rem 0.612rem;
  background-color: #9eadb9;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: #6b7a87;
  }
`;
const SavingsLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.612rem;
`;
const SocialLinks = styled.div`
  height: 15.444rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 5.712rem;
  box-sizing: border-box;
  gap: 1.237rem;
  min-width: 20rem;
  font-size: 0.925rem;
  @media screen and (max-width: 1825px) {
    flex: 1;
  }
`;
const FooterLinks = styled.div`
  width: 86.688rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 0rem 1.243rem;
  box-sizing: border-box;
  max-width: 100%;
  gap: 1.25rem;
  @media screen and (max-width: 1825px) {
    flex-wrap: wrap;
  }
`;
const CopyrightChild = styled.div`
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  background-color: #d5dbe3;
  border-top: 1px solid #d5dbe3;
  box-sizing: border-box;
  z-index: 1;
`;
const AllRightsReserved = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;
const AllRightsReservedContainer = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 184.7%;
  z-index: 1;
`;
const Copyright = styled.div`
  width: 86.688rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.562rem;
  max-width: 100%;
  font-size: 0.813rem;
  color: #496579;
`;
const FooterSw = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.937rem 15.687rem 3.125rem;
  box-sizing: border-box;
  position: relative;
  gap: 1.625rem;
  max-width: 100%;
  z-index: 3;
  margin-top: -0.063rem;
  text-align: left;
  font-size: 0.938rem;
  color: #002846;
  font-family: Poppins;
  @media screen and (max-width: 1350px) {
    padding-left: 7.813rem;
    padding-right: 7.813rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 925px) {
    padding-left: 3.875rem;
    padding-right: 3.875rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
  }
`;
const ROIBanner = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: 2.313rem;
  color: #f4f6f8;
  font-family: Poppins;
`;
const UsecasesShippersOperatioRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const UsecasesShippersOperatio: FunctionComponent = () => {
  return (
    <UsecasesShippersOperatioRoot>
      <UsecasesShippersOperatioInner>
        <RectangleParent>
          <FrameChild />
          <FrameWrapper>
            <FrameParent>
              <RectangleGroup>
                <FrameItem />
                <Div></Div>
              </RectangleGroup>
              <RectangleGroup>
                <FrameInner />
                <Div></Div>
              </RectangleGroup>
              <RectangleGroup>
                <FrameInner />
                <Div></Div>
              </RectangleGroup>
            </FrameParent>
          </FrameWrapper>
          <DemoCalculator>
            <HouseBillsOf>House Bills of Lading</HouseBillsOf>
            <MitigateTheRisk>
              Mitigate the risk of disputes, maintain full control over
              shipments, and enhance shipment efficiency with GenAI-powered
              House Bill of Lading processing. Stargo’s LLM automatically reads,
              extracts, cleanses, and structures incoming House Bill of Lading
              data, giving shippers full visibility into all current, future,
              and historical shipments, and ensuring optimized vendor
              performance. 
            </MitigateTheRisk>
            <UseCaseDemoWrapper>
              <UseCaseDemo>Use Case Demo</UseCaseDemo>
            </UseCaseDemoWrapper>
            <RoiCalculatorWrapper>
              <RoiCalculator>ROI Calculator</RoiCalculator>
            </RoiCalculatorWrapper>
            <MainMenu>
              <Home>Home</Home>
              <MenuItemsFormselect />
              <MenuItemsFormselect1 />
              <MenuItemsFormselect1 />
              <MenuItemsFormselect2 />
              <Contact>Contact</Contact>
            </MainMenu>
            <FrameGroup>
              <PortalLogInWrapper>
                <PortalLogIn>Portal Log In</PortalLogIn>
              </PortalLogInWrapper>
              <NavigationIconsIbm alt="" src="/navigation-icons-ibm.svg" />
            </FrameGroup>
            <StargoLogoIcon loading="lazy" alt="" src="/stargo-logo.svg" />
            <MainMenuvariant>
              <Shippers>Shippers</Shippers>
              <ShippersOperations>
                <ExpandMoreIcon loading="lazy" alt="" src="/expand-more.svg" />
              </ShippersOperations>
              <Operations>Operations</Operations>
              <ShippersOperations>
                <ExpandMoreIcon alt="" src="/expand-more-1.svg" />
              </ShippersOperations>
              <BillsOfLading>House Bills of Lading</BillsOfLading>
            </MainMenuvariant>
            <BillsOfLadingDataStructu
              loading="lazy"
              alt=""
              src="/bills-of-lading--data-structuring--29-1@2x.png"
            />
          </DemoCalculator>
        </RectangleParent>
      </UsecasesShippersOperatioInner>
      <WebsiteIconsWrapper>
        <WebsiteIcons>
          <SolutionNumbers>
            <FrameContainer>
              <FrameDiv>
                <FrameParent1>
                  <StargoSolutionByNumbersWrapper>
                    <StargoSolutionByContainer>
                      <StargoSolutionBy>
                        Stargo Solution by Numbers
                      </StargoSolutionBy>
                    </StargoSolutionByContainer>
                  </StargoSolutionByNumbersWrapper>
                  <FullVisibilityFull>
                    Full Visibility. Full Control.
                  </FullVisibilityFull>
                </FrameParent1>
              </FrameDiv>
              <AccurateHouseBills>
                Accurate House Bills of Lading protect the integrity of the
                shipper-vendor relationship while ensuring smooth, efficient,
                optimized shipping processes. Stargo’s LLM verifies initial data
                values within incoming House Bills of Lading, ensuring 100%
                accurate HBL documentation.
              </AccurateHouseBills>
            </FrameContainer>
          </SolutionNumbers>
          <AccuracyIconsParent>
            <AccuracyIcons>
              <AccuracyIconsChild />
              <AllWebsiteIcons5Wrapper>
                <AllWebsiteIcons
                  loading="lazy"
                  alt=""
                  src="/all-website-icons5@2x.png"
                />
              </AllWebsiteIcons5Wrapper>
              <HouseBillOfContainer>
                <StargoSolutionBy>
                  House Bill of Lading accuracy
                </StargoSolutionBy>
                <P>100%</P>
              </HouseBillOfContainer>
            </AccuracyIcons>
            <ComplianceIcons>
              <AccuracyIconsChild />
              <AllWebsiteIcons171Wrapper>
                <AllWebsiteIcons1
                  loading="lazy"
                  alt=""
                  src="/all-website-icons17-1@2x.png"
                />
              </AllWebsiteIcons171Wrapper>
              <HouseBillOfContainer>
                <StargoSolutionBy>Customs compliance accuracy</StargoSolutionBy>
                <P>60% → 100%</P>
              </HouseBillOfContainer>
            </ComplianceIcons>
          </AccuracyIconsParent>
          <AccuracyIconsParent>
            <RectangleParent1>
              <AccuracyIconsChild />
              <AllWebsiteIcons6Wrapper>
                <AllWebsiteIcons2
                  loading="lazy"
                  alt=""
                  src="/all-website-icons6@2x.png"
                />
              </AllWebsiteIcons6Wrapper>
              <HouseBillOfContainer>
                <StargoSolutionBy>Deliverability improvement</StargoSolutionBy>
                <P>+5%</P>
              </HouseBillOfContainer>
            </RectangleParent1>
            <RectangleParent2>
              <AccuracyIconsChild />
              <AllWebsiteIcons11Wrapper>
                <AllWebsiteIcons3
                  loading="lazy"
                  alt=""
                  src="/all-website-icons11@2x.png"
                />
              </AllWebsiteIcons11Wrapper>
              <HouseBillOfContainer>
                <StargoSolutionBy>Productivity improvement</StargoSolutionBy>
                <P>+26%</P>
              </HouseBillOfContainer>
            </RectangleParent2>
          </AccuracyIconsParent>
        </WebsiteIcons>
      </WebsiteIconsWrapper>
      <HomepageDec23updStargo36Parent>
        <HomepageDec23updStargo />
        <FeatureHighlightsWrapper>
          <FeatureHighlights>Feature Highlights</FeatureHighlights>
        </FeatureHighlightsWrapper>
        <FrameParent2>
          <InstanceParent>
            <RepresentationParent>
              <Representation>GenAI-powered Processing</Representation>
              <InstanceChild />
            </RepresentationParent>
            <RepresentationParent>
              <Representation>Vendor Performance Analysis</Representation>
              <InstanceChild />
            </RepresentationParent>
            <RepresentationContainer>
              <Representation1>Stargo LLM</Representation1>
              <InstanceInner />
            </RepresentationContainer>
            <RepresentationParent>
              <Representation>GenAI Data Verification</Representation>
              <InstanceChild />
            </RepresentationParent>
          </InstanceParent>
          <SllmMachineLearning141Parent>
            <SllmMachineLearning
              loading="lazy"
              alt=""
              src="/sllm--machine-learning--14-1@2x.png"
            />
            <FrameWrapper1>
              <StargoLlmParent>
                <StargoLlm>Stargo LLM</StargoLlm>
                <TheFirstLlm>
                  The first LLM built and trained for freight, logistics, and
                  supply chain, the SLLM harnesses real-time data to apply deep
                  industry context to the data automation process, analyzing
                  historical and current data to predict trends, solve problems,
                  and identify cost-savings.
                </TheFirstLlm>
              </StargoLlmParent>
            </FrameWrapper1>
          </SllmMachineLearning141Parent>
        </FrameParent2>
      </HomepageDec23updStargo36Parent>
      <HomepageDec23updStargo37Parent>
        <HomepageDec23updStargo1 />
        <FrameParent3>
          <StargoBenefitsWrapper>
            <StargoSolutionByContainer>
              Stargo Benefits
            </StargoSolutionByContainer>
          </StargoBenefitsWrapper>
          <InstanceGroup>
            <RepresentationParent1>
              <Representation1>Enhanced Shipping Efficiency</Representation1>
              <InstanceChild />
            </RepresentationParent1>
            <RepresentationParent2>
              <Representation>Increased Productivity</Representation>
              <InstanceInner />
            </RepresentationParent2>
            <RepresentationParent1>
              <Representation>Fast Dispute Resolution</Representation>
              <InstanceChild />
            </RepresentationParent1>
            <RepresentationParent1>
              <Representation>100% Visibility</Representation>
              <InstanceChild />
            </RepresentationParent1>
          </InstanceGroup>
        </FrameParent3>
        <FrameParent4>
          <FrameWrapper2>
            <IncreasedProductivityParent>
              <IncreasedProductivity>
                <StargoSolutionBy>Increased</StargoSolutionBy>
                <Productivity>Productivity</Productivity>
              </IncreasedProductivity>
              <BoostTeamProductivity>
                Boost team productivity by over 26% by automating time- and
                resource-intensive manual BoL processes. Eliminate data
                processing errors while freeing your team up for more high-value
                work. 
              </BoostTeamProductivity>
            </IncreasedProductivityParent>
          </FrameWrapper2>
          <Productivity1
            loading="lazy"
            alt=""
            src="/productivity--11-1@2x.png"
          />
        </FrameParent4>
      </HomepageDec23updStargo37Parent>
      <Component>
        <ClientQuote />
        <Success>
          <SuccessStoriesParent>
            <SuccessStories>Success Stories</SuccessStories>
            <R>
              We’re proud to work with some of the biggest organizations in the
              supply chain, unlocking shipping efficiency at every opportunity. 
            </R>
          </SuccessStoriesParent>
        </Success>
        <PrimaryParent>
          <PrimaryIcon loading="lazy" alt="" src="/primary.svg" />
          <SolutionDescription>
            <ManualImprovement>
              <TheStargoSolutionContainer>
                <Productivity>{`The Stargo Solution dramatically improves `}</Productivity>
                <Productivity>
                  manual processes and turns them into an automated one in
                  minutes.
                </Productivity>
              </TheStargoSolutionContainer>
              <PersonsTitleCompanyNameContainer>
                <Productivity>Person’s Title</Productivity>
                <Productivity>Company Name</Productivity>
              </PersonsTitleCompanyNameContainer>
            </ManualImprovement>
          </SolutionDescription>
        </PrimaryParent>
      </Component>
      <ROIBanner>
        <RoiBottomBanner>
          <Icon loading="lazy" alt="" src="/111-1@2x.png" />
          <SeeROIParent>
            <SeeROI>
              <SeeRoiIn12WeeksParent>
                <SeeRoiIn>See ROI in 12 weeks</SeeRoiIn>
                <R1>
                  <Productivity>{`Stargo users see a proven return on investment `}</Productivity>
                  <Productivity>
                    and operational profitability gains in just 12 weeks.
                  </Productivity>
                  <Productivity>
                    Non-disruptive implementation in 4 weeks or less.
                  </Productivity>
                </R1>
              </SeeRoiIn12WeeksParent>
            </SeeROI>
            <CalculatorButton>
              <RoiCalculator>ROI Calculator</RoiCalculator>
            </CalculatorButton>
          </SeeROIParent>
        </RoiBottomBanner>
        <FooterSw>
          <FooterBg />
          <LogoTrnsprnt />
          <StargoLogoIcon1 alt="" src="/stargo-logo-1.svg" />
          <FooterSwInner>
            <LineDiv />
          </FooterSwInner>
          <FooterLinks>
            <LinksContainer>
              <SolutionsParent>
                <Solutions>Solutions</Solutions>
                <StardoxStarpayMarineContainer>
                  <Productivity>Stardox</Productivity>
                  <Productivity>Starpay</Productivity>
                  <Productivity>Marine Insurance</Productivity>
                  <Productivity>Starboard</Productivity>
                </StardoxStarpayMarineContainer>
              </SolutionsParent>
              <SolutionsParent>
                <UseCases>Use Cases</UseCases>
                <FreightForwardersShippersContainer>
                  <Productivity>Freight Forwarders</Productivity>
                  <Productivity>Shippers</Productivity>
                  <Productivity>Freight Brokers</Productivity>
                  <Productivity>Domestic Road</Productivity>
                  <Productivity>Carriers</Productivity>
                  <Productivity>Customs Brokers</Productivity>
                </FreightForwardersShippersContainer>
              </SolutionsParent>
              <SolutionsParent>
                <UseCases>Resources</UseCases>
                <BlogCaseStudiesContainer>
                  <Productivity>Blog</Productivity>
                  <Productivity>Case Studies</Productivity>
                  <Productivity>Press</Productivity>
                  <Productivity>Investors</Productivity>
                  <Productivity>Integrations</Productivity>
                  <Productivity>Contact Us</Productivity>
                </BlogCaseStudiesContainer>
              </SolutionsParent>
              <AboutLegalLinks>
                <AboutParent>
                  <About>About</About>
                  <StardoxStarpayMarineContainer>
                    <Productivity>Company Overview</Productivity>
                    <Productivity>Meet the Team</Productivity>
                    <Productivity>Board</Productivity>
                    <Productivity>Careers</Productivity>
                    <Productivity>Partners</Productivity>
                  </StardoxStarpayMarineContainer>
                </AboutParent>
                <AboutParent>
                  <Legal>{`Legal `}</Legal>
                  <FreightForwardersShippersContainer>
                    <Productivity>{`Terms & Conditions`}</Productivity>
                    <Productivity>Privacy Policy</Productivity>
                  </FreightForwardersShippersContainer>
                </AboutParent>
              </AboutLegalLinks>
            </LinksContainer>
            <SocialLinks>
              <SocialContainer>
                <FollowUsAnd>Follow us and stay up to date</FollowUsAnd>
                <SocialIcons>
                  <Icons>
                    <RadixIconsinstagramLogo
                      loading="lazy"
                      alt=""
                      src="/radixiconsinstagramlogo.svg"
                    />
                  </Icons>
                  <Icons>
                    <RadixIconsinstagramLogo
                      loading="lazy"
                      alt=""
                      src="/rilinkedinfill.svg"
                    />
                  </Icons>
                  <Icons>
                    <RadixIconsinstagramLogo
                      loading="lazy"
                      alt=""
                      src="/rifacebookboxfill.svg"
                    />
                  </Icons>
                </SocialIcons>
              </SocialContainer>
              <LoginLinks>
                <ExistingStardoxUsers>
                  Existing StarDox users login page
                </ExistingStardoxUsers>
                <LoginButton>
                  <PortalSignIn>Portal Sign In</PortalSignIn>
                </LoginButton>
              </LoginLinks>
              <SavingsLinks>
                <ExistingStardoxUsers>
                  Check how much you can save with Stargo
                </ExistingStardoxUsers>
                <SavingsButton>
                  <RoiCalculator1>ROI Calculator</RoiCalculator1>
                </SavingsButton>
              </SavingsLinks>
            </SocialLinks>
          </FooterLinks>
          <Copyright>
            <CopyrightChild />
            <AllRightsReservedContainer>
              <AllRightsReserved>
                All Rights Reserved Stargo 2024 © Stargo is trading name of
                G-ILS Transportation Ltd whose registered office is Hasadna 8
                Ra’anana, 4365104, Israel
              </AllRightsReserved>
              <Productivity>
                Disclaimer: G_ILS is Transportation Ltd not affiliated‭,
                ‬associated with‭, ‬sponsored by or endorsed by any of the
                shipping lines, airlines, trucking companies, domestic carriers,
                courier providers mentioned in this site‭.‬
              </Productivity>
            </AllRightsReservedContainer>
          </Copyright>
        </FooterSw>
      </ROIBanner>
    </UsecasesShippersOperatioRoot>
  );
};

export default UsecasesShippersOperatio;
