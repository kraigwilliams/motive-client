import React, { Component } from 'react'
import {Topic, TopicTitle, TopicCount} from './CondensedTopic.style'


class CondensedTopic extends Component {
  render() {

    return (
        <TopicTitle 
          to={`topics/${this.props.id}`}
        >
         <Topic key={this.props.id}>
            {this.props.title}
            <TopicCount>
              {this.props.count}
            </TopicCount>
          </Topic>
        </TopicTitle>
    );
  }
}

export default CondensedTopic