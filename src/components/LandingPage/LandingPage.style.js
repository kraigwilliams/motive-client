import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom'
import cloud from './Assets/cloud.jpg';

export const PageWrapper = styled.div`
  background-image: url(${cloud});
  
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 30px;
  color: ${colors.darkgrey};

  @media (min-width: 600px) {
    color: ${colors.white};
  }
`;

export const LandingText = styled.p`
  text-align: center;
  padding: 10px;
  color: ${colors.darkgrey};
  margin: 5px auto;
  max-width: 70%;
  line-height: 2em;
  word-spacing: 3px;
  font-size: 25px;

  @media (min-width: 600px) {
    color: ${colors.white};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: ${colors.darkgrey}; */
  height: 100vh;
  padding: 15px;

  @media (min-width: 600px) {
    height: 150vh;
  } 
`;

export const LandingLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  padding: 8px;
  color: ${colors.white};
  border: 2px solid white;
  

  :hover {
    box-shadow: 0px 2px 5px 3px rgba(0,0,0,0.50);
  }
`;

export const LandingImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 5px;
  height: 100%;
  height: auto;

  @media (min-width: 600px) {
    width: 70%;
    height: auto;
  } 
`;



