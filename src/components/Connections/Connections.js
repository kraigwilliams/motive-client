import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import ActionsService from "../../services/actions-service";
import {
  ConnectionsPageWrapper,
  FriendsName,
  FriendsUserName,
  FriendsHeader,
  ConnectionsSection,
  AddConnectionsWrap,
} from "./Connections.style";
import { FormInput, FormWrapper, FormTitle } from "../Form/Form";
import { colors } from "../constants";
import Connection from "../Connection/Connection";

export default class Connections extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      connections: [],
      nonconnections: [],
      filteredData: [],
    };
  }

  //grabs user input for connections input search, compares to
  handleInputChange = (event) => {
    const query = event.target.value;

    const filteredData = this.state.nonconnections.filter((element) => {
      return (
        element.first_name.toLowerCase().includes(query.toLowerCase()) ||
        element.last_name.toLowerCase().includes(query.toLowerCase()) ||
        element.username.toLowerCase().includes(query.toLowerCase())
      );
    });
    this.setState({
      filteredData,
      query,
    });
  };

  async getData() {
    const { user } = this.context;
    const userId = user.id;

    const connections = await ActionsService.getConnections(userId);
    if (connections) {
      this.setState({
        connections,
      });
    }

    const nonconnections = await ActionsService.getAllNonconnections();

    if (nonconnections) {
      this.setState({
        nonconnections,
      });
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { connections, filteredData, query } = this.state;

    const { addedConnection } = this.context;
    if (addedConnection) {
      this.getData();
      this.context.setAddedConnection(false);
    }

    return (
      <ConnectionsPageWrapper>
        {/* <ConnectionsHeader>
          {this.context.user.username}'s Connections
        </ConnectionsHeader> */}

        <FormWrapper backgroundcolor="none" style={{ marginTop: "20px" }}>
          <FormTitle color={colors.coral}>Add Connections</FormTitle>

          <FormInput
            onChange={this.handleInputChange}
            backgroundcolor={colors.darkergrey}
            color={colors.white}
            placeholder="Search the Folkul network..."
            value={addedConnection ? "" : undefined}
          />

          <FormTitle color={colors.offwhite} />
          {/* this will eventually be getting the data for search friends from DB */}
          <AddConnectionsWrap>
            {query === ""
              ? ""
              : filteredData.map((connection, idx) => {
                  return (
                    <Connection
                      key={idx}
                      firstname={connection.first_name}
                      lastname={connection.last_name}
                      username={connection.username}
                      id={connection.id}
                    />
                  );
                })}
          </AddConnectionsWrap>
        </FormWrapper>

        <ConnectionsSection>
          <FriendsHeader>
            {" "}
            {this.context.user.username}'s Connections
          </FriendsHeader>
          {/* map through connections in state to render each connection detail */}
          {connections.map((friend, idx) => {
            return (
              <div key={idx}>
                <FriendsName>
                  {friend.first_name} {friend.last_name}
                </FriendsName>
                <FriendsUserName>{friend.username}</FriendsUserName>
              </div>
            );
          })}
        </ConnectionsSection>
      </ConnectionsPageWrapper>
    );
  }
}
