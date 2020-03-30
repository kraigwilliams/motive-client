import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom'
import cloud from './Assets/cloud.jpg';

export const PageWrapper = styled.div`
  /* background-image: url(${cloud});
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  text-align: center;
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 30px;
  color: ${colors.white};

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
    color: ${colors.darkgrey};
  }
`;

export const ContentWrapper = styled.div`
  background-image: url(${cloud});
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 600px) {
    height: 100vh;
  } 
`;

export const ContentWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color ? props.color : colors.slategrey};
  height: 60vh;
  padding: 70px;
  justify-content: center;
  align-items: center;
  color: ${colors.darkgrey};
  font-size: 25px;
  text-align: center;


  .img {
      width: 150%;
      
    }

  @media (min-width: 600px) {
    font-size: 33px;
    height: 100vh;
    padding: 70px 50px;
    /* width: fit-content; */
    height: fit-content;

    .img {
      padding: 0px;
      width: 80%;
    }
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
  color: ${colors.darkgrey};
  border: 2px solid ${colors.darkgrey};
  

  :hover {
    box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.20);
    border: 2px solid ${colors.darkgrey};
    color: ${colors.darkgrey};
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



