import React, { Component } from "react";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

const UserContext = React.createContext({
  user: {},
  error: null,
  addedConnection: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
  setAddedConnection: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      error: null,
      addedConnection: null,
    };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload) {
      this.state.user = {
        id: jwtPayload.user_id,
        firstname: jwtPayload.firstname,
        lastname: jwtPayload.lastname,
        username: jwtPayload.sub,
      };

      IdleService.setIdleCallback(this.logoutBecauseIdle);
    }
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  setError = (error) => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  processLogin = (authToken) => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      firstname: jwtPayload.firstname,
      lastname: jwtPayload.lastname,
      username: jwtPayload.sub,
    });
    IdleService.registerIdleTimerResets();
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken();
    });
  };

  processLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.setUser({});
  };

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.setUser({ idle: true });
  };

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken();
        });
      })
      .catch((err) => {
        this.setError(err);
      });
  };

  setAddedConnection = (value) => {
    this.setState({
      addedConnection: value,
    });
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      addedConnection: this.state.addedConnection,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
      setAddedConnection: this.setAddedConnection,
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
