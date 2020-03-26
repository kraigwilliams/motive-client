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

{/* <div className='HomePage-wrapper'>
          <main className="main">
            <section>
              <header>
                  <h3>Welcome to Motive! </h3>
              </header>
              <p>Discover and explore small batch roasted coffee beans from around the world by filtering through a collection of beans by their unique flavor profiles. To get started, {TokenService.hasAuthToken()? '(Already Logged In!)':<NavLink to='/register'>
              Sign Up Now </NavLink>} and explore the bean collection!
              </p>
              <img src={coffee4} className='bean-in-hand-img' alt='coffee4'/>
            </section>
            <section>
              <header>
                  <h3>Keep track and learn about your favorite beans</h3>
              </header>
              <p> Browse through the collection to explore each bean's Country of Origin, MASL(Meters Above Sea Level), Grower, Process and Flavor Notes. </p>
              <img src={beanlist} className='screenshot-saved-bean-img' alt='savedbeans'/>
              <p>Once you've found some beans that give you a jolt, save them to your personalized collection and leave notes for yourself regarding each bean!</p>
              <img src={savedbeans} className='screenshot-saved-bean-img' alt='savedbeans'/>
              <p>FILTER gives you the chance to explore coffee that is responsibly sourced from crops around the world. </p>

              <img src={coffee2} className='coffee-froth-img' alt='coffee2'/>
              <p>FILTER away!</p>
              <img src={coffee3} className='coffee-filter-img' alt='coffee3'/>
            </section>
            <br />
            {TokenService.hasAuthToken()
            ? '(Already Logged In!)'
          :      <NavLink
          to='/register'>
          Sign Up Now!
          </NavLink>}
        
          <p>Demo FILTER and see how to save and take notes on each card by <NavLink className='Links'
            to='/login'>
            logging in
          </NavLink> using: </p>
          <p> Username: dunder</p>
          <p> Password: password</p>
          <p></p>
          </main>
    </div> */}