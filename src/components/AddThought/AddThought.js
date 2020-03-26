import React, { Component } from 'react';
import {FormButton} from '../Button/Button';
import { FormWrapper, FormTitle, FormLabel, FormInput, Dropdown, FormTextarea} from '../Form/Form'
import {PageWrapper} from '../constants'

export default class AddThought extends Component {

  render() {
    return (
      <PageWrapper padding='40px 0'>
      
        <FormWrapper padding='50px'>
          <FormTitle>
            Create a Thought
          </FormTitle>
          
          <FormLabel>
            Title
          </FormLabel>
          <FormInput />

          <FormLabel>
            Type
          </FormLabel>
          <Dropdown />

          <FormLabel>
            Topic
          </FormLabel>
          <Dropdown />

          <FormLabel>
            Content
          </FormLabel>
          <FormTextarea />

          <FormButton type='submit'>
            Submit
          </FormButton>

        </FormWrapper>
      </PageWrapper>
    );
  }
}

