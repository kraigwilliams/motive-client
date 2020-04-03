import React, { Component } from 'react'
import ContentContext from './../../contexts/ContentContext'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ TopicHeader, TopicWrapper, ContentWrapper, 
  SortWrapper, SortSelectDropdown, SortLabel, StyledDeleteDiv } from './Topic.style';
import CondensedThought from '../CondensedThought/CondensedThought'
import {AddButton, GoBack} from '../Button/Button'
import { DeleteButton, ConfirmDeleteButton, ShareButton } from '../Button/Button';
import { colors } from '../constants'

export default class Topic extends Component {
  static contextType = ContentContext;

  constructor(props) {
    super(props)
    this.state = {
      currentTopic: {},
      currentThoughts: [], 
      deleteDiv: true,
      topicId: null,

    }
  }

  async componentDidMount() {
    //get the topic id and auth token of the user 
    const topicId = await this.props.match.params.topic_id
    this.setState({
      topicId
    })
    localStorage.setItem('topic', topicId);
    this.context.setTopicForAddThought(topicId)
    this.context.setTopicForThought(topicId)
    const authToken = TokenService.getAuthToken()

    //get the current topic from the server and set it in state 
    const currentTopic = await ContentService.getThisTopic(topicId, authToken);

    this.setState({ currentTopic })

    //get the thoughts that belong to the current topic and set it in state 
    const currentThoughts = await ContentService.getThoughtsInTopic(topicId, authToken)
    if(currentThoughts) {
      this.setState({ currentThoughts })
    }
  }


  toggleDeleteDiv = () => {
    this.setState({
      deleteDiv: !this.state.deleteDiv
    })
  }

  handleDelete = () => {
    ContentService.deleteTopic(this.state.topicId);
    this.props.history.goBack();
  }

  handleGoBack = ev => {
    this.context.setTopicForAddThought(null)
    this.context.setTopicForThought(0)
    this.props.history.goBack()
  }

  render() {
    const { currentTopic, currentThoughts, topicId } = this.state;
    return(
      <TopicWrapper>
        <div style={{display: 'flex', overflow:'hidden'}}>
          <GoBack 
            type='reset' 
            onClick={() => this.handleGoBack()}
            margin='30px 0px 22px 30px'
          />
          <TopicHeader>
            <h1 style={{marginBottom: '20px'}}>{currentTopic.topic_title}</h1>
            <p style={{color: colors.darkgrey}}>{currentTopic.topic_content}</p>
          </TopicHeader>
          <div style={{width: '66.97px'}}></div>

        </div>

        <ShareButton 
            type='button' 
            to={`/${topicId}/share`}
        />


          {currentThoughts.length < 1? <DeleteButton type='button' onClick={this.toggleDeleteDiv.bind(this)} /> : ''}
            

          <ContentWrapper>

            <div className='top'>
            <SortWrapper>
                <SortLabel>Sort</SortLabel>
                <SortSelectDropdown>
                  <option value='A-Z'>A-Z</option>
                  <option value='Most Recent'>Most Recent</option>
                </SortSelectDropdown>
              </SortWrapper>

              <AddButton type='button' to='/add-thought'/>
            </div>
            
            {
              currentThoughts.map((thought, idx) => {
                return <CondensedThought 
                  key={idx}
                  id={thought.id}
                  title={thought.thought_title}
                  topic={topicId}
                />
              })
            }


          {/* <DeleteButton type='button' onClick={this.toggleDeleteDiv.bind(this)} /> */}

          {!this.state.deleteDiv &&
              <StyledDeleteDiv> Delete Topic?
                <ConfirmDeleteButton type='button' onClick={this.handleDelete}>Yes</ConfirmDeleteButton>
              </StyledDeleteDiv>
          }


           </ContentWrapper>
      </TopicWrapper>
    );
  }
}