import React, { Component } from "react";
import ContentContext from "./../../contexts/ContentContext";
import ContentService from "../../services/content-service";
import { FormButton, GoBack } from "../Button/Button";
import {
  FormWrapper,
  FormTitle,
  FormLabel,
  FormInput,
  Dropdown,
  FormTextarea,
} from "../Form/Form";
import { PageWrapper, colors } from "../constants";

export default class AddThought extends Component {
  static contextType = ContentContext;
  constructor(props) {
    super(props);
    this.state = {
      availTopics: [],
      topic: null,
      topicSelected: null,
    };
  }

  async componentDidMount() {
    const availTopics = await ContentService.getTopics();
    if (availTopics) {
      this.setState({
        availTopics,
      });
    }

    const topicId = this.context.topicForAddThought;

    if (topicId) {
      this.setState({
        topic: topicId,
      });
    }
  }

  handleTopicChange = (ev) => {
    ev.preventDefault();
    const topicSelected = ev.target.value;
    this.setState({
      topicSelected,
    });
  };

  handleGoBack = (ev) => {
    this.context.setTopicForAddThought(0);
    this.props.history.goBack();
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title, content, topic } = ev.target;
    ContentService.postThought(title.value, content.value, topic.value).then(
      (thought) => {
        localStorage.removeItem("topic");
        this.context.setTopicForAddThought(0);
        const thoughtId = thought.id;
        this.props.history.push(`thoughts/${thoughtId}`);
      }
    );
  };

  render() {
    const { availTopics } = this.state;
    const { topicForAddThought } = this.context;

    const options = availTopics.map((topic, idx) => {
      return (
        <option key={idx} value={topic.id}>
          {topic.topic_title}
        </option>
      );
    });
    return (
      <PageWrapper padding="40px 0" bgColor={colors.darkgrey}>
        <FormWrapper
          padding="50px 30px"
          onSubmit={this.handleSubmit}
          bgColor={colors.darkgrey}
        >
          <GoBack
            type="reset"
            onClick={() => this.handleGoBack()}
            margin="0px"
            color={colors.slategrey}
          />

          <FormTitle>Create a Thought</FormTitle>

          <FormLabel htmlFor="thought-title">Title</FormLabel>
          <FormInput
            id="thought-title"
            name="title"
            aria-label="Enter title of this thought"
            aria-required="true"
            required
            color={colors.white}
          />

          {/* <FormLabel>
            Type
          </FormLabel>
          <Dropdown /> */}

          <FormLabel htmlFor="thought-topic">Topic</FormLabel>
          <Dropdown
            id="thought-topic"
            name="topic"
            value={
              this.state.topicSelected ||
              (topicForAddThought ? topicForAddThought : 0)
            }
            onChange={this.handleTopicChange.bind(this)}
            aria-label="You can select a topic to put this thought in"
          >
            <option value={0}> -- Free Thought -- </option>
            {options}
          </Dropdown>

          <FormLabel htmlFor="thought-content">Content</FormLabel>
          <FormTextarea
            id="thought-content"
            name="content"
            aria-label="Create the content of this thought"
            aria-required="true"
            required
            bgColor={colors.slategrey}
          />

          <FormButton type="submit" color={colors.coral}>
            Submit
          </FormButton>
        </FormWrapper>
      </PageWrapper>
    );
  }
}
