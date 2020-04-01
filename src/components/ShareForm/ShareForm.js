import React, { Component } from 'react'
import { FormWrapper, FormTitle, FormLabel, Dropdown} from '../Form/Form'
import {PageWrapper, colors} from '../constants'
import { FormButton, GoBack } from '../Button/Button'
import ActionsService from '../../services/actions-service'
import UserContext from '../../contexts/UserContext'

export default class ShareForm extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props)
    this.state = {
      connections: [],
      connectionSelected: {},
      shareLevel: null
    }
  }

  async componentDidMount() {
    const { user } = this.context;
    const userId = user.id;
    const connections = await ActionsService.getConnections(userId)
    this.setState({
      connections
    })
  }

  handleClickShare(ev) {
    ev.preventDefault()
    const thoughtId = this.props.thought_id;
    const { connections, share_level } = ev.target;
    ActionsService.shareThought(thoughtId, connections, share_level);
  }

  render() {
    const {connections} = this.state;
    const connectOptions = connections.map((friend, idx) => {
      return <option key={idx} value={friend.id}>
        {friend.first_name}
        {friend.last_name}
        {friend.username}
      </option>
    })
    return (
      <PageWrapper>
        <FormWrapper onSubmit={this.handleClickShare}>
          <GoBack
            type='reset'
            onClick={() => this.props.history.goBack()}
            margin='0px'
          />
          <FormTitle>
            Share
          </FormTitle>

          <FormLabel htmlFor='share-connections'>
            Share with:
          </FormLabel>
          <Dropdown
            id='share-connections'
            aria-label="You can select a connection to share this thought with"
            name='connections'
            value={0}
          >
            <option value={0}> -- Choose a connection -- </option>
            {/* options of all connections */}
            {connectOptions}
          </Dropdown>

          <FormLabel>
            Share as: 
          </FormLabel>
          <Dropdown
             id='share-level'
             aria-label="You can select what type of share you wish to do"
             name='share-level'
             value={0}
          >
            {/* options to share as a collab or as reader */}
            <option value={0}>Choose how to share</option>
            <option value={2}>Collaborator</option>
            <option value={3}>Viewer</option>
          </Dropdown>

          {/* !!!! Conditionally render a message based on what the user has selected to describe the difference between a collaborator and a reader !!!! */}

          <FormButton 
            type='submit'
          >
            Share
          </FormButton>
        </FormWrapper>
      </PageWrapper>

    )
  }
}