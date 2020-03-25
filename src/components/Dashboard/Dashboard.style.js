import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  background-color: ${colors.offwhite};
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const DBHeader = styled.h1`
  text-align: center;
  padding: 30px;
  color: ${colors.darkgrey};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  padding: 30px;
  margin: 0;
  height: 100vh;


  @media (min-width: 700px) {
    flex-direction: row;
  } 
`;

export const Section = styled.section`
  text-align: center;

  @media (min-width: 700px) {
    margin: 40px;
    width: 50%;
  } 
`;