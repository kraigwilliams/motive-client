import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";
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
      isLoginLoading: true,
    };
  }

  //make get request to get all thoughts and topics for the logged in user
  async componentDidMount() {
    const topics = await ContentService.getTopics();
    if (topics) {
      this.setState({ topics, isLoginLoading: false });
    }

    const allThoughts = await ContentService.getThoughts();
    if (allThoughts) {
      this.setState({ allThoughts, isLoginLoading: false });
    }

    const freeThoughts = allThoughts.filter(
      (thought) => thought.thought_topic === 0
    );
    if (freeThoughts) {
      this.setState({
        freeThoughts,
        isLoginLoading: false,
      });
    }

    const sharedThoughts = await ContentService.getSharedThoughts();
    if (sharedThoughts) {
      this.setState({
        sharedThoughts,
        isLoginLoading: false,
      });
    }

    const sharedTopics = await ContentService.getSharedTopics();
    if (sharedTopics) {
      this.setState({
        sharedTopics,
        isLoginLoading: false,
      });
    }
  }

  countThoughtsForTopic(topicId) {
    const thoughtsInTopic = this.state.allThoughts.filter(
      (thought) => thought.thought_topic === topicId
    );
    return thoughtsInTopic.length;
  }

  render() {
    const {
      topics,
      freeThoughts,
      sharedThoughts,
      sharedTopics,
      isLoginLoading,
    } = this.state;
    return (
      <>
        {isLoginLoading ? (
          <PageWrapper>
            <ContentWrapper>
              <Section>
                <Loader
                  type="BallTriangle"
                  color={colors.coral}
                  height={80}
                  width={80}
                />
              </Section>
            </ContentWrapper>
          </PageWrapper>
        ) : (
          <PageWrapper style={{ bgColor: colors.darkgrey }}>
            <DBHeader>
              {this.context.user.username.toUpperCase()}'S FOLKUL
            </DBHeader>

            <ContentWrapper>
              <Section>
                <SectionTitle>
                  <h2 style={{ color: colors.white }}>Topics</h2>
                  <AddButton type="button" to="/add-topic" />
                </SectionTitle>

                {topics.map((topic, idx) => {
                  let thoughtCount = this.countThoughtsForTopic(topic.id);
                  return (
                    <CSSTransition
                      in={!!topics}
                      classNames="fade"
                      appear={true}
                      mountOnEnter
                      timeout={{ enter: 1000 }}
                      key={idx}
                    >
                      <CondensedTopic
                        key={idx}
                        id={topic.id}
                        title={topic.topic_title}
                        count={thoughtCount}
                      />
                    </CSSTransition>
                  );
                })}
              </Section>
              <Section>
                <SectionTitle>
                  <h2 style={{ color: colors.white }}>Thoughts</h2>
                  <AddButton type="button" to="/add-thought" />
                </SectionTitle>
                {freeThoughts.map((thought, idx) => {
                  return (
                    <CSSTransition
                      in={!!freeThoughts}
                      classNames="fade"
                      appear={true}
                      mountOnEnter
                      timeout={{ enter: 1000 }}
                      key={idx}
                    >
                      <CondensedThought
                        key={idx}
                        id={thought.id}
                        title={thought.thought_title}
                      />
                    </CSSTransition>
                  );
                })}
              </Section>
              <Section>
                <SectionTitle>
                  <h2 style={{ color: colors.coral }}>Shared</h2>
                </SectionTitle>
                {sharedTopics.map((topic, idx) => {
                  return (
                    <CSSTransition
                      in={!!sharedTopics}
                      classNames="fade"
                      appear={true}
                      mountOnEnter
                      timeout={{ enter: 1000 }}
                      key={idx}
                    >
                      <CondensedTopic
                        key={idx}
                        id={topic.id}
                        title={topic.topic_title}
                        shared="isShared"
                      />
                    </CSSTransition>
                  );
                })}
                {sharedThoughts.map((thought, idx) => {
                  return (
                    <CSSTransition
                      in={!!sharedThoughts}
                      classNames="fade"
                      appear={true}
                      mountOnEnter
                      timeout={{ enter: 1000 }}
                      key={idx}
                    >
                      <CondensedThought
                        key={idx}
                        id={thought.thought_id}
                        title={thought.thought_title}
                        shared="isShared"
                      />
                    </CSSTransition>
                  );
                })}
              </Section>
            </ContentWrapper>
          </PageWrapper>
        )}
      </>
    );
  }
}

export default Dashboard;
