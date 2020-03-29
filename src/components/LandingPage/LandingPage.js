import React, {Component} from 'react';
import TokenService from '../../services/token-service';
import { PageWrapper, LandingHeader, ContentWrapper, LandingText, LandingLink, LandingImage } from './LandingPage.style'
import cloud from './Assets/cloud.jpg';
export default class LandingPage extends Component {

  render() {
    return(
      <PageWrapper>
        <ContentWrapper>
          <LandingHeader>
            Focus on your thoughts. 
          </LandingHeader>
          <LandingText>
             Fokül is a space to cultivate ideas that matter. Keep a personal record or collaborate in groups — the sky's the limit.     
          </LandingText>

          {TokenService.hasAuthToken()
              ? ''
              : 
              <LandingLink
                to='/signup'>
                Sign Up Here
              </LandingLink>
          }
        </ContentWrapper>
      </PageWrapper>
    )
  }
}
