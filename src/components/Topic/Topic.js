import React, { Component } from 'react'
import ContentContext from './../../contexts/ContentContext'
import ContentService from '../../services/content-service'
import TokenService from '../../services/token-service'
import{ TopicHeader, TopicWrapper, ContentWrapper, 
  SortWrapper, SortSelectDropdown, SortLabel } from './Topic.style';
import CondensedThought from '../CondensedThought/CondensedThought'
import {AddButton} from '../Button/Button'

export default class Topic extends Component {
  static contextType = ContentContext;

  constructor(props) {
    super(props)
    this.state = {
      currentTopic: {},
      currentThoughts: [],
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
    const currentTopic = await ContentService.getThisTopic(topicId, authToken)
    this.setState({ currentTopic })

    //get the thoughts that belong to the current topic and set it in state 
    const currentThoughts = await ContentService.getThoughtsInTopic(topicId, authToken)
    console.log(currentThoughts, 'current thoughts')
    if(currentThoughts) {
      this.setState({ currentThoughts })
    }
  }

  render() {
    const { currentTopic, currentThoughts, topicId } = this.state;
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
                  topic={topicId}
                />
              })
            }
           </ContentWrapper>
      </TopicWrapper>
    );
  }
}