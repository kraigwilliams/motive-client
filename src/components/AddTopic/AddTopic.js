import React, { Component } from "react";
import { FormButton, GoBack } from "../Button/Button";
import {
  FormWrapper,
  FormTitle,
  FormLabel,
  FormInput,
  Required,
} from "../Form/Form";
import { PageWrapper, colors } from "../constants";
import ContentService from "../../services/content-service";

export default class AddTopic extends Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title, description } = ev.target;
    ContentService.postTopic(title.value, description.value).then((topic) => {
      const topicId = topic.id;
      this.props.history.push(`topics/${topicId}`);
    });
  };

  render() {
    document.title = "Add Topic - Folkul";
    return (
      <PageWrapper padding="40px 0" bgcolor={colors.darkgrey}>
        <FormWrapper
          padding="50px"
          onSubmit={this.handleSubmit}
          bgcolor={colors.darkgrey}
        >
          <GoBack
            type="reset"
            onClick={() => this.props.history.goBack()}
            margin="0px"
            color={colors.slategrey}
          />

          <FormTitle>Create a Topic</FormTitle>

          <FormLabel htmlFor="topic-title">
            Title <Required />
          </FormLabel>
          <FormInput
            id="topic-title"
            name="title"
            aria-label="Enter title of this topic"
            aria-required="true"
            required
            color={colors.white}
            placeholder="Walden Pond"
          />

          <FormLabel htmlFor="topic-description">Description</FormLabel>
          <FormInput
            id="topic-description"
            name="description"
            aria-label="Enter description of this topic"
            color={colors.white}
            placeholder="“Things do not change; we change.”"
          />

          {/* <FormLabel htmlFor='topic-thoughts'>
            Add Thoughts to Topic
          </FormLabel>
          <Dropdown 
            id='topic-thoughts'
            name='thoughts'
            aria-label="Select any exisiting thoughts that belong within this topic"
          />

          <FormLabel htmlFor='topic-connects'>
            Add Connections to Topic
          </FormLabel>
          <Dropdown 
            id='topic-connects'
            name='connects'
            aria-label="Select any connections you wish to share this topic with"
          /> */}

          <FormButton type="submit" color={colors.coral}>
            Submit
          </FormButton>
        </FormWrapper>
      </PageWrapper>
    );
  }
}
