import React, { Component } from "react";
import { Required, FormLabel, FormInput, FormTitle } from "../Form/Form";
import AuthApiService from "../../services/auth-api-service";
import { FormButton, GoBack } from "../Button/Button";
import { FormWrapper, SignUpWrapper } from "./SignUp.style";
import { colors } from "../constants";

export default class SignUp extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = {
    error: null,
  };

  handleRegistrationSuccess() {
    const { history } = this.props;
    history.push("/login");
  }

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { firstname, lastname, username, password } = ev.target;
    AuthApiService.postUser({
      first_name: firstname.value,
      last_name: lastname.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        firstname.value = "";
        lastname.value = "";
        username.value = "";
        password.value = "";
        this.handleRegistrationSuccess();
      })
      .catch((err) => {
        this.setState({ error: err.error });
      });
  };

  componentDidMount() {
    document.title = "Sign Up - Folkul";
    this.firstInput.current.focus();
  }

  handleChange() {
    this.setState({
      error: null,
    });
  }

  render() {
    const { error } = this.state;
    return (
      <SignUpWrapper>
        <FormWrapper
          onSubmit={this.handleSubmit}
          onChange={this.handleChange.bind(this)}
        >
          <div style={{ height: "20px" }}>
            <GoBack
              type="reset"
              onClick={() => this.props.history.push("/")}
              margin="0px"
              color={colors.offwhite}
            />
          </div>
          <FormTitle>Create an account</FormTitle>
          {error && (
            <p style={{ textAlign: "center", marginTop: "10px" }}>{error}</p>
          )}
          <FormLabel htmlFor="signup-firstname-input">
            First Name <Required />
          </FormLabel>
          <FormInput
            ref={this.firstInput}
            placeholder="Ralph"
            id="signup-firstname-input"
            name="firstname"
            aria-label="Enter your first name"
            aria-required="true"
            required
          />

          <FormLabel htmlFor="signup-lastname-input">
            Last Name <Required />
          </FormLabel>
          <FormInput
            placeholder="Emerson"
            id="signup-lastname-input"
            name="lastname"
            aria-label="Enter your last name"
            aria-required="true"
            required
          />

          <FormLabel htmlFor="signup-username-input">
            Username <Required />
          </FormLabel>
          <FormInput
            placeholder="ralph_emerson"
            id="signup-username-input"
            name="username"
            aria-label="Enter your username"
            aria-required="true"
            required
          />

          <FormLabel htmlFor="signup-password-input">
            Password <Required />
          </FormLabel>
          <FormInput
            type="password"
            placeholder="transcend1"
            id="signup-password-input"
            name="password"
            aria-label="Enter your password"
            aria-required="true"
            required
          />

          <FormButton type="submit">Sign Up</FormButton>
        </FormWrapper>
      </SignUpWrapper>
    );
  }
}
