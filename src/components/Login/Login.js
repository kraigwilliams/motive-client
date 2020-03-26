import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import {Required, FormLabel, FormInput, FormTitle, FormWrapper, LoginWrapper } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import {FormButton} from '../Button/Button'



export default class Login extends Component {
  static contextType = UserContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  state ={ error: null }

  firstInput = React.createRef()


  handleLoginSuccess = () => {
    console.log('handle log in success firing');
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  hanldeSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target 

    this.setState({error: null})

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
    .then(res => {
      username.value = ''
      password.value = ''
      this.context.processLogin(res.authToken)
      this.handleLoginSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state;
    return(
      <LoginWrapper>
        
        <FormWrapper onSubmit={this.hanldeSubmit}>
          <div>
            {error && <p>{error}</p>}
          </div>
          <FormTitle>
            Login
          </FormTitle>

          <FormLabel htmlFor='login-username-input'>
            Username 
          </FormLabel>
          <FormInput 
            placeholder='john_doe'
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            aria-label="Enter your username"
            aria-required="true"
            required
          /><Required />

          <FormLabel htmlFor='login-password-input'>
            Password
          </FormLabel>
          <FormInput 
            type='password'
            placeholder='password'
            id='login-password-input'
            name='password'
            aria-label="Enter your password"
            aria-required="true"
            required
          /><Required />

          <FormButton type='submit'>
            Login
          </FormButton>
      </FormWrapper >
      
    </LoginWrapper>
    )
  }
}