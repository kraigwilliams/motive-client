import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../constants'


const NavLinks = styled.ul`
  list-style: none;
  /* width: 35vw; */
  color: ${props => props.color ? props.color : colors.white};
  align-items: center;
  justify-content:flex-end;
  margin-right: 0px;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  padding: 0;
`;

const NavItem = styled(Link)`
  color: ${props => props.color ? props.color : colors.white};
  text-decoration: none;
  margin-right: 0px;
  font-size: 16px;
  margin-left: ${props => props ? props.marginLeft : '0px'};
  :hover{
    cursor: pointer;
  }
`;

const Navigation = (props) => {
  return (
    <NavLinks direction={props.direction} color={props.color}>
        <li className='nav-links' color={props.color}>
          <NavItem to='/'>
            About
          </NavItem>
        </li>
        

        <li className='nav-links' color={props.color}>
          <NavItem to='/dashboard'>
            Dashboard
          </NavItem>
        </li>

        <li className='nav-links' color={props.color}>
          <NavItem to='/connections'>
            Connections
          </NavItem>
        </li>
      </NavLinks>
  )
}

export default Navigation;