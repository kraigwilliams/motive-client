import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom'

export const Thought = styled.div`
  border: 2px solid ${colors.lightblue};
  padding: 10px 20px 10px 20px;
  color: ${colors.offwhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
  border-radius: 30px;
  max-width: 70%;
  
  :hover {
    box-shadow: 0px 2px 5px 3px rgba(0,0,0,0.50);
  }
`;

export const ThoughtTitle = styled(Link)`
  color: ${colors.offwhite};
  font-size: 16px;
  text-decoration: none;
`;
