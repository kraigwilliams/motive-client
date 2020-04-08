import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Topic, TopicTitle, TopicCount } from "./CondensedTopic.style";

class CondensedTopic extends Component {
  render() {
    return (
      <>
        <TopicTitle to={`topics/${this.props.id}`} aria-label='Got to this topic'>
          <CSSTransition
            in={true}
            classNames="fade"
            appear={true}
            mountOnEnter
            timeout={{ enter: 1000 }}
            key={this.props.id}
          >
            <Topic key={this.props.id}>
              {this.props.title}
              <TopicCount>{this.props.count}</TopicCount>
            </Topic>
          </CSSTransition>
        </TopicTitle>
      </>
    );
  }
}

export default CondensedTopic;
