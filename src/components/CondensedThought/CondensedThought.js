import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { Thought, ThoughtTitle } from './CondensedThought.style'



class CondensedThought extends Component {
  static contextType = UserContext;

  render() {

    return (
      <Thought key={this.props.id}>
        <ThoughtTitle
          to={`/thoughts/${this.props.id}`}
        >
          {this.props.title}
        </ThoughtTitle>
      </Thought>
    );
  }
}

export default CondensedThought