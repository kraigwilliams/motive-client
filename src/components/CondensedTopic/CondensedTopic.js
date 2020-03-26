import React, { Component } from 'react'
import {Topic, TopicTitle, TopicCount} from './CondensedTopic.style'


class CondensedTopic extends Component {
  render() {

    return (
      <Topic key={this.props.id}>
        <TopicTitle 
          to={`topic/${this.props.id}`}
        >
          {this.props.title}
        </TopicTitle>

        <TopicCount>
          {this.props.count}
        </TopicCount>
      </Topic>
    );
  }
}

export default CondensedTopic