import React, { Component } from 'react'
import { PageWrapper} from '../constants'
import { colors } from '../constants'


export default class NotFoundPage extends Component {
  render() {
    return (
      <PageWrapper textalign='center' style={{ padding: '50px', color: colors.darkgrey }}className='NotFoundPage'>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>

        <a href="https://www.clipart.email/download/11192816.html" title="Image from clipart.email"><img src="https://cdn.clipart.email/f5564b7c14e4ae7934f6e8acfa229db3_freetoeditcloud-clouds-pixelated-kawaii-aesthetic-cute-_3464-3464.png" width="350" alt="Pixelated Aesthetic Cloud Png" /></a>
      </PageWrapper>
    )
  }
}