import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import ContentContext from './../../contexts/ContentContext'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import { CommentWrapper, CommentHeader, Comment, CommentsWrap, Reply } from '../Comment/Comment'
import{ ThoughtHeader, ThoughtWrapper, ThoughtTextarea, ContentWrapper, ThoughtDropdown, StyledDeleteDiv, SuccessfulSave, Container } from './Thought.style';
import { FormButton, GoBack } from '../Button/Button';
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
      topicSelected: null,
      successfulSave: false
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

  handleTopicChange = ev => {
    ev.preventDefault()
    const topicSelected = ev.target.value;
    this.setState({
      topicSelected
    })
  }

  async handleEdit(ev){
    ev.preventDefault()
    const { title, content, topic } = ev.target;
    const { thoughtId } = this.state
    const authToken = TokenService.getAuthToken()
    const thought_title = title.value;
    const thought_content = content.value;
    const thought_topic = topic.value;

    //setting variable to result of pathc request made to server
    const currentThought = await ContentService.saveThoughtEdit(
      thoughtId,
      authToken,
      thought_title,
      thought_content,
      thought_topic
    )

    this.setState({
      currentThought,
      editted: false,
      successfulSave: true
    })

    setTimeout(() => {
      this.setState({
        successfulSave: false
      });
    }, 2000);
  }
  
  handleDelete = () => {
    const thoughtId = this.props.match.params.thought_id
    ContentService.deleteThought(thoughtId)
    this.props.history.goBack()
  }

  render() {
    const { currentThought, topics, successfulSave } = this.state;
    const { topicForThought } = this.context;

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
          <div style={{display: 'flex',  width: '100%'}}>
          <GoBack 
            type='reset' 
            onClick={() => this.props.history.goBack()}
            margin='30px 0px 30px 10px'
          />
          <ThoughtHeader type='text'
            name='title'
            defaultValue={currentThought.thought_title} 
          />
          <div style={{width: '66.97px'}}></div>

          </div>
          <ThoughtTextarea 
            name='content'
            defaultValue={currentThought.thought_content}
          />

          <Container style={{width: 'fit-content', margin:'auto', padding: '5px', textAlign: 'center', display:'flex', flexDirection: 'column'}}>
            <ThoughtDropdown
              name='topic'
              value={this.state.topicSelected || (topicForThought ? topicForThought : 0)}
              onChange={this.handleTopicChange.bind(this)}
            >
              <option value={0}> -- Not in a Topic -- </option>
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

              <CSSTransition
                in={successfulSave}
                timeout={300}
                classNames='alert'
                unmountOnExit
                appear
              >            
                <SuccessfulSave>
                  {currentThought.thought_title} saved.
                </SuccessfulSave>

              </CSSTransition>
            </Container>

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
            
          
          <CommentsWrap>
            {/* Map through existing comments to render here */}
            <Comment />
            <Comment />
            <Comment />
          </CommentsWrap>
          
          {/* Input to write a new comment here */}
            <Reply />
          {/* Add comment button */}

        </CommentWrapper>
      </ThoughtWrapper>
    )
  }
}