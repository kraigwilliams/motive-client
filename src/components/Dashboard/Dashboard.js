import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ContentService from '../../services/content-service'
import { colors, PageWrapper } from '../constants'
import CondensedTopic from '../CondensedTopic/CondensedTopic';
import CondensedThought from '../CondensedThought/CondensedThought'

import {DBHeader, Section, ContentWrapper } from './Dashboard.style'


class Dashboard extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: []
    }
  }

  //make get request to get all thoughts and topics for that user 
componentDidMount() {
  ContentService.getTopics()
  .then(topics => {
    this.setState({ topics })
  })

  ContentService.getThoughts()
  .then(thoughts => {
    this.setState({ thoughts })
  })

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
            <h2 style={{color: colors.white}}>
              Topics
            </h2>

              {/* {topics.map(topic => {
                return <CondensedTopic 
                id={topic.id}
                title={topic.topic_title}
                count={topic.count}
              />
              })} */}

              <CondensedTopic 
                title='Coronavirus'
                count='3'
              />
            
          </Section>
          <Section>
            <h2 style={{color: colors.white}}>
              Thoughts
            </h2>
              {/* {thoughts.map(thought => {
                return <CondensedThought 
                id={thought.id}
                title={thought.thought_title}
              />
              })} */}

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