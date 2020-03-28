import React, { Component } from 'react'
import ContentContext from './../../contexts/ContentContext'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ThoughtDropdown,  ContentWrapper, CommentWrapper, CommentHeader } from './Thought.style';
import {DeleteButton} from '../Button/Button';
import {FormButton} from '../Button/Button';
import { colors } from '../constants'

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
      editted: false
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

  async handleEdit(ev){
    ev.preventDefault()
    console.log('edit button fired')
    const { title, content } = ev.target;
    const { thoughtId } = this.state
    const authToken = TokenService.getAuthToken()
    console.log(authToken, 'authToken in handleEdit')
    const dataToUpdate = {
      thought_title: title.value,
      thought_content: content.value
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
            // defaultValue='Jordan'
          />
          
          <ThoughtTextarea 
            name='content'
            defaultValue={currentThought.thought_content}
          />

          <ThoughtDropdown
            name='content'
            value={topicForThought ? topicForThought : ''}
          >
            {options}
          </ThoughtDropdown>

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
          <DeleteButton type='button' to='/add-topic'></DeleteButton>
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