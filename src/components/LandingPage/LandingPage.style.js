import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom'

export const PageWrapper = styled.div`
  background-color: ${colors.offwhite};
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 30px;
  color: ${colors.darkgrey};
`;

export const LandingText = styled.p`
  text-align: center;
  padding: 10px;
  color: ${colors.white};
  margin: 5px auto;
  max-width: 70%;
  line-height: 2em;
  word-spacing: 3px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  height: 100vh;
  padding: 15px;

  @media (min-width: 600px) {
    height: 50vh;
  } 
`;

export const LandingLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  text-decoration: none;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  max-width: 300px;
  color: ${colors.white};
  border: 2px solid white;
  

  :hover {
    box-shadow: 0px 2px 5px 3px rgba(0,0,0,0.50);
  }
`;



