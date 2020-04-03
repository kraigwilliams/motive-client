import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'

export const CommentWrapper = styled.div`
  background-color: ${colors.darkgrey};
  /* height: 50vh; */
  padding: 50px 30px;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* overflow-wrap: scroll; */

  .edit-wrapper {
    margin: auto;
  }

  @media (min-width: 600px) {
    /* height: 30vh; */
  } 
`;

export const CommentHeader = styled.h3`
  color: ${colors.coral};
  text-align: left;
  margin: 0 auto 30px auto;
  width: 100%;
  @media (min-width: 600px) {
    text-align: center;
  } 
`;

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  border: 1px solid ${colors.offwhite};
  background-color: ${colors.slategrey};
  padding: 10px;
  color: ${colors.black};
  font-size: 16px;
  .metadata {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: ${colors.darkgrey};
    font-size: 14px;
  }

  @media (min-width: 600px) {
    width: 80%;
  }
`;


export const Comment = () => {
  return(
    <CommentDiv>
      {/* This would be an avatar for the comment */}
      {/* <a>
        <img src='' alt=''/>
      </a> */}
      
      <div className='content'>
        <div className='text'>
          This is what I am commenting.
          {/* {props.text} */}
        </div>
        <div className='metadata'>
          <p>
            Author
            {/* {props.posted_by} */}
          </p>
        
          <span>
            Yesterday at 6:00
            {/* {props.posted_on} */}
          </span>
        </div>
        
        {/* This would be an option to reply to a specific comment  */}
        {/* <div classNames='actions'>
          <span>Reply</span>
        </div> */}
        {/* This would be a section of comments that are in a response to the comment - nested replies */}
      </div>
    </CommentDiv>
  )
  
};

export const CommentsWrap = styled.div`
  overflow: scroll;
  height: 200px;
`;

const ReplyForm = styled.form`
  /* border: 2px solid ${colors.teal}; */
  height: fit-content;
  /* border-radius: 50px; */
  padding: 20px 0px;
  width: 100%;
  margin: auto;

  @media (min-width: 600px) {
    width: 80%;
  }
`;

const ReplyInput = styled.textarea`
  border: 1px solid ${colors.teal};
  background: transparent;
  border-radius: 50px;
  width: 100%;
  padding: 10px 20px;
  height: 40px;
  /* line-height: 1.2em; */
  font-size: 16px;
  color: ${colors.offwhite};
  vertical-align: middle;
`;

const ReplyButton = styled.button`
  margin-top: 20px;
  color: ${colors.coral};
  background: transparent;
`;

export const Reply = () => {
  return (
    <ReplyForm>
      <div>
        <ReplyInput placeholder='Add a comment...'></ReplyInput>
      </div>
      <ReplyButton>
        Add Comment
      </ReplyButton>
    </ReplyForm>
  )
}