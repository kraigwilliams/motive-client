import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
// import config from '../../config.js'
// import TokenService from '../../services/token-service'
import ContentService from '../../services/content-service'
import { colors, PageWrapper } from '../constants'
import CondensedTopic from '../CondensedTopic/CondensedTopic';
import CondensedThought from '../CondensedThought/CondensedThought'
import { DBHeader, Section, ContentWrapper, SectionTitle } from './Dashboard.style'
import {AddButton} from '../Button/Button'

class Dashboard extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      allThoughts: [],
      freeThoughts: [],
    }
  }

  //make get request to get all thoughts and topics for the logged in user 
async componentDidMount() {
  const topics = await ContentService.getTopics()
  if (topics) {
    this.setState({ topics })
  }

  const allThoughts = await ContentService.getThoughts()
  if (allThoughts) {
    this.setState({ allThoughts })
  }

  const freeThoughts = allThoughts.filter(thought => thought.thought_topic === null)
  if(freeThoughts) {
    this.setState({
      freeThoughts
    })
  }
}

  countThoughtsForTopic(topicId){
    const thoughtsInTopic = this.state.allThoughts.filter(thought => thought.thought_topic === topicId)
    console.log(thoughtsInTopic, thoughtsInTopic.length)
    return thoughtsInTopic.length;
  }

  render() {
  const { topics, freeThoughts } = this.state;
  console.log(freeThoughts, 'freeThoughts in state');
    return (
      <PageWrapper>
        <header>
          <DBHeader>
          {this.context.user.username}'s  Motive
          </DBHeader>
        </header>
        <ContentWrapper>
          <Section>
            <SectionTitle>
              <h2 style={{color: colors.white}}>
                Topics
              </h2> 
              <AddButton type='button' to='./add-topic'/>
            </SectionTitle>

              {
                topics.map((topic, idx) => {
                  let thoughtCount = this.countThoughtsForTopic(topic.id)
                  return <CondensedTopic 
                  key={idx}
                  id={topic.id}
                  title={topic.topic_title}
                  count={thoughtCount}
                />
                })
              }
            
          </Section>
          <Section>
            <SectionTitle>
              <h2 style={{color: colors.white}}>
                Thoughts 
              </h2>
              <AddButton type='button' to='/add-thought'/>
            </SectionTitle>
            

              {
                freeThoughts.map((thought, idx) => {
                  return <CondensedThought 
                  key={idx}
                  id={thought.id}
                  title={thought.thought_title}

                />
                })
              }

            <CondensedThought 
              title='Meaning of Life'
              id='2089'
            />

          </Section>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

export default Dashboard
