import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import { PageWrapper, LandingHeader, ContentWrapper, LandingText, LandingLink } from './LandingPage.style'

export default class LandingPage extends Component {

  render() {
    return(
      <PageWrapper>
        <LandingHeader>
          Welcome to Motive
        </LandingHeader>
        <ContentWrapper>
    
          <LandingText>
            Motive is a space where intentional thoughts are born. Collaborate with your friends or keep a record for yourself.  
          </LandingText>
          <LandingText>
            No matter how big or small, Motive will help you there.
          </LandingText>

          <LandingText>Demo Motive and see how you can begin cultivating your thoughts by 
            <br />
            <LandingLink to='/login'>
              logging in
            </LandingLink> 
              with Username: admin Password: pass
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
