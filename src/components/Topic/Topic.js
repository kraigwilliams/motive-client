import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ TopicHeader, TopicWrapper, ContentWrapper, 
  SortWrapper, SortSelectDropdown, SortLabel, StyledDeleteDiv } from './Topic.style';
import CondensedThought from '../CondensedThought/CondensedThought'
import {AddButton} from '../Button/Button'
import { DeleteButton, ConfirmDeleteButton } from '../Button/Button';
// import { colors, PageWrapper } from '../constants'

export default class Topic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTopic: {},
      currentThoughts: [], 
      deleteDiv: true,
    }
  }

  async componentDidMount() {
    //get the topic id and auth token of the user 
    const topicId = this.props.match.params.topic_id
    const authToken = TokenService.getAuthToken()

    //get the current topic from the server and set it in state 
    const currentTopic = await ContentService.getThisTopic(topicId, authToken)
    console.log(currentTopic, 'current topic from service')
    this.setState({ currentTopic })

    //get the thoughts that belong to the current topic and set it in state 
    const currentThoughts = await ContentService.getThoughtsInTopic(topicId, authToken)
    console.log(currentThoughts, 'current thoughts')
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
    return ContentService.deleteTopic();
  }


  render() {
    const { currentTopic, currentThoughts } = this.state;
    console.log(currentTopic, 'current topic')
    return(
      <TopicWrapper>
          <TopicHeader>
            {currentTopic.topic_title}
            {currentTopic.content}
          </TopicHeader>

          <ContentWrapper>

            <div className='top'>
              <AddButton type='button' to='/add-thought'/>

              <SortWrapper>
                <SortLabel>Sort</SortLabel>
                <SortSelectDropdown>
                  <option value='A-Z'>A-Z</option>
                  <option value='Most Recent'>Most Recent</option>
                </SortSelectDropdown>
              </SortWrapper>
            </div>
            
            {
              currentThoughts.map((thought, idx) => {
                return <CondensedThought 
                  key={idx}
                  id={thought.id}
                  title={thought.thought_title}
                />
              })
            }


          {currentThoughts.length < 1? <DeleteButton type='button' onClick={this.toggleDeleteDiv.bind(this)} /> : ''}

          {/* <DeleteButton type='button' onClick={this.toggleDeleteDiv.bind(this)} /> */}

          {!this.state.deleteDiv &&
              <StyledDeleteDiv> Delete Topic?
                <ConfirmDeleteButton type='button' onClick={this.deleteTopic}>Yes</ConfirmDeleteButton>
              </StyledDeleteDiv>
          }


           </ContentWrapper>
      </TopicWrapper>
    );
  }
}