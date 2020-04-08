/* eslint-disable eqeqeq */
import React, { Component } from "react";
import ContentContext from "./../../contexts/ContentContext";
import ContentService from "../../services/content-service";
import TokenService from "../../services/token-service";
import {
  TopicHeader,
  TopicWrapper,
  ContentWrapper,
  SortWrapper,
  SortSelectDropdown,
  SortLabel,
  StyledDeleteDiv,
} from "./Topic.style";
import CondensedThought from "../CondensedThought/CondensedThought";
import { AddButton, GoBack } from "../Button/Button";
import {
  DeleteButton,
  ConfirmDeleteButton,
  ShareButton,
} from "../Button/Button";
import { colors } from "../constants";

export default class Topic extends Component {
  static contextType = ContentContext;

  constructor(props) {
    super(props);
    this.state = {
      currentTopic: {},
      currentThoughts: [],
      deleteDiv: true,
      topicId: null,
      isShared: null,
      sharedLevel: null,
      sort_option: 1,
    };
  }

  async componentDidMount() {
    //get the topic id and auth token of the user
    const topicId = await this.props.match.params.topic_id;
    this.setState({
      topicId,
    });
    // localStorage.setItem('topic', topicId);
    this.context.setTopicForAddThought(topicId);
    this.context.setTopicForThought(topicId);
    const authToken = TokenService.getAuthToken();

    //get the current topic from the server and set it in state
    const currentTopic = await ContentService.getThisTopic(topicId, authToken);
    this.setState({ currentTopic });

    //get the thoughts that belong to the current topic and set it in state
    const currentThoughts = await ContentService.getThoughtsInTopic(
      topicId,
      this.state.sort_option
    );
    if (currentThoughts) {
      this.setState({ currentThoughts });
    }

    const sharedTopics = await ContentService.getSharedTopics();

    const isShared = sharedTopics.find((topic) => topic.topic_id == topicId);

    if (isShared !== undefined) {
      const level = await ContentService.getSharedTopicLevel(topicId);

      this.setState({
        isShared: true,
        sharedLevel: level,
      });
    } else {
      this.setState({
        isShared: false,
      });
    }
  }

  toggleDeleteDiv = () => {
    this.setState({
      deleteDiv: !this.state.deleteDiv,
    });
  };

  handleDelete = () => {
    ContentService.deleteTopic(this.state.topicId);
    this.props.history.goBack();
  };

  handleGoBack = (ev) => {
    this.context.setTopicForAddThought(null);
    this.context.setTopicForThought(0);
    this.props.history.goBack();
  };

  async handleSortChange(ev) {
    ev.preventDefault();
    const sort_option = ev.target.value;

    this.setState({
      sort_option,
    });

    const currentThoughts = await ContentService.getThoughtsInTopic(
      this.state.topicId,
      sort_option
    );
    if (currentThoughts) {
      this.setState({ currentThoughts });
    }
    console.log(currentThoughts, "current thoughts in sort change handler");
  }

  render() {
    const { currentTopic, currentThoughts, topicId, sharedLevel } = this.state;

    return (
      <TopicWrapper>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <GoBack
            type="reset"
            onClick={() => this.handleGoBack()}
            margin="30px 0px 30px 30px"
          />
          <TopicHeader>
            <h1 style={{ marginBottom: "20px" }}>
              {currentTopic.topic_title}!
            </h1>
            <p style={{ color: colors.darkgrey }}>
              {currentTopic.topic_content}
            </p>
          </TopicHeader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <ShareButton
              color={colors.blue}
              type="button"
              to={`/topic/${topicId}/share`}
              disabled={sharedLevel > 2}
              data-tip="Share Topic"
            />

            {currentThoughts.length < 1 ? (
              <DeleteButton
                color={colors.blue}
                data-tip="Delete Topic"
                type="button"
                onClick={this.toggleDeleteDiv.bind(this)}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <ContentWrapper>
          <div className="top">
            <SortWrapper>
              <SortLabel htmlFor="sort-dropdown">Sort</SortLabel>
              <SortSelectDropdown
                onChange={this.handleSortChange.bind(this)}
                name="sortOptions"
                id="sort-dropdown"
                aria-label="sort alphabetically or by date created by choosing from this dropdown"
              >
                <option value="1">Most Recent</option>
                <option value="2">A-Z</option>
              </SortSelectDropdown>
            </SortWrapper>

            <AddButton
              type="button"
              to="/add-thought"
              data-tip="Add Thought to Topic"
            />
          </div>
          <div className="topic-thoughts">
            {currentThoughts.map((thought, idx) => {
              return (
                <CondensedThought
                  key={idx}
                  id={thought.id}
                  title={thought.thought_title}
                  topic={topicId}
                />
              );
            })}
          </div>

          {!this.state.deleteDiv && (
            <StyledDeleteDiv>
              {" "}
              Delete Topic?
              <ConfirmDeleteButton type="button" onClick={this.handleDelete}>
                Yes
              </ConfirmDeleteButton>
            </StyledDeleteDiv>
          )}
        </ContentWrapper>
      </TopicWrapper>
    );
  }
}
