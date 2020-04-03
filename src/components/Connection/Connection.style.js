import styled from 'styled-components'
import { colors } from '../constants'

export const ConnectionDiv = styled.div`
  
  color: ${colors.offwhite};
  display: flex;
  flex-direction: row;
  text-align: center;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  .alert-appear {
    opacity: 1;
    transition: all 250ms linear;
  }

  .alert-exit {
    opacity: 0;
    transition: all 250ms linear;
  }
`;

export const ConnectionName = styled.p`
  color: ${colors.offwhite};
  text-decoration: none;
  line-height: 2.5;
  border-bottom: 1px solid ${colors.darkergrey};
  display: flex;

  .connection-details{
    display: flex;
    font-size: 14px;
    align-items: center;
    color: ${colors.blue};
  }

  .connection-fullname {
    display: flex;
    font-size: 16px;
    margin-right: 10px;
    color: ${colors.offwhite};
  }

  @media (min-width: 600px) {
    text-align: center;
    font-size: 25px;
  } 
`;