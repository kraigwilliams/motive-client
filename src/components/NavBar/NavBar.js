import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext.js'
import Burger from './Burger'
import { NavWrapper, Logo, MenuLink, MobileButton, NavIcon } from './NavBar.style'

class NavBar extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props)
    this.state = {
      mobileNav: false
    }
  }

  toggleMobileNavBar = () => {
    this.setState({
      mobileNav: !this.state.mobileNav
    })
  }

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='logged-in'>

          <DesktopNavBar />

          <MenuLink
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </MenuLink>
          
          <MobileButton type='button' onClick={this.toggleMobileNavBar}>
            <Burger open={this.state.mobileNav}/>
          </MobileButton>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div>
        <MenuLink to='/login'>Login</MenuLink>
        {' '}
        <MenuLink to='/signup'>Sign up</MenuLink>
      </div>
    )
  }

  render() {
    return (
      <>
      <NavWrapper>
        <Logo to='/'>
            MM
        </Logo>
    
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

        {this.state.mobileNav && TokenService.hasAuthToken() 
          ? <MobileNavBar displayMobileNavBar={this.state.mobileNav}/> 
          : null}
      </NavWrapper>
      </>
    );
  }
}

export default NavBar