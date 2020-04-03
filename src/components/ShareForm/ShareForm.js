import React, { Component } from 'react'
import { FormWrapper, FormTitle, FormLabel, Dropdown, DetailMessage} from '../Form/Form'
import {PageWrapper, colors} from '../constants'
import { FormButton, GoBack } from '../Button/Button'
import ActionsService from '../../services/actions-service'
import UserContext from '../../contexts/UserContext'

export default class ShareForm extends Component {
  // will have to use both contexts here to get the user id from user context and the thought id from the content context 
  static contextType = UserContext;

  constructor(props) {
    super(props)
    this.state = {
      share_id: null,
      item: null,
      connections: [],
      connectionSelected: {},
      shareSelected: null
    }
  }

  async componentDidMount() {
    if(this.props.match.params.thought_id) {
      this.setState({
        share_id : this.props.match.params.thought_id,
        item: 'thought'
      })
    } else {
      this.setState({
        share_id : this.props.match.params.topic_id,
        item: 'topic'
      })
    }
    
    const { user } = this.context;
    const userId = user.id;
    const connections = await ActionsService.getConnections(userId)
    this.setState({
      connections
    })
  }

  handleSelectedShareChange(ev) {
    ev.preventDefault()
    const shareSelected = ev.target.value;
    console.log(shareSelected)
    this.setState({
      shareSelected
    })
  }

  handleSubmitShare(ev) {
    ev.preventDefault()
    const { share_id, item } = this.state;
    const { connections, share_level } = ev.target;
    const connections_share = connections.value;
    const share_level_share = share_level.value;

    console.log(connections_share, 'connections', share_level_share, 'share level')
    if(item === 'thought') {
      ActionsService.shareThought(share_id, connections_share, share_level_share);
      this.props.history.goBack(`thoughts/${share_id}`)
    } else if (item === 'topic') {
      ActionsService.shareTopic(share_id, connections_share, share_level_share);
      this.props.history.goBack( `topics/${share_id}`)
    }
  }

  render() {
    const {connections, shareSelected} = this.state;
    const connectOptions = connections.map((friend, idx) => {
      return <option key={idx} value={friend.id}>
        {friend.first_name} 
        {' '}
        {friend.last_name} 
        {' '}
        {friend.username}
      </option>
    })
    return (
      <PageWrapper padding='40px 0' bgColor={colors.slategrey}>
        <FormWrapper padding='50px 30px' onSubmit={this.handleSubmitShare.bind(this)}>
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
            defaultValue={0}
          >
            <option value={0}> -- Choose a connection -- </option>
            {/* options of all connections */}
            {connectOptions}
          </Dropdown>

          <FormLabel>
            Share as: 
          </FormLabel>
          <Dropdown
             id='share_level'
             aria-label="You can select what type of share you wish to do"
             name='share_level'
             defaultValue={0}
             onChange={this.handleSelectedShareChange.bind(this)}
          >
            {/* options to share as a collab or as reader */}
            <option value={0}>Choose how to share</option>
            <option value={2}>Collaborator</option>
            <option value={3}>Viewer</option>
          </Dropdown>

          <FormButton 
              type='submit'
            >
            Share
          </FormButton>

          {/* !!!! Conditionally render a message based on what the user has selected to describe the difference between a collaborator and a reader !!!! */}
          
          {
            Number(shareSelected) === 2 
              ? <DetailMessage> Sharing as a collaborator allows them to edit the thought you created </DetailMessage>
              : null
          }

          {
            Number(shareSelected) === 3 
              ?  <DetailMessage> Sharing as a reader only allows them to view and comment on the thought you created </DetailMessage>
              : null
          }
        </FormWrapper>
      </PageWrapper>

    )
  }
}