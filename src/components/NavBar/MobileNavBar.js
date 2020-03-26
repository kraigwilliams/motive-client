import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'
import Navigation from './Navigation'

const MobileNav = styled.nav`
  width: fit-content;
  margin: 0px;
  padding: 10px;
  background: ${colors.teal};
  color: ${colors.darkgrey};
  align-self: flex-end;
  position: absolute;
  top: 60px;
  right: 0;

  @media screen and (min-width: 768px) {
      display: none;
    }
  
`;


const MobileNavBar = (props) => {
  return (
    <MobileNav displayMobileNavBar={props.displayMobileNavBar}>
      <Navigation direction='column' color={colors.darkgrey}/>
    </MobileNav>
    
  )
}

export default MobileNavBar;