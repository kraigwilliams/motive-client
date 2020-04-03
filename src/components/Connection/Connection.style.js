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