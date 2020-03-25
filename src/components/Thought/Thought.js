import React, { Component } from 'react'
import { FormTitle, Textarea, LoginWrapper } from '../Form/Form'
// import MeatballMenu from '../MeatballMenu/MeatballMenu'
export default class Login extends Component {



  render() {
    
    return(
      <LoginWrapper>
          <FormTitle>
            {/* { name of Thought from DB } */}
          </FormTitle>

          {/* <MeatballMenu /> */}

          <Textarea />
           
          {/* <Comment comp here with comments title, all comments, and add comment input /> */}
    
    </LoginWrapper >
    )
  }
}