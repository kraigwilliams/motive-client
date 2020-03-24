import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Required, FormLabel, FormInput, FormTitle } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import {FormButton} from '../Button/Button'
import { FormWrapper, SignUpWrapper } from './SignUp.style'


export default class SignUp extends Component {
  render() {
    return(
      <SignUpWrapper>
        
        <FormWrapper>
          <FormTitle>
            Create an account
          </FormTitle>


          <FormLabel>
            First Name 
          </FormLabel>
          <FormInput placeholder='John'/>

          <FormLabel>
            Last Name 
          </FormLabel>
          <FormInput placeholder='Doe'/>

          <FormLabel>
            Username 
          </FormLabel>
          <FormInput placeholder='Jd#12345'/>

          <FormLabel>
            Password
          </FormLabel>
          <FormInput placeholder='password'/>

          <FormButton>
            Sign Up
          </FormButton>
      </FormWrapper >
      
    </SignUpWrapper>
    )
  }
}