import config from '../config'
import TokenService from './token-service'

const CommentService = {
  getComments(thoughtId) {
    return fetch(`${config.API_ENDPOINT}/comments/${thoughtId}`, {
      method:'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`
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
  }
}

export default CommentService;