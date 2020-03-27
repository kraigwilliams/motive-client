import React, { Component } from 'react';
import ContentService from '../../services/content-service'
import {FormButton} from '../Button/Button';
import { FormWrapper, FormTitle, FormLabel, FormInput, Dropdown, FormTextarea} from '../Form/Form'
import {PageWrapper} from '../constants'

export default class AddThought extends Component {

  constructor(props){
    super(props)
    this.state = {
      availTopics: []
    }
  }

  async componentDidMount() {
    const availTopics = await ContentService.getTopics()
    if(availTopics) {
      this.setState({
        availTopics
      })
    }
  }


  handleSubmit = ev => {
    ev.preventDefault()
    const { title, content } = ev.target;
    ContentService.postThought(
      title.value,
      content.value,
      // topic.value
    )
    .then(thought => {
      const thoughtId = thought.id;
      this.props.history.push(`thoughts/${thoughtId}`)
    })
  }

  render() {
    return (
      <PageWrapper padding='40px 0'>
      
        <FormWrapper padding='50px' onSubmit={this.handleSubmit}>
          <FormTitle>
            Create a Thought
          </FormTitle>
          
          <FormLabel>
            Title
          </FormLabel>
          <FormInput 
          id='thought-title'
          name='title'
          aria-label="Enter title of this thought"
          aria-required="true"
          required
          />

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
          <FormTextarea 
          id='thought-content'
          name='content'
          aria-label="Create the content of this thought"
          aria-required="true"
          required
          
          />

          <FormButton type='submit'>
            Submit
          </FormButton>

        </FormWrapper>
      </PageWrapper>
    );
  }
}

