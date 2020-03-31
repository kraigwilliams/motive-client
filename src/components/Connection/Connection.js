import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { ConnectionName, ConnectionDiv } from './Connection.style'
import { AddButton } from '../Button/Button';


class Connection extends Component {
  static contextType = UserContext;


  render() {

    return (
      <ConnectionDiv key={this.props.id}>
        <ConnectionName>
          <AddButton marginleft='0px' marginright='10px' type='button' to='/add-thought'/>
          Connection Name One
        </ConnectionName>
      </ConnectionDiv>
    );
  }
}

export default Connection