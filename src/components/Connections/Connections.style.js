import styled from 'styled-components'
import { colors } from '../constants'


export const ConnectionsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.offwhite};
  margin: 0px;
  padding: 0;
  min-height: 100vh;
`;

export const ConnectionsHeader = styled.h1`
  
  padding: 30px;
  color: ${colors.white};
  text-align: left;

  @media (min-width: 600px) {
    text-align: center;
  } 
`;

export const ConnectionsHeader2 = styled.h2`
  padding: 10px;
  color: ${colors.coral};
  text-align: left;

  @media (min-width: 600px) {
    text-align: center;
  } 
`;

export const ContentWrapper = styled.div`
  padding: 30px;
`;

export const Section = styled.section`
  text-align: center;
  margin: 20px;
  @media (min-width: 700px) {
    
  } 
`;

