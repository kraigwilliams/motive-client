import styled from 'styled-components'
import { colors } from '../constants'

export const PageWrapper = styled.div`
  background-color: ${colors.darkgrey};
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const DBHeader = styled.h1`
  text-align: center;
  padding: 30px;
  color: ${colors.white};
  background-color: ${colors.darkgrey};
  line-height: 1;
  border-bottom: .5px solid ${colors.teal};
  border-top: .5px solid ${colors.teal};
  font-weight: bold;
  font-style: italic;
  font-size: 35px;
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

  .fade-appear {
    opacity: .01;
    transition: opacity 1s ease;
  }

  .fade-appear-active {
    opacity: 1;
    transition: opacity .5s ease;
  }

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