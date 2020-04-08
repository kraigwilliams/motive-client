import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import UserContext from "../../contexts/UserContext";
import { Thought, ThoughtTitle } from "./CondensedThought.style";

class CondensedThought extends Component {
  static contextType = UserContext;

  render() {
    return (
      <ThoughtTitle
        to={`/thoughts/${this.props.id}`}
        aria-label="Go to this thought"
      >
        <CSSTransition
          in={true}
          classNames="fade"
          appear={true}
          mountOnEnter
          timeout={{ enter: 1000 }}
          key={this.props.id}
        >
          <Thought key={this.props.id}>{this.props.title}</Thought>
        </CSSTransition>
      </ThoughtTitle>
    );
  }
}

export default CondensedThought;
