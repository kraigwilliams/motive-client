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
      thoughts: []
    }
  }

  //make get request to get all thoughts and topics for the logged in user 
async componentDidMount() {
  const topics = await ContentService.getTopics()
  if (topics) {
    this.setState({ topics })
  }

  const thoughts = await ContentService.getThoughts()
  if (thoughts) {
    this.setState({ thoughts })
  }
}


  render() {
  const { topics, thoughts } = this.state;
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
                  return <CondensedTopic 
                  key={idx}
                  id={topic.id}
                  title={topic.topic_title}
                  count={topic.count}
                />
                })
              }
            
          </Section>
          <Section>
            <SectionTitle>
              <h2 style={{color: colors.white}}>
                Thoughts 
              </h2>
              <AddButton type='button' to='./add-thought'/>
            </SectionTitle>
            

              {thoughts.map((thought, idx) => {
                return <CondensedThought 
                key={idx}
                id={thought.id}
                title={thought.thought_title}
              />
              })}

            <CondensedThought 
              title='Meaning of Life'
            />
          </Section>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

export default Dashboard
