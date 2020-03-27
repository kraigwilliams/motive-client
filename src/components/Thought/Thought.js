import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, CommentWrapper, CommentHeader } from './Thought.style';
import {FormButton} from '../Button/Button';
import { colors } from '../constants'
import {DeleteButton} from '../Button/Button';
// import { colors } from '../constants'


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
    ContentService.deleteThought()
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
          
        </ContentWrapper>

        <CommentWrapper>
          <CommentHeader>
            Comments
          </CommentHeader>


          {/* Map through existing comments to render here */}

          {/* Input to write a new comment here */}
          {/* Add comment button */}
        </CommentWrapper>
      <DeleteButton type='submit'></DeleteButton>
      </ThoughtWrapper>

    )
  }
}