import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import { colors, PageWrapper } from '../constants'
import{ TopicHeader, TopicWrapper, ContentWrapper, SortSelectDropdown, SortLabel } from './Topic.style';
import CondensedThought from '../CondensedThought/CondensedThought'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      thoughts: []
    }
  }

  async componentDidMount() {
    await ContentService.getThoughts()
    .then(thoughts => {
      this.setState({ thoughts })
    })
  }

  render() {
    const { topics, thoughts } = this.state;

    return(
      <TopicWrapper>
          <TopicHeader>
            Hello
            {/* {topics.topic_title} */}
          </TopicHeader>

           {/* <AddThoughtButton /> */}
           
          

          <ContentWrapper>
            <SortLabel>Sort</SortLabel>
            <SortSelectDropdown>
              <option value='A-Z'>A-Z</option>
              <option value='Most Recent'>Most Recent</option>
            </SortSelectDropdown>
            {thoughts.map((thought, idx) => {
                  return <CondensedThought 
                    key={idx}
                    id={thought.id}
                    title={thought.thought_title}
                  />
                })
            }
           </ContentWrapper>
      </TopicWrapper>
    );
  }
}