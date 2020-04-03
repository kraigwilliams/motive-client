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

  getConnections() {
    return fetch(`${config.API_ENDPOINT}/connections`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`      
      }
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

  postThought(title, desc, topicId) {
    return fetch(`${config.API_ENDPOINT}/thought`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        //topic inputs 
        thought_title: title,
        thought_content: desc,
        thought_topic: topicId
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
    return fetch(`${config.API_ENDPOINT}/topic/${topicId}`, {
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
    return fetch(`${config.API_ENDPOINT}/thought/${thoughtId}`, {
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
    return fetch(`${config.API_ENDPOINT}/topic/${topicId}/thoughts`, {
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

  getSharedThoughts(userId){
    return fetch(`${config.API_ENDPOINT}/thought/shared`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
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

  getSharedTopics(userId){
    return fetch(`${config.API_ENDPOINT}/topic/shared`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
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

  saveThoughtEdit(thoughtId, token, thought_title, thought_content, thought_topic){
    return fetch(`${config.API_ENDPOINT}/thought/${thoughtId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        thought_title,
        thought_content,
        thought_topic
      })
    })
    .then(res => {
      if(!res.ok) {
        return res.json()
        .then(e => Promise.reject(e))
      } 
      return res.json()
    })
    .catch(err => console.error(err.message))
  },

  getSharedThoughtLevel(thoughtId){
    return fetch(`${config.API_ENDPOINT}/thought/${thoughtId}/level`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
        if(!res.ok) {
          return res.json()
          .then(e => Promise.reject(e))
        } 
        return res.json()
    })
    .catch(err => console.error(err.message))
  },

  getSharedTopicLevel(topicId){
    return fetch(`${config.API_ENDPOINT}/topic/${topicId}/level`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
        if(!res.ok) {
          return res.json()
          .then(e => Promise.reject(e))
        } 
        return res.json()
    })
    .catch(err => console.error(err.message))
  },

  deleteTopic(topicId) {
    fetch(`${config.API_ENDPOINT}/topic/${topicId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => { 
          throw error
        })
      }
      // return res.json()
    })
    .catch(error => {
      console.error(error)
    })
  },

  deleteThought(thoughtId) {
    fetch(`${config.API_ENDPOINT}/thought/${thoughtId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => { 
          throw error
        })
      }
      // return res.json()
    })
    .catch(error => {
      console.error(error)
    })
  },
}

export default ContentService;