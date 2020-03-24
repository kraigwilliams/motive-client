import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='Header_nav'>
        <span className='Header_nav User'>
          {this.context.user.name}
        </span>
        <nav className='Logout_nav'>
          <Link
            className='Header_nav Logout'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className='Header_nav'>
        <Link to='/login' className='Header_nav Login'>Login</Link>
        {' '}
        <Link to='/register' className='Header_nav Signup'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className='Header'>
        <h1 className='Header_link'>
          <Link to='/' className='Header_link'>
            MM
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header