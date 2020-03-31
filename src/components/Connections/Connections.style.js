import styled from 'styled-components'
import { colors } from '../constants'


export const ConnectionsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  margin: 0px;
  padding: 0;
  min-height: 100vh;
  height: 100%;
`;

export const ConnectionsHeader = styled.h1`
  font-size: 25px;
  padding-top: 60px;
  padding-bottom: 30px;
  
  color: ${colors.white};
  text-align: center;

  @media (min-width: 600px) {
    text-align: center;
    font-size: 45px;
  } 
`;

export const FriendsName = styled.h2`
  padding: 7px;
  color: ${colors.white};
  text-align: center;
  font-size: 25px;

  @media (min-width: 600px) {
    text-align: center;
    font-size: 27px;
  } 
`;

export const FriendsUserName = styled.h2`
  color: ${colors.blue};
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid ${colors.darkgrey};
  border-radius: 7px;
  line-height: 1.5;
  width: 300px;
  margin: auto;


  @media (min-width: 600px) {
    text-align: center;
  } 
`;


export const FriendsHeader = styled.h2`

  color: ${colors.white};
  text-align: center;
  line-height: 2.5;
  border-bottom: 1px solid ${colors.white};
  max-width: 300px;
  margin: auto;

  @media (min-width: 600px) {
    text-align: center;
  } 
`;

export const ConnectionsSection = styled.section`
  background-color: ${colors.darkergrey};
  text-align: center;
  padding-bottom: 70px;
  height: auto 140%;
  

  @media (min-width: 600px) {
    height: 100%;
  } 

`;

