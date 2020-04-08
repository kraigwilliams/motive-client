import React, { Component } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext.js";
import Burger from "./Burger";
import { NavWrapper, Logo, MenuLink, MobileButton } from "./NavBar.style";
import { ReactComponent as FokulLogo } from "./FOLKUL.svg";

class NavBar extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false,
    };
  }

  toggleMobileNavBar = () => {
    this.setState({
      mobileNav: !this.state.mobileNav,
    });
  };

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="logged-in">
        <DesktopNavBar />

        <MenuLink onClick={this.handleLogoutClick} to="/login">
          Logout
        </MenuLink>

        <MobileButton type="button" onClick={this.toggleMobileNavBar}>
          <Burger open={this.state.mobileNav} />
        </MobileButton>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div style={{ alignSelf: "center" }}>
        <MenuLink to="/login">Login</MenuLink>{" "}
        <MenuLink to="/signup">Sign up</MenuLink>
      </div>
    );
  }

  render() {
    return (
      <>
        <NavWrapper>
          <Logo to="/">
            <FokulLogo
              aria-label="Folkul logo, click to go to landing page"
              className="logo"
              style={{ fill: "white", width: "100px" }}
            />
          </Logo>

          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}

          {this.state.mobileNav && TokenService.hasAuthToken() ? (
            <MobileNavBar displayMobileNavBar={this.state.mobileNav} />
          ) : null}
        </NavWrapper>
      </>
    );
  }
}

export default NavBar;
