import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import config from '../../config.js'
import TokenService from '../../services/token-service'
import { colors, PageWrapper } from '../constants'
import CondensedTopic from '../CondensedTopic/CondensedTopic';
import CondensedThought from '../CondensedThought/CondensedThought'

import {DBHeader, Section, ContentWrapper } from './Dashboard.style'


class Dashboard extends Component {
  static contextType = UserContext;


  render() {

    return (
      <PageWrapper>
        <header>
          <DBHeader>
          {this.context.user.name}'s  Motive
          </DBHeader>
        </header>
        <ContentWrapper>
          <Section>
            <h2 style={{color: colors.white}}>
              Topics
            </h2>
            <CondensedTopic 
              title='Coronavirus'
              count='3'
            />
          </Section>
          <Section>
            <h2 style={{color: colors.white}}>
              Thoughts
            </h2>
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