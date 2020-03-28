import React, { Component } from 'react'
import ContentContext from './../../contexts/ContentContext'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, CommentWrapper, CommentHeader, ThoughtDropdown, StyledDeleteDiv } from './Thought.style';
import {FormButton} from '../Button/Button';
import { colors } from '../constants'
import { DeleteButton, ConfirmDeleteButton } from '../Button/Button';

export default class Thought extends Component {
  static contextType = ContentContext;

  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: [],
      thoughtId: null,
      value: 'Write your Thought here!',
      currentThought : {},
      editted: false, 
      deleteDiv: true,
    }
  }

  async componentDidMount() {
    const thoughtId = this.props.match.params.thought_id
    this.setState({
      thoughtId
    })
    const authToken = TokenService.getAuthToken()


    const currentThought = await ContentService.getThisThought(thoughtId, authToken)
    this.setState({
      currentThought
    })
    
    const topics = await ContentService.getTopics()
    if(topics) {
      this.setState({
        topics
      })
    }
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
    console.log('edit button fired')
    const { title, content, topic } = ev.target;
    const { thoughtId } = this.state
    console.log(thoughtId, 'thought id')
    const authToken = TokenService.getAuthToken()
    console.log(authToken, 'authToken in handleEdit')
    const dataToUpdate = {
      thought_title: title.value,
      thought_content: content.value,
      thought_topic: topic.value
    }
    console.log(dataToUpdate, 'data to update');
    const currentThought = await ContentService.saveThoughtEdit({
      thoughtId,
      authToken,
      dataToUpdate
    })
    this.setState({
      currentThought
    })
  }

  handleDelete = () => {
    ContentService.deleteThought()
  }
  
  handleDelete = () => {
    console.log('firing!')
    const thoughtId = this.props.match.params.thought_id
    ContentService.deleteThought(thoughtId)
    this.props.history.goBack()
  }


  
  render() {
    const { currentThought, topics } = this.state;
    const { topicForThought } = this.context;
    console.log(topicForThought, 'topic from context')

    const options = topics.map((topic, idx )=> {
      return <option key={idx} value={topic.id}>
          {topic.topic_title}
          </option>
    })
    return(
     
      <ThoughtWrapper>
          
        <ContentWrapper 
          onSubmit={this.handleEdit.bind(this)} 
          onChange={this.handleChange.bind(this)}
        >
          <ThoughtHeader type='text'
            name='title'
            defaultValue={currentThought.thought_title} 
          />
          
          <ThoughtTextarea 
            name='content'
            defaultValue={currentThought.thought_content}
          />

          <div style={{width: 'fit-content', margin:'auto', padding: '5px', textAlign: 'center'}}>
            <ThoughtDropdown
              name='topic'
              value={topicForThought ? topicForThought : 0}
            >
              <option disabled selected value='0'> -- Not in a Topic -- </option>
              {options}
            </ThoughtDropdown>

            
              <FormButton 
                className='edit-button'
                type='submit' 
                color={colors.darkgrey}
                disabled={!this.state.editted}
                margintop='0px'
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