import { FunctionComponent } from "react";
import { Button, Box } from "@mui/material";
import styled from "styled-components";

export type ActionsType = {
  className?: string;
};

const NextButtonChild = styled(Button)`
  align-self: stretch;
  height: 60px;
  padding: var(--padding-mini) var(--padding-153xl) var(--padding-mini)
    var(--padding-154xl);
  box-sizing: border-box;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ForgotPassword = styled(Box)`
  position: relative;
`;
const NotAMember = styled(Box)`
  width: 153px;
  position: relative;
  font-weight: 600;
  color: var(--Dark-Blue-SW);
  text-align: right;
  display: inline-block;
  flex-shrink: 0;
`;
const Options = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const AdditionalOptions = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xl) 0px var(--padding-8xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const NextButton = styled(Box)`
  width: 526px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 100%;
`;
const ActionsRoot = styled(Box)`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--Light-Text-SW);
  font-family: var(--font-poppins);
`;

const Actions: FunctionComponent<ActionsType> = ({ className = "" }) => {
  return (
    <ActionsRoot className={className}>
      <NextButton>
        <NextButtonChild
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#002846",
            borderRadius: "30px",
            "&:hover": { background: "#002846" },
            height: 60,
          }}
        >
          Next
        </NextButtonChild>
        <AdditionalOptions>
          <Options>
            <ForgotPassword>Forgot Password</ForgotPassword>
            <NotAMember>Not a Member</NotAMember>
          </Options>
        </AdditionalOptions>
      </NextButton>
    </ActionsRoot>
  );
};

export default Actions;
