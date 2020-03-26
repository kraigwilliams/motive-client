import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, CommentWrapper, CommentHeader } from './Thought.style';
// import Button from '../Button/Button';
// import { colors } from '../constants'

export default class Thought extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: [],
      value: 'Write your Thought here!',
      currentThought : {}
    }
  }

  componentDidMount() {
    const thoughtId = this.props.match.params.thought_id
    const authToken = TokenService.getAuthToken()

    ContentService.getThisThought(thoughtId, authToken)
      .then((thought) => {
        this.setState({
          currentThought: thought
        })
      })



    // await ContentService.getTopics()
    // .then(topics => {
    //   this.setState({ topics })
    // })

    // await ContentService.getThoughts()
    // .then(thoughts => {
    //   this.setState({ thoughts })
    // })
  }
  
  render() {
    // const { currentThought } = this.state;
   
    return(
     
      <ThoughtWrapper>
          <ThoughtHeader>
            {/* {currentThought.thought_title} */}
          </ThoughtHeader>

         <ContentWrapper>
           
            <ThoughtTextarea 
              // value={currentThought.thought_content}
              // onChange={this.handleChange}
            />
          </ContentWrapper>
          <CommentWrapper>
            <CommentHeader>
              Comments
            </CommentHeader>
          </CommentWrapper>

    </ThoughtWrapper >
   
    )
  }
}