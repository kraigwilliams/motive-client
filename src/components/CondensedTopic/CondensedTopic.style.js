import styled from 'styled-components'
import { colors } from '../constants'
import { Link } from 'react-router-dom';

export const Topic = styled.div`
  border: 2px solid ${colors.blue};
  padding: 10px 20px 10px 20px;
  color: ${colors.offwhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
  border-radius: 10px;
  max-width: 70%;

  :hover {
    box-shadow: 0px 2px 5px 3px rgba(0,0,0,0.50);
  }
`;

export const TopicTitle = styled(Link)`
  color: ${colors.offwhite};
  font-size: 16px;
  text-decoration: none;

  
`;

export const TopicCount = styled.p`
  color: ${colors.offwhite};
  font-size: 16px;
`;