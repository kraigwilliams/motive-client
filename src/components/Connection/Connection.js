import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { ConnectionName, ConnectionDiv } from './Connection.style'
import { AddButton } from '../Button/Button';
import ActionsService from '../../services/actions-service'


class Connection extends Component {
  static contextType = UserContext;

  // componentDidMount() {
  //   const { user } = this.context;
  //   const userId = user.id;
  // }

  handleAddConnection( connectionId ) {
    ActionsService.addConnection(this.context.user.id, connectionId)

    ActionsService.getConnections(this.context.user.id)
  }


  render() {

    return (
      <ConnectionDiv key={this.props.id}>
        <ConnectionName>
          <AddButton 
            marginleft='0px' 
            marginright='10px' 
            type='button' 
            to='/add-thought' 
            onClick={this.handleAddConnection(this.props.id)}
          />
          {this.props.firstname}
          {this.props.lastname}
          {this.props.username}
        </ConnectionName>
      </ConnectionDiv>
    );
  }
}

export default Connection