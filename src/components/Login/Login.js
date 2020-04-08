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

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

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
