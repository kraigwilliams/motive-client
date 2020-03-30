import styled from 'styled-components'
import { colors } from '../constants'


export const ThoughtWrapper = styled.div`
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 0;
  min-height: 100vh;
  
`;

export const ThoughtHeader = styled.textarea`
  padding: 30px 10px 10px 10px;
  color: ${colors.white};
  vertical-align: middle;
  text-align: center;
  border: none;
  background: transparent;
  font-size: 20px;
  width: 100%;
  align-self: center;
  justify-self: center;
  margin: 10px auto 20px auto;
  word-wrap: break-word;
  flex-wrap: wrap;
  height: fit-content;
  @media (min-width: 600px) {
    text-align: center;
    font-size: 22px;
    border: none;
    height: fit-content;
    margin: 0px auto 0px auto;
  } 
  @media (min-width: 500px) {
    text-align: center;
    font-size: 22px;
    border: none;
    height: fit-content;
    margin: 0px auto 0px auto;
  } 
`;

export const ContentWrapper = styled.form`
  padding: 20px;
  justify-content: center;
  text-align: center;
  margin: auto;
  
  .edit-button {
    justify-self: center;
    margin-bottom: 20px;
  }
`;

export const ThoughtTextarea = styled.textarea`
  padding: 40px;
  color: ${colors.slategrey};
  font-size: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
  opacity: 70%;
  
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 500px;
  } 
`;

export const CommentWrapper = styled.div`
  background-color: ${colors.darkgrey};
  height: 50vh;
  padding: 15px;
  justify-content: center;
  align-content: center;
  align-items: center;

  .edit-wrapper {
    margin: auto;
  }

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

export const StyledDeleteDiv = styled.div`
  text-align: center;
  border-radius: 5px;
  padding: 25px; 
  background-color: ${colors.darkgrey};
  color: ${colors.offwhite};
  margin-left: auto;
  margin-right: auto;
  width: 300px;

  @media (min-width: 600px) {
  
  } 
`;

export const ThoughtDropdown = styled.select`
  background: transparent;
  font-size: 16px;
  color: ${colors.white};
  /* width: 40%; */
  padding: 20px 30px;
  margin: 40px auto;
  text-align: center;
  width: 100%;

  > span {
    text-align: center;
  }

  @media (min-width: 700px) {
    /* width: 60%; */
    margin-top: 40px;
  } 
`;

export const SuccessfulSave = styled.div`
  background: transparent;
  border: 1px solid ${colors.teal};
  font-size: 16px;
  text-align: center;
  margin: auto;
  padding: 10px;
  color: ${colors.teal};

`;

export const Container = styled.div`
  width: fit-content; 
  margin:auto; 
  padding: 5px 5px 30px 5px; 
  text-align: center; 
  display: flex;
  flex-direction: column;

.alert-appear {
  opacity: 1;
  transition: all 250ms linear;
}

.alert-exit {
  opacity: 0;
  transition: all 250ms linear;
}
`;

