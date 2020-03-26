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
  }

}

export default ContentService;