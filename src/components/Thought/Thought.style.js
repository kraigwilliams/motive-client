import styled from 'styled-components'
import { colors } from '../constants'


export const ThoughtWrapper = styled.div`
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const ThoughtHeader = styled.h2`
  
  padding: 30px;
  color: ${colors.white};
  text-align: left;

  @media (min-width: 600px) {
    text-align: center;
  } 
`;

export const ContentWrapper = styled.div`
  padding: 30px;
  
`;

export const ThoughtTextarea = styled.textarea`
  
  padding: 10px;
  color: ${colors.slategrey};
  font-size: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  height: 400px;
  opacity: 70%;
  
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 500px;
  } 
`;

export const CommentWrapper = styled.div`
  
  background-color: ${colors.darkgrey};
  height: 50vh;
  padding: 15px;

  @media (min-width: 600px) {
    height: 30vh;
  } 
`;

export const CommentHeader = styled.h3`
  color: ${colors.coral};
  text-align: left;

  @media (min-width: 600px) {
    text-align: center;
    height: 30vh;
  } 
`;
