/* eslint-disable eqeqeq */
import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import {
  Required,
  FormLabel,
  FormInput,
  FormTitle,
  FormWrapper,
  LoginWrapper,
} from "../Form/Form";
import AuthApiService from "../../services/auth-api-service";
import ContentService from "../../services/content-service";
import { FormButton, GoBack } from "../Button/Button";
import Loader from "react-loader-spinner";
import { colors } from "../constants";

export default class Login extends Component {
  static contextType = UserContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  state = { error: null, loading: false };

  firstInput = React.createRef();

  async handleLoginSuccess() {
    const { location, history } = this.props;

    // const userTopics = await this.context.userTopics;
    // const userThoughts = await this.context.userThoughts;
    // console.log(userTopics, userThoughts);

    // if (userTopics.length == 0 && userThoughts.length == 0) {
    //   //function that makes a post request to create a new sample topic & thought
    //   //hardcoding of posts
    //   const postedTopic = await ContentService.postTopic(
    //     "I Am A Topic",
    //     "I contain one or many thoughts grouped together"
    //   );
    //   const topicId = postedTopic.id;
    //   await ContentService.postThought(
    //     "I am a Thought Inside A Topic",
    //     "I am a thought inside this topic, you can change which topic I belong to, or make me a free thought by selecting 'Free Thought'",
    //     `${topicId}`
    //   );
    //   await ContentService.postThought(
    //     "I Am A Free Thought",
    //     "A free thought does not belong to any topic, you can edit me or select a topic to group me in",
    //     0
    //   );
    // const destination = (location.state || {}).from || "/dashboard";
    // history.push(destination);
    // } else {
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null, loading: true });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.handleLoginSuccess();
      })

      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    document.title = "Login - Folkul";
    this.firstInput.current.focus();
  }

  handleChange() {
    this.setState({
      error: null,
    });
  }

  render() {
    const { error, loading } = this.state;
    return (
      <>
        {loading ? (
          <LoginWrapper style={{ display: "flex" }}>
            <Loader
              type="TailSpin"
              color={colors.slategrey}
              height={80}
              width={80}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </LoginWrapper>
        ) : (
          <LoginWrapper>
            <FormWrapper
              onSubmit={this.handleSubmit}
              onChange={this.handleChange.bind(this)}
            >
              <div style={{ height: "30px" }}>
                <GoBack
                  type="reset"
                  onClick={() => this.props.history.push("/")}
                  margin="10px 0px 20px 0px"
                  color={colors.offwhite}
                />
              </div>
              <FormTitle>Login</FormTitle>
              {error && (
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {error}
                </p>
              )}

              <FormLabel htmlFor="login-username-input">
                Username <Required />
              </FormLabel>
              <FormInput
                placeholder="henry_thoreau"
                ref={this.firstInput}
                id="login-username-input"
                name="username"
                aria-label="Enter your username"
                aria-required="true"
                required
              />

              <FormLabel htmlFor="login-password-input">
                Password <Required />
              </FormLabel>

              <FormInput
                type="password"
                placeholder="SimpleLiving1"
                id="login-password-input"
                name="password"
                aria-label="Enter your password"
                aria-required="true"
                required
              />

              <FormButton type="submit">Login</FormButton>
            </FormWrapper>
          </LoginWrapper>
        )}
      </>
    );
  }
}
