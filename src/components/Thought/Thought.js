import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, CommentWrapper, CommentHeader } from './Thought.style';
import Button from '../Button/Button';
// import { colors } from '../constants'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: [],
      value: 'Write your Thought here!',
    }
  }

  async componentDidMount() {
    await ContentService.getTopics()
    .then(topics => {
      this.setState({ topics })
    })

    await ContentService.getThoughts()
    .then(thoughts => {
      this.setState({ thoughts })
    })
  }
  
  render() {
    const { topics, thoughts } = this.state;
    console.log(thoughts.thought_content)
   
    return(
     
      <ThoughtWrapper>
          <ThoughtHeader>
            {thoughts.thought_title}
          </ThoughtHeader>

         <ContentWrapper>
           
            <ThoughtTextarea 
              value={thoughts.thought_content}
              onChange={this.handleChange}
            />
          </ContentWrapper>
          <CommentWrapper>
            < CommentHeader>
              Comments
            </CommentHeader>
          </CommentWrapper>

    </ThoughtWrapper >
   
    )
  }
}

