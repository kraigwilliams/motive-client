import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, CommentWrapper, CommentHeader } from './Thought.style';
import {FormButton} from '../Button/Button';
import { colors } from '../constants'

export default class Thought extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: [],
      value: 'Write your Thought here!',
      currentThought : {},
      editted: false
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
  }

  handleChange() {
    this.setState({
      editted: true
    })
  }

  async handleEdit(ev){
    ev.preventDefault()
    console.log('button fired')
    // const { title, content } = ev.target;
    // const currentThought = await ContentService.saveThoughtEdit({
    //   thought_title: title,
    //   thought_content: content
    // })
    // this.setState({
    //   currentThought
    // })
  }
  
  render() {
    // const { currentThought } = this.state;
    return(
     
      <ThoughtWrapper>
          
        <ContentWrapper 
          onSubmit={this.handleEdit} 
          onChange={this.handleChange.bind(this)}
        >
          <ThoughtHeader type='text'
            // value={currentThought.thought_title} 
            defaultValue='Jordan'
            name='title'
            
          />
          
          <ThoughtTextarea 
            name='content'
            // value={currentThought.thought_content}
            // onChange={this.handleChange}
          />

          <div style={{width: 'fit-content', margin:'auto', padding: '5px'}}>
            <FormButton 
              className='edit-button'
              type='submit' 
              color={colors.darkgrey}
              disabled={!this.state.editted}
            >
              save
            </FormButton>
          </div>
          
        </ContentWrapper>

        <CommentWrapper>
          <CommentHeader>
            Comments
          </CommentHeader>

          {/* Map through existing comments to render here */}

          {/* Input to write a new comment here */}
          {/* Add comment button */}
        </CommentWrapper>
      </ThoughtWrapper>
    )
  }
}