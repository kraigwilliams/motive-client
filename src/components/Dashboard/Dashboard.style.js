import styled from "styled-components";
import { colors } from "../constants";

export const PageWrapper = styled.div`
  background-color: ${colors.darkgrey};
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const DBHeader = styled.h1`
  text-align: center;
  padding: 40px 10px 7px 10px;
  margin-bottom: 20px;
  color: ${colors.white};
  background-color: ${colors.darkgrey};
  line-height: 1;
  border-bottom: 0.5px solid ${colors.teal};
  font-weight: bold;
  font-style: italic;
  font-size: 35px;
  align-self: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  padding: 30px;
  margin: 0;
  height: 100vh;
  align-content: center;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: initial;
  }
`;

export const Section = styled.section`
  text-align: center;
  margin: auto;

  @media (min-width: 1000px) {
    margin-top: 0;
  }

  @media (min-width: 900px) {
    width: 60%;
  }

  @media (min-width: 500px) {
    width: 80%;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto;
`;
