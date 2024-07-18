import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";

export type ProposalHasBeenSentType = {
  className?: string;
};

const ContainerChild = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
`;
const SendProposal = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const PleaseSelectWho = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #8f919a;
  text-align: left;
`;
const ProposalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;
const MagnifyingGlassDollarLightIcon = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Search = styled.input`
  width: calc(100% - 310px);
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  background-color: transparent;
  height: 19px;
  flex: 1;
  position: relative;
  color: #b4b6bb;
  text-align: left;
  display: inline-block;
  min-width: 30px;
  padding: 0;
`;
const SearchInput = styled.div`
  align-self: stretch;
  border-bottom: 1px solid #b4b6bb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 294px 10px 0px;
  gap: 8px;
  @media screen and (max-width: 450px) {
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const Layer1Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Loremipsumgmailcom = styled.div`
  height: 16px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;
const Layer1Parent = styled.div`
  flex: 1;
  border-radius: 4px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
  gap: 9px;
  max-width: 100%;
`;
const FrameChild = styled.img`
  height: 22px;
  width: 22px;
  position: relative;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
`;
const SearchContainer = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: 14px;
  color: #5d606d;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  text-align: center;
  font-size: 24px;
  color: #000;
  font-family: Roboto;
`;
const Filled = styled.div`
  position: relative;
  font-size: 14px;
  font-family: Roboto;
  color: #0f82f5;
  text-align: left;
  display: inline-block;
  min-width: 127px;
`;
const FilledWrapper = styled.button`
  cursor: pointer;
  border: 1px solid #0f82f5;
  padding: 10px 25px;
  background-color: transparent;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(41, 156, 255, 0.09);
    border: 1px solid #299cff;
    box-sizing: border-box;
  }
`;
const Filled1 = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  font-family: Roboto;
  color: #fff;
  text-align: left;
`;
const FilledContainer = styled.button`
  cursor: pointer;
  border: none;
  padding: 12px 23px;
  background-color: #0f82f5;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  &:hover {
    background-color: #299cff;
  }
`;
const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ProposalHasBeenSentRoot = styled.div`
  width: 703px;
  border-radius: 4px;
  background-color: #fff;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
  gap: 32px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 450px) {
    gap: 16px;
  }
`;

const ProposalHasBeenSent: FunctionComponent<ProposalHasBeenSentType> = ({
  className = "",
}) => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "Proposal email" to the project
  }, []);

  const onFrameButtonClick1 = useCallback(() => {
    // Please sync "PR after validate and proposal!" to the project
  }, []);

  return (
    <ProposalHasBeenSentRoot className={className}>
      <Container>
        <ContainerChild loading="lazy" alt="" src="/group-239872.svg" />
        <ProposalForm>
          <SendProposal>Send Proposal</SendProposal>
          <PleaseSelectWho>
            Please select who would you like to receive the proposal email
          </PleaseSelectWho>
        </ProposalForm>
        <SearchContainer>
          <SearchInput>
            <MagnifyingGlassDollarLightIcon
              alt=""
              src="/magnifyingglassdollarlight.svg"
            />
            <Search placeholder="Search" type="text" />
          </SearchInput>
          <FrameParent>
            <FrameGroup>
              <Layer1Parent>
                <Layer1Icon alt="" src="/layer-1.svg" />
                <Loremipsumgmailcom>loremipsum@gmail.com</Loremipsumgmailcom>
              </Layer1Parent>
              <FrameWrapper>
                <FrameContainer>
                  <FrameChild alt="" src="/frame-239632.svg" />
                </FrameContainer>
              </FrameWrapper>
            </FrameGroup>
            <FrameGroup>
              <Layer1Parent>
                <Layer1Icon alt="" src="/layer-1-1.svg" />
                <Loremipsumgmailcom>loremipsum@gmail.com</Loremipsumgmailcom>
              </Layer1Parent>
              <FrameWrapper>
                <FrameContainer>
                  <FrameChild alt="" src="/frame-239632-1.svg" />
                </FrameContainer>
              </FrameWrapper>
            </FrameGroup>
            <FrameGroup>
              <Layer1Parent>
                <Layer1Icon alt="" src="/layer-1-2.svg" />
                <Loremipsumgmailcom>loremipsum@gmail.com</Loremipsumgmailcom>
              </Layer1Parent>
              <FrameWrapper>
                <FrameContainer>
                  <FrameChild alt="" src="/frame-239632-2.svg" />
                </FrameContainer>
              </FrameWrapper>
            </FrameGroup>
            <FrameGroup>
              <Layer1Parent>
                <Layer1Icon alt="" src="/layer-1-3.svg" />
                <Loremipsumgmailcom>loremipsum@gmail.com</Loremipsumgmailcom>
              </Layer1Parent>
              <FrameWrapper>
                <FrameContainer>
                  <FrameChild alt="" src="/frame-239632-3.svg" />
                </FrameContainer>
              </FrameWrapper>
            </FrameGroup>
          </FrameParent>
        </SearchContainer>
      </Container>
      <FrameParent1>
        <FilledWrapper onClick={onFrameButtonClick}>
          <Filled>View proposal Email</Filled>
        </FilledWrapper>
        <FilledContainer onClick={onFrameButtonClick1}>
          <Filled1>Back to control tower</Filled1>
        </FilledContainer>
      </FrameParent1>
    </ProposalHasBeenSentRoot>
  );
};

export default ProposalHasBeenSent;
