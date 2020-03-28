import React, {Component} from 'react';
import TokenService from '../../services/token-service';
import { PageWrapper, LandingHeader, ContentWrapper, LandingText, LandingLink, LandingImage } from './LandingPage.style'
import cloud from './Assets/cloud.jpg';
export default class LandingPage extends Component {

  render() {
    return(
      <PageWrapper>
        <LandingHeader>
          Welcome to Fokul
        </LandingHeader>
        <ContentWrapper>
    
          <LandingText>
            Fokul is a space where intentional thoughts are born. Collaborate with your friends or keep a record for yourself.  
          </LandingText>
          <LandingText>
            No matter how big or small, Fokul will help you there.
          </LandingText>
          <LandingImage src={cloud} alt='labyrinth' />

          <LandingText>Demo Fokul and see how you can begin cultivating your thoughts! 
            <br /> 
            <LandingLink to='/login'>
              Log In
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
