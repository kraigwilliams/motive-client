import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, CommentWrapper, CommentHeader, StyledDeleteDiv } from './Thought.style';
import {FormButton} from '../Button/Button';
import { colors } from '../constants'
import { DeleteButton, ConfirmDeleteButton } from '../Button/Button';
// import { colors } from '../constants'

export default class Thought extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: [],
      value: 'Write your Thought here!',
      currentThought : {},
      editted: false, 
      deleteDiv: true,
    }
  }

  async componentDidMount() {
    const thoughtId = this.props.match.params.thought_id
    const authToken = TokenService.getAuthToken()


    const currentThought = await ContentService.getThisThought(thoughtId, authToken)
    console.log(currentThought, 'current thought')
    this.setState({
      currentThought
    })
    
  }

  handleChange() {
    this.setState({
      editted: true
    })
  }

  toggleDeleteDiv = () => {
    this.setState({
      deleteDiv: !this.state.deleteDiv
    })
  }



  async handleEdit(ev){
    ev.preventDefault()
    console.log('button fired')
    // const { title, content } = ev.target;
    // const topicId = this.props.match.params.topic_id
    // const authToken = TokenService.getAuthToken()
    // const dataToUpdate = {
    //   thought_title: title,
    //   thought_content: content
    // }
    // const currentThought = await ContentService.saveThoughtEdit({
    //   topicId,
    //   authToken,
    //   dataToupdate
    // })
    // this.setState({
    //   currentThought
    // })
  }
  
  handleDelete = () => {
    console.log('firing!')
    const thoughtId = this.props.match.params.thought_id
    ContentService.deleteThought(thoughtId)
    this.props.history.goBack()
  }


  
  render() {
    const { currentThought } = this.state;

  
    return(
     
      <ThoughtWrapper>
          
        <ContentWrapper 
          onSubmit={this.handleEdit} 
          onChange={this.handleChange.bind(this)}
        >
          <ThoughtHeader type='text'
            name='title'
            defaultValue={currentThought.thought_title} 
            // defaultValue='Jordan'
          />
          
          <ThoughtTextarea 
            name='content'
            defaultValue={currentThought.thought_content}
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

          <DeleteButton type='button' onClick={this.toggleDeleteDiv} />
          
          {!this.state.deleteDiv &&
            <StyledDeleteDiv> Delete Thought?
              <ConfirmDeleteButton type='button' onClick={() => {this.handleDelete()}} >Yes </ConfirmDeleteButton>
            </StyledDeleteDiv>
          }
          
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