import React, {useRef} from 'react';
import TokenService from '../../services/token-service';
import { PageWrapper, LandingHeader, ContentWrapper, LandingText, LandingLink, ContentWrapper1 } from './LandingPage.style'
import { colors } from '../constants'
import { AngleDown } from '../Button/Button'
import dashboard from './Assets/dashboard.png'
import topic from './Assets/topic.png'
import add from './Assets/add.png'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export default function LandingPage() {

  
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

    return(
      <PageWrapper>
        <ContentWrapper>
          <LandingHeader>
            Focus your thoughts. 
          </LandingHeader>
          <LandingText>
             Fokul is a space to cultivate ideas that matter. Keep a personal record or collaborate in groups — the sky's the limit.     
          </LandingText>
 
        <AngleDown className='bounce' style={{margin: '150px'}} onClick={executeScroll} />

        </ContentWrapper >

        <ContentWrapper1 ref={myRef} >
          View your dashboard containing Topics and Thoughts
        <img src={dashboard} className='img' alt='dashboard-view'/>
        </ContentWrapper1>
        <ContentWrapper1 style={{backgroundColor: colors.offwhite}}>
          Store all your Thoughts inside each Topic
        <img src={topic}  className='img' alt='topic-view'/>
        </ContentWrapper1>
        <ContentWrapper1 style={{backgroundColor: colors.coral }}>
          Add as many Thoughts as you can imagine!
        <img src={add} className='img' alt='add-thought-view'/>  

        {TokenService.hasAuthToken()
              ? ''
              : 
              <LandingLink
                to='/signup'>
                Sign Up Here
              </LandingLink>
          }
        </ContentWrapper1>
        
      </PageWrapper>
    )
}

