import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom'

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
  font-size: 18px;
  text-decoration: none;
  line-height: 2.5;
  border-bottom: 1px solid ${colors.darkergrey};

  @media (min-width: 600px) {
    text-align: center;
    font-size: 25px;
  } 
`;