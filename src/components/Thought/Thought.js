/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Moment from "react-moment";
import "moment-timezone";
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
  // NoCommentsYet,
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
    };
  }

  async componentDidMount() {
    const thoughtId = this.props.match.params.thought_id;
    this.setState({
      thoughtId,
    });
    const authToken = TokenService.getAuthToken();

    const currentThought = await ContentService.getThisThought(
      thoughtId,
      authToken
    );
    this.setState({
      currentThought,
    });

    // Check if this thought is shared
    const sharedThoughts = await ContentService.getSharedThoughts();

    const isShared = sharedThoughts.find(
      (thought) => thought.thought_id == thoughtId
    );

    //if the thought is shared, we set its share level in state
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

    const topics = await ContentService.getTopics();
    if (topics) {
      this.setState({
        topics,
      });
    }

    const comments = await ActionsService.getComments(thoughtId);
    console.log(comments, "comments response");
    if (comments) {
      this.setState({
        comments,
      });
    }
  }

  handleChange() {
    this.setState({
      editted: true,
    });
  }

  toggleDeleteDiv = () => {
    this.setState({
      deleteDiv: !this.state.deleteDiv,
    });
  };

  handleTopicChange = (ev) => {
    ev.preventDefault();
    const topicSelected = ev.target.value;
    this.setState({
      topicSelected,
    });
  };

  async handleEdit(ev) {
    ev.preventDefault();
    const { title, content, topic } = ev.target;
    const { thoughtId } = this.state;
    const authToken = TokenService.getAuthToken();
    const thought_title = title.value;
    const thought_content = content.value;
    const thought_topic = topic.value;

    //setting variable to result of pathc request made to server
    const currentThought = await ContentService.saveThoughtEdit(
      thoughtId,
      authToken,
      thought_title,
      thought_content,
      thought_topic
    );

    this.setState({
      currentThought,
      editted: false,
      successfulSave: true,
    });

    setTimeout(() => {
      this.setState({
        successfulSave: false,
      });
    }, 2000);
  }

  handleDelete = () => {
    const thoughtId = this.props.match.params.thought_id;
    ContentService.deleteThought(thoughtId);
    this.props.history.goBack();
  };

  handleAddComment = (ev) => {
    ev.preventDefault();
    const { content } = ev.target;
    const comment_content = content.value;
    console.log(comment_content, "content from the comment input");
    const thoughtId = this.state.thoughtId;
    console.log(thoughtId, "thought id!");

    ActionsService.postComment(thoughtId, comment_content);
  };

  render() {
    let {
      currentThought,
      topics,
      successfulSave,
      thoughtId,
      sharedLevel,
      comments,
    } = this.state;

    const { topicForThought } = this.context;

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
          <div style={{ display: "flex", width: "100%" }}>
            <GoBack
              type="reset"
              onClick={() => this.props.history.goBack()}
              margin="30px 0px 30px 10px"
            />
            <ThoughtHeader
              type="text"
              name="title"
              defaultValue={currentThought.thought_title}
              disabled={sharedLevel > 2}
            />
            <div className="thought-actions">
              {/* Share button here, pass in the thought id through props */}
              <ShareButton
                type="button"
                to={`/thought/${thoughtId}/share`}
                shared={sharedLevel > 2 ? "none" : null}
                marginright="0px"
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <DeleteButton
                  type="button"
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
          <ThoughtTextarea
            name="content"
            defaultValue={currentThought.thought_content}
            disabled={sharedLevel > 2}
          />

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
              color={colors.darkgrey}
              disabled={!this.state.editted || sharedLevel > 2}
              margintop="0px"
              shared={sharedLevel > 2 ? "none" : null}
            >
              save
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
          <CommentHeader>Comments</CommentHeader>

          <CommentsWrap>
            {/* Map through existing comments to render here */}
            {
              (comments = []
                ? // <NoCommentsYet />
                  "No comments yet"
                : comments.map((comment, idx) => {
                    return (
                      <Comment
                        key={idx}
                        text={comment.comment_content}
                        posted_by={comment.username}
                        posted_on={comment.date_posted}
                      />
                    );
                  }))
            }
            {/* {comments.map((comment, idx) => {
              return (
                <Comment
                  key={idx}
                  text={comment.comment_content}
                  posted_by={comment.username}
                  posted_on={comment.date_posted}
                />
              );
            })} */}
          </CommentsWrap>

          {/* Input to write a new comment here */}
          <ReplyForm onSubmit={this.handleAddComment.bind(this)}>
            <div>
              <ReplyInput
                placeholder="Add a comment..."
                name="content"
              ></ReplyInput>
            </div>
            <ReplyButton type="submit">Add Comment</ReplyButton>
          </ReplyForm>
          {/* Add comment button */}
        </CommentWrapper>
      </ThoughtWrapper>
    );
  }
}
