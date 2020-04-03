import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import { ConnectionName, ConnectionDiv } from './Connection.style'
import { AddConnection } from '../Button/Button';
import ActionsService from '../../services/actions-service'
import { CSSTransition } from 'react-transition-group';
import { SuccessfulSave } from '../Thought/Thought.style';

class Connection extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props)
    this.state = {
      userId: null,
      addFriend: false,
      connected: null
    }
  }

  componentDidMount() {
    const { user } = this.context;
    const userId = user.id;

    this.setState({
      userId,
    })
  }

  async handleAddConnection() {
    const { setAddedConnection } = this.context;
    const connectionId = this.props.id
    
    const addFriends = await ActionsService.addConnection(this.state.userId, connectionId)
    console.log(addFriends)
    
    if(addFriends) {
      this.setState({
        addFriend: true
      })
    setTimeout(() => {
      this.setState({
        addFriend: null,
        connected: true,
      });

      setAddedConnection(true);
    }, 2000);
    } else {
      console.log('no friends')
    }
  }


  render() {

    const { addFriend, connected } = this.state;

    return (
      <ConnectionDiv key={this.props.id}>
        {(!addFriend && connected == null )? 
        <ConnectionName>
          <AddConnection 
            marginleft='0px' 
            marginright='10px' 
            type='button'  
            onClick={this.handleAddConnection.bind(this)}
          />
          <div className='connection-details'>
            <div className='connection-fullname'>
            {this.props.firstname}
            {' '}
            {this.props.lastname}
            </div>
  
            {this.props.username}
          </div>
        </ConnectionName> : 

        <CSSTransition
          in={addFriend}
          timeout={300}
          classNames='alert'
          unmountOnExit
          appear
        >            
        <SuccessfulSave>
          You are now connected to {this.props.firstname}{ ' '}{this.props.lastname}
        </SuccessfulSave>

      </CSSTransition>
      }
      </ConnectionDiv>
    );
  }
}

export default Connection;