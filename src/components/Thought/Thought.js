/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentContext from "./../../contexts/ContentContext";
import ActionsService from "../../services/actions-service";
import ContentService from "../../services/content-service";
import TokenService from "../../services/token-service";
import {
  CommentWrapper,
  CommentHeader,
  Comment,
  CommentsWrap,
  ReplyForm,
  ReplyInput,
  ReplyButton,
  NoCommentsYet,
} from "../Comment/Comment";
import {
  ThoughtHeader,
  ThoughtWrapper,
  ThoughtTextarea,
  ContentWrapper,
  ThoughtDropdown,
  StyledDeleteDiv,
  SuccessfulSave,
  Container,
  Details,
} from "./Thought.style";
import { FormButton, GoBack } from "../Button/Button";
import { colors } from "../constants";
import {
  DeleteButton,
  ConfirmDeleteButton,
  ShareButton,
} from "../Button/Button";

export default class Thought extends Component {
  static contextType = ContentContext;

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      thoughts: [],
      thoughtId: null,
      value: "Write your Thought here!",
      currentThought: {},
      comments: [],
      editted: false,
      deleteDiv: true,
      topicSelected: null,
      successfulSave: false,
      thoughtLevel: null,
      isShared: null,
      sharedLevel: null,
      sharedUsers: [],
      thought_owner: "",
    };
  }

  async componentDidMount() {
    document.title = "Thoughts - Folkul";
    const thoughtId = this.props.match.params.thought_id;
    this.setState({
      thoughtId,
    });
    const authToken = TokenService.getAuthToken();

    const currentThought = await ContentService.getThisThought(
      thoughtId,
      authToken
    );
    // const currentThought = currentThoughtArr[0];

    this.setState({
      currentThought,
      thought_owner: currentThought.first_name,
    });

    const sharedUsers = await ContentService.getSharedUsers(thoughtId);
    this.setState({
      sharedUsers,
    });

    // Check if this thought is shared (if current user is the owner or if it has been sahred with the user)
    const sharedThoughts = await ContentService.getSharedThoughts();

    const isShared = sharedThoughts.find(
      (thought) => thought.thought_id == thoughtId
    );

    //if the thought is has been shared, we set its share level in state so we know how to render the thought view
    if (isShared !== undefined) {
      const { level } = await ContentService.getSharedThoughtLevel(thoughtId);
      this.setState({
        isShared: true,
        sharedLevel: level,
      });
    } else {
      this.setState({
        isShared: false,
      });
    }

    // Get the existing topics of that user for the topic dropdown
    const topics = await ContentService.getTopics();
    if (topics) {
      this.setState({
        topics,
      });
    }

    // Get all comments for that thought (based on the thought id)
    const comments = await ActionsService.getComments(thoughtId);
    if (comments) {
      this.setState({
        comments,
      });
    }
  }
  // Handle any edits made to the thought, set state to true if it has been modified
  handleChange() {
    this.setState({
      editted: true,
    });
  }
  // Keep track of what topic is selected if it has been changed from its default
  handleTopicChange = (ev) => {
    ev.preventDefault();
    const topicSelected = ev.target.value;
    this.setState({
      topicSelected,
    });
  };
  // Handle the submission of the thought modifications - make PATCH request to server
  async handleEdit(ev) {
    ev.preventDefault();
    const { title, content, topic } = ev.target;
    const { thoughtId } = this.state;
    const authToken = TokenService.getAuthToken();
    const thought_title = title.value;
    const thought_content = content.value;
    const thought_topic = topic.value;
    const date_modified = new Date();

    //setting variable to result of patch request made to server
    const currentThought = await ContentService.saveThoughtEdit(
      thoughtId,
      authToken,
      thought_title,
      thought_content,
      thought_topic,
      date_modified
    );

    // Update state with successful edit changes
    this.setState({
      currentThought,
      editted: false,
      successfulSave: true,
    });
    // Set the interval to begin the successful message for a successful change
    setTimeout(() => {
      this.setState({
        successfulSave: false,
      });
    }, 2000);
  }

  // Toggle the delete button if the delete icon has been clicked
  toggleDeleteDiv = () => {
    this.setState({
      deleteDiv: !this.state.deleteDiv,
    });
  };

  // Handle actual delete confirmation button
  handleDelete = () => {
    const thoughtId = this.props.match.params.thought_id;
    ContentService.deleteThought(thoughtId);
    this.props.history.goBack();
  };

  // Handle the submission of adding a comment
  async handleAddComment(ev) {
    ev.preventDefault();
    const { content } = ev.target;
    const comment_content = content.value;

    const thoughtId = this.state.thoughtId;

    // Make POST request to server to add a post
    await ActionsService.postComment(thoughtId, comment_content);
    // Clear the comment input
    content.value = " ";

    // Re-fetch the comments to update existing comments with the comment just posted
    const comments = await ActionsService.getComments(thoughtId);
    if (comments) {
      this.setState({
        comments,
      });
    }
  }

  render() {
    let {
      currentThought,
      topics,
      successfulSave,
      thoughtId,
      sharedLevel,
      comments,
      sharedUsers,
    } = this.state;

    const { topicForThought } = this.context;

    // Create the topic options for the thought dropdown selection
    const options = topics.map((topic, idx) => {
      return (
        <option key={idx} value={topic.id}>
          {topic.topic_title}
        </option>
      );
    });

    return (
      <ThoughtWrapper>
        <ContentWrapper
          onSubmit={this.handleEdit.bind(this)}
          onChange={this.handleChange.bind(this)}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignContent: "space-between",
            }}
          >
            <GoBack
              type="reset"
              onClick={() => this.props.history.goBack()}
              margin="30px 0px 30px 10px"
            />
            <h1
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ThoughtHeader
                type="text"
                name="title"
                aria-label="Thought title"
                defaultValue={currentThought.thought_title}
                disabled={sharedLevel > 2}
              />
            </h1>
            <div className="thought-actions">
              {/* Share button here, pass in the thought id through props */}

              <ShareButton
                color={colors.blue}
                type="button"
                to={`/thought/${thoughtId}/share`}
                shared={sharedLevel > 2 ? "none" : null}
                // marginright="0px"
                data-tip="Share Thought"
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <DeleteButton
                  color={colors.blue}
                  type="button"
                  data-tip="Delete Thought"
                  onClick={this.toggleDeleteDiv}
                  shared={sharedLevel > 2 ? "none" : null}
                />
                {!this.state.deleteDiv && (
                  <StyledDeleteDiv>
                    Delete Thought?
                    <ConfirmDeleteButton
                      type="button"
                      onClick={() => {
                        this.handleDelete();
                      }}
                    >
                      Yes
                    </ConfirmDeleteButton>
                  </StyledDeleteDiv>
                )}
              </div>
            </div>
          </div>
          <label htmlFor="thought-content">
            <ThoughtTextarea
              name="content"
              defaultValue={currentThought.thought_content}
              disabled={sharedLevel > 2}
              id="thought-content"
            />
          </label>

          <Container
            style={{
              width: "fit-content",
              margin: "auto",
              padding: "5px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ThoughtDropdown
              name="topic"
              id="thought-topic"
              aria-label="Dropdown for the thought topic"
              value={
                this.state.topicSelected ||
                (topicForThought ? topicForThought : 0)
              }
              onChange={this.handleTopicChange.bind(this)}
              disabled={sharedLevel > 2}
            >
              <option value={0}> -- Free Thought -- </option>
              {options}
            </ThoughtDropdown>

            <FormButton
              className="edit-button"
              type="submit"
              color={colors.blue}
              disabled={!this.state.editted || sharedLevel > 2}
              margintop="0px"
              shared={sharedLevel > 2 ? "none" : null}
            >
              Save
            </FormButton>

            <CSSTransition
              in={successfulSave}
              timeout={300}
              classNames="alert"
              unmountOnExit
              appear
            >
              <SuccessfulSave>
                {currentThought.thought_title} saved.
              </SuccessfulSave>
            </CSSTransition>
          </Container>
        </ContentWrapper>

        <CommentWrapper>
          <label htmlFor="comment-reply">
            <CommentHeader>Comments</CommentHeader>
          </label>

          <CommentsWrap>
            {/* Map through existing comments */}
            {comments.length == 0 ? (
              <NoCommentsYet />
            ) : (
              comments.map((comment, idx) => {
                return (
                  <Comment
                    key={idx}
                    text={comment.comment_content}
                    posted_by={comment.username}
                    posted_on={comment.date_posted}
                  />
                );
              })
            )}
          </CommentsWrap>

          <ReplyForm onSubmit={this.handleAddComment.bind(this)}>
            <div style={{ display: "flex", justifyItems: "center" }}>
              {/* Input to write a new comment */}
              <ReplyInput
                placeholder="Add a comment..."
                name="content"
                id="comment-reply"
                required
              ></ReplyInput>
              {/* Add comment button */}
              <ReplyButton type="submit" aria-label="Add a comment">
                <FontAwesomeIcon icon="plus" />
              </ReplyButton>
            </div>
          </ReplyForm>
        </CommentWrapper>

        {/* Div containing all thought details */}
        <Details
          owner={this.state.thought_owner}
          lastModified={currentThought.date_modified}
          shared_with={sharedUsers}
        />
      </ThoughtWrapper>
    );
  }
}
