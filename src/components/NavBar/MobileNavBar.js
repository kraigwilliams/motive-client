import React from "react";
import styled from "styled-components";
import { colors } from "../constants";
import Navigation from "./Navigation";

const MobileNav = styled.nav`
  width: fit-content;
  margin: 0px;
  padding: 10px;
  background: ${colors.blue};
  color: ${colors.darkergrey};
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
    <MobileNav
      onClick={props.toggleNav}
      displayMobileNavBar={props.displayMobileNavBar}
    >
      <Navigation
        direction="column"
        color={colors.white}
        linkmargin="50px 0px"
      />
    </MobileNav>
  );
};

export default MobileNavBar;
