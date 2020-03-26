import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components';
import { colors } from '../constants'

const DesktopNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: ${colors.darkgrey};
  color: ${colors.white};

  .nav-links{
    margin-left: 20px;
  @media screen and (max-width: 768px) {
      display: none;
    }
  }
  
  .ul {
    display:flex;
    flex-direction: row;
  }
`;

// const MobileButton = styled.button`
//   background: transparent;
//   border: none;
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

const DesktopNavBar = (props) => {
  return (
    <DesktopNav>
      
      <Navigation direction='row' marginLeft='25px'/>

      {/* <MobileButton type='button' onClick={props.toggleMobileNav}>
        Icon
      </MobileButton> */}
    </DesktopNav>
  )
}

export default DesktopNavBar;