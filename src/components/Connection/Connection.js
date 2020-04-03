import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { ConnectionName, ConnectionDiv } from './Connection.style'
import { AddConnection } from '../Button/Button';
import ActionsService from '../../services/actions-service'


class Connection extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props)
    this.state = {
      userId: null,
    }
  }

  componentDidMount() {
    const { user } = this.context;
    const userId = user.id;

    this.setState({
      userId
    })
  }

  async handleAddConnection() {
    const connectionId = this.props.id
    await ActionsService.addConnection(this.state.userId, connectionId)

    // ActionsService.getConnections(this.state.userId)
  }


  render() {
    return (
      <ConnectionDiv key={this.props.id}>
        <ConnectionName>
          <AddConnection 
            marginleft='0px' 
            marginright='10px' 
            type='button'  
            onClick={this.handleAddConnection}
          />
          {this.props.firstname}
          {this.props.lastname}
          {this.props.username}
        </ConnectionName>
      </ConnectionDiv>
    );
  }
}

export default Connection;