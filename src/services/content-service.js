// this will be all requests to api for topics and thoughts 
import config from '../config'
import TokenService from './token-service'

const ContentService = {
  getTopics() {
    return fetch(`${config.API_ENDPOINT}/topic`, {
      method: 'GET',
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
      return res.json();
    })
    .catch(err => {
      console.error({err})
    })
  },

  getThoughts() {
    return fetch(`${config.API_ENDPOINT}/thought`, {
      method: 'GET',
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
      return res.json();
    })
    .catch(err => {
      console.error({err})
    })
  },

  postTopic(title, desc, thoughts, connections) {
    return fetch(`${config.API_ENDPOINT}/topic`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        //topic inputs 
        topic_title: title,
        topic_content: desc,
        // thoughts: thoughts,
        // connections: connections
      })
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong')
      } return res.json()
    })
    .catch(err => {
      console.error(err.message)
    })
  },

  getThisTopic(topicId, token) {
    fetch(`${config.API_ENDPOINT}/topic/${topicId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(e => Promise.reject(e))
      }
      return res.json()
    })
    .catch(err => {
      console.error({ err })
    })
  },

  getThisThought(thoughtId, token) {
    fetch(`${config.API_ENDPOINT}/thought/${thoughtId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(e => Promise.reject(e))
      }
      return res.json()
    })
    .catch(err => {
      console.error({ err })
    })
  },

  getThoughtsInTopic(topicId, token) {
    fetch(`${config.API_ENDPOINT}/topic/${topicId}/thoughts`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(e => Promise.rejects(e))
      }
      return res.json()
    })
    .catch(err => {
      console.error({ err })
    })
  },

}

export default ContentService;