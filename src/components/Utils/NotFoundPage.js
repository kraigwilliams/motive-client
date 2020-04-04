import React, { Component } from 'react'
import { PageWrapper} from '../constants'

export default class NotFoundPage extends Component {
  render() {
    return (
      <PageWrapper className='NotFoundPage'>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </PageWrapper>
    )
  }
}