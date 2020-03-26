import React, { Component } from 'react';
import {FormButton} from '../Button/Button';
import { FormWrapper, FormTitle, FormLabel, FormInput, Dropdown, Required} from '../Form/Form'
import {PageWrapper} from '../constants'
import ContentService from '../../services/content-service'


export default class AddTopic extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    const { title, description } = ev.target;
    ContentService.postTopic(
      title.value,
      description.value,
    )
    .then(topic => {
      console.log(topic, '!!!');
      const topicId = topic.id;
      this.props.history.push(`topics/${topicId}`)
    })
  }


  render() {
    return (
      <PageWrapper padding='40px 0'>

        <FormWrapper padding='50px' onSubmit={this.handleSubmit}>
          <FormTitle>
            Create a Topic
          </FormTitle>

          <FormLabel htmlFor='topic-title'>
            Title <Required />
          </FormLabel>
          <FormInput 
            id='topic-title'
            name='title'
            aria-label="Enter title of this topic"
            aria-required="true"
            required
          />

          <FormLabel htmlFor='topic-description'>
            Description
          </FormLabel>
          <FormInput 
            id='topic-description'
            name='description'
            aria-label="Enter description of this topic"
          />

          {/* <FormLabel htmlFor='topic-thoughts'>
            Add Thoughts to Topic
          </FormLabel>
          <Dropdown 
            id='topic-thoughts'
            name='thoughts'
            aria-label="Select any exisiting thoughts that belong within this topic"
          />

          <FormLabel htmlFor='topic-connects'>
            Add Connections to Topic
          </FormLabel>
          <Dropdown 
            id='topic-connects'
            name='connects'
            aria-label="Select any connections you wish to share this topic with"
          /> */}

          <FormButton type='submit'>
            Submit
          </FormButton>

        </FormWrapper>
      </PageWrapper>
    );
  }
}

