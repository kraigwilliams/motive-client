import styled from 'styled-components'
import { colors } from '../constants'


export const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const TopicHeader = styled.h1`
  text-align: center;
  padding: 30px;
  color: ${colors.white};
  text-align: left;

  @media (min-width: 600px) {
    text-align: center;
 
  } 
`;

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: fit-content;
`;

export const SortLabel = styled.h3`
  padding-bottom: 5px;
  color: ${colors.coral};
  margin-bottom: 5px;
  margin-left: 70%;
  margin: auto;
  font-size: 16px;

  @media (min-width: 600px) {
      margin-right: auto;
      margin-bottom: 10px;
  } 
`;

export const SortSelectDropdown = styled.select`
  background: transparent;
  font-size: 16px;
  color: ${colors.white};
  /* margin-bottom: 30px; */

  > option {
    font-size: 16px;
  }
 

  @media (min-width: 600px) {
    min-width: 30%;
    margin-left: auto;
    margin-right: auto;
  } 
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  padding: 30px;
  margin: 0;
  height: 100vh;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 30px;
  }

  @media (min-width: 700px) {
   
  } 
`;

