import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import ContentService from "../../services/content-service";
import { colors } from "../constants";
import CondensedTopic from "../CondensedTopic/CondensedTopic";
import CondensedThought from "../CondensedThought/CondensedThought";
import {
  DBHeader,
  Section,
  ContentWrapper,
  SectionTitle,
  PageWrapper,
} from "./Dashboard.style";
import { AddButton } from "../Button/Button";

class Dashboard extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      allThoughts: [],
      freeThoughts: [],
      sharedThoughts: [],
      sharedTopics: [],
    };
  }

  //make get requests to get all thoughts and topics for the logged in user
  async componentDidMount() {
    const topics = await ContentService.getTopics();
    if (topics) {
      this.setState({
        topics,
      });
    }

    const allThoughts = await ContentService.getThoughts();
    if (allThoughts) {
      this.setState({
        allThoughts,
      });
    }

    const freeThoughts = allThoughts.filter(
      (thought) => thought.thought_topic === 0
    );
    if (freeThoughts) {
      this.setState({
        freeThoughts,
      });
    }

    const sharedThoughts = await ContentService.getSharedThoughts();
    if (sharedThoughts) {
      this.setState({
        sharedThoughts,
      });
    }

    const sharedTopics = await ContentService.getSharedTopics();
    if (sharedTopics) {
      this.setState({
        sharedTopics,
      });
    }
  }

  //this displays the # of thoughts within a topic for the condensed topic view
  countThoughtsForTopic(topicId) {
    const thoughtsInTopic = this.state.allThoughts.filter(
      (thought) => thought.thought_topic === topicId
    );
    return thoughtsInTopic.length;
  }

  render() {
    const { topics, freeThoughts, sharedThoughts, sharedTopics } = this.state;
    return (
      <PageWrapper style={{ bgColor: colors.darkgrey }}>
        <DBHeader>{this.context.user.username.toUpperCase()}'S FOLKUL</DBHeader>

        <ContentWrapper>
          <Section>
            <SectionTitle>
              <h2 style={{ color: colors.white }}>Topics</h2>
              <AddButton
                type="button"
                to="/add-topic"
                data-tip="Add Topic"
                data-place="top"
                aria-label="Click to add a topic"
              />
            </SectionTitle>
            {/* maps through each topic, pass count of thoughts through props */}
            {topics.map((topic, idx) => {
              let thoughtCount = this.countThoughtsForTopic(topic.id);
              return (
                <CondensedTopic
                  key={idx}
                  id={topic.id}
                  title={topic.topic_title}
                  count={thoughtCount}
                />
              );
            })}
          </Section>
          <Section>
            <SectionTitle>
              <h2 style={{ color: colors.white }}>Thoughts</h2>
              <AddButton
                type="button"
                to="/add-thought"
                data-tip="Add Thought"
                data-place="top"
                aria-label="Click to add a thought"
              />
            </SectionTitle>
            {/* maps all thoughts not in topics */}
            {freeThoughts.map((thought, idx) => {
              return (
                <CondensedThought
                  key={idx}
                  id={thought.id}
                  title={thought.thought_title}
                />
              );
            })}
          </Section>
          <Section>
            <SectionTitle>
              <h2 style={{ color: colors.coral }}>Shared</h2>
            </SectionTitle>
            {/* map through all shared topics and thoughts for shared section */}
            {sharedTopics.map((topic, idx) => {
              return (
                <CondensedTopic
                  key={idx}
                  id={topic.id}
                  title={topic.topic_title}
                  shared="isShared"
                />
              );
            })}
            {sharedThoughts.map((thought, idx) => {
              return (
                <CondensedThought
                  key={idx}
                  id={thought.thought_id}
                  title={thought.thought_title}
                  shared="isShared"
                />
              );
            })}
          </Section>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

export default Dashboard;
