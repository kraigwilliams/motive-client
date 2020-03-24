import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Required, FormLabel, FormInput, FormTitle, FormWrapper, LoginWrapper } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import {FormButton} from '../Button/Button'



export default class Login extends Component {
  render() {
    return(
      <LoginWrapper>
        
        <FormWrapper>
          <FormTitle>
            Login
          </FormTitle>

          <FormLabel>
            Username 
          </FormLabel>
          <FormInput placeholder='Jd#12345'/>

          <FormLabel>
            Password
          </FormLabel>
          <FormInput placeholder='password'/>

          <FormButton>
            Login
          </FormButton>
      </FormWrapper >
      
    </LoginWrapper>
    )
  }
}