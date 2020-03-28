import React, { Component } from 'react'
// import AuthApiService from '../services/auth-api-service'
// import TokenService from '../services/token-service'
// import IdleService from '../services/idle-service'


const ContentContext = React.createContext({
  topicForThought: null,
  topicForAddThought: null,
  setTopicForThought: () => {},
  setTopicForAddThought: () => {},
})

export default ContentContext

export class ContentProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topicForThought: null,
      topicForAddThought: null,
    };

  }

  setTopicForThought = (topicForThought) => {
    this.setState({ topicForThought })
  }

  setTopicForAddThought = (topicForAddThought) => {
    this.setState({ topicForAddThought })
  }

  render() {
    const value = {
      topicForThought: this.state.topicForThought,
      topicForAddThought: this.state.topicForAddThought,
      setTopicForThought: this.setTopicForThought,
      setTopicForAddThought: this.setTopicForAddThought
    }
    return (
      <ContentContext.Provider value={value}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}