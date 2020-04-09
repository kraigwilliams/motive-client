import styled from "styled-components";
import { colors } from "../constants";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${colors.darkgrey};
  width: 100%;
  margin: auto;

  @media (min-width: 700px) {
    width: 70%;
    margin: auto;
    padding: 30px 50px;
    border-radius: 30px;
  }
`;

export const SignUpWrapper = styled.div`
  background-color: ${colors.darkgrey};
  margin: 0;
  padding: 40px;
  min-height: 100vh;

  @media (min-width: 700px) {
    background-color: ${colors.offwhite};
  }
`;
