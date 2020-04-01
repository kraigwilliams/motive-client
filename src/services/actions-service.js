import config from '../config'
import TokenService from './token-service'

const ActionsService = {
  getConnections(){
    return fetch(`${config.API_ENDPOINT}/connection`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(err => Promise.reject(err))
      }
      //returning an array of all connections as objects
      return res.json()
    })
    .catch(err => console.error({err}))
  },

  getAllNonconnections(userId){
    return fetch(`${config.API_ENDPOINT}/connection/new`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(err => Promise.reject(err))
      }
      //returning an array of all users the current user is NOT connected to as objects
      return res.json()
    })
    .catch(err => console.error({err}))
  },

  addConnection(userId, connectionId) {
    return fetch(`${config.API_ENDPOINT}/connections/${userId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        userId,
        connectionId
      })
    })
    .then(res => {
      if (!res.ok) {
        return res.json()
        .then(err => Promise.reject(err))
      }
      return res.json()
    })
    .catch(err => console.error({err}))
  },

  getComments(thoughtId) {
    return fetch(`${config.API_ENDPOINT}/comments/${thoughtId}`, {
      method:'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(err => Promise.reject(err));
      }
      return res.json()
    })
    .catch(err => {
      console.error({err})
    })
  },

  postComment(thoughtId, comment_content) {
    return fetch(`${config.API_ENDPOINT}/comments/${thoughtId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization' : `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        comment_content
      })
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(err => Promise.reject(err))
      }
      return res.json()
    })
    .catch(err => {
      console.error(err.message)
    })
  },

  deleteComment(commentId) {
    fetch(`${config.API_ENDPOINT}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if (!res.ok) {
        return res.json()
        .then(err => Promise.reject(err))
      }
      // return res.json()
    })
    .catch(err => {
      console.error(err)
    })
  },

  shareThought(thoughtId, shared_userId, shared_level){
    fetch(`${config.API_ENDPOINT}/share/thought/${thoughtId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        thoughtId,
        shared_userId,
        shared_level
      })
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(err => Promise.reject(err))
      }
      return res.json()
    })
  }
}

export default ActionsService;