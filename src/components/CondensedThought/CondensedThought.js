import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { Thought, ThoughtTitle } from './CondensedThought.style'



class CondensedThought extends Component {
  static contextType = UserContext;

  render() {

    return (
        <ThoughtTitle
          to={`/thoughts/${this.props.id}`}
        >
          <Thought key={this.props.id}>
              {this.props.title}
          </Thought>
        </ThoughtTitle>
    );
  }
}

export default CondensedThought