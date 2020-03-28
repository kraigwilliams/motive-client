import React, { Component } from 'react';
import ContentContext from './../../contexts/ContentContext'
import ContentService from '../../services/content-service'
import {FormButton} from '../Button/Button';
import { FormWrapper, FormTitle, FormLabel, FormInput, Dropdown, FormTextarea} from '../Form/Form'
import {PageWrapper} from '../constants'


export default class AddThought extends Component {
  static contextType = ContentContext;
  constructor(props){
    super(props)
    this.state = {
      availTopics: [],
      topic: null,
      topicSelected: null
    }
  }

  async componentDidMount() {
    const availTopics = await ContentService.getTopics()
    if(availTopics) {
      this.setState({
        availTopics
      })
    }

    // const topicId = localStorage.getItem('topic')
    const topicId =  this.context.topicForAddThought;
    if(topicId){
      this.setState({
        topic: topicId
      })
    }
  }

  handleTopicChange = ev => {
    ev.preventDefault()
    const { topic } = ev.target;
    this.setState({
      topicSelected: topic
    })
  }


  handleSubmit = ev => {
    ev.preventDefault()
    const { title, content, topic } = ev.target;
    ContentService.postThought(
      title.value,
      content.value,
      topic.value
    )
    .then(thought => {
      localStorage.removeItem('topic');
      const thoughtId = thought.id;
      this.props.history.push(`thoughts/${thoughtId}`)
    })
  }

  render() {
    const { availTopics, topic } = this.state;
    const { topicForAddThought } = this.context;
    console.log(topicForAddThought, 'topic being passed to defaultValue')
    const options = availTopics.map((topic, idx )=> {
      return <option key={idx} value={topic.id}>
          {topic.topic_title}
        </option>
    })
    return (
      <PageWrapper padding='40px 0'>
      
        <FormWrapper padding='50px' onSubmit={this.handleSubmit}>
          <FormTitle>
            Create a Thought
          </FormTitle>
          
          <FormLabel htmlFor='thought-title'>
            Title
          </FormLabel>
          <FormInput 
          id='thought-title'
          name='title'
          aria-label="Enter title of this thought"
          aria-required="true"
          required
          />

          {/* <FormLabel>
            Type
          </FormLabel>
          <Dropdown /> */}

          <FormLabel htmlFor='thought-topic'>
            Topic
          </FormLabel>
          <Dropdown 
            id='thought-topic'
            name='topic'
            value={this.context.topicForAddThought ? this.context.topicForAddThought : 0}
            onChange={this.handleTopicChange.bind(this)}
            aria-label="You can select a topic to put this thought in"
          >
            <option disabled value={0}> -- Not in a Topic -- </option>
            {options}
          </Dropdown>

          <FormLabel htmlFor='thought-content'>
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

