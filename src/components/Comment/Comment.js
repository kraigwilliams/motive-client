import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { colors } from "../constants";

// Comment styles
export const CommentWrapper = styled.div`
  background-color: ${colors.darkgrey};
  padding: 50px 30px;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: fit-content;
  .edit-wrapper {
    margin: auto;
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
  background-color: ${colors.darkgrey};
  padding: 10px;
  color: ${colors.teal};
  font-size: 16px;
  .metadata {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: ${colors.lightblue};
    font-size: 14px;

    > span {
      color: ${colors.paleblue};
    }
  }

  @media (min-width: 600px) {
    width: 80%;
  }
`;

export const Comment = (props) => {
  const calendarStrings = {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  };
  return (
    <CommentDiv>
      {/* This would be an avatar for the comment */}
      {/* <a>
        <img src='' alt=''/>
      </a> */}

      <div className="content">
        <div className="text">{props.text}</div>
        <div className="metadata">
          <p>{props.posted_by}</p>

          <span>
            <Moment calendar={calendarStrings}>{props.posted_on}</Moment>
          </span>
        </div>

        {/* This would be an option to reply to a specific comment  */}
        {/* <div classNames='actions'>
          <span>Reply</span>
        </div> */}
        {/* This would be a section of comments that are in a response to the comment - nested replies */}
      </div>
    </CommentDiv>
  );
};

export const CommentsWrap = styled.div`
  overflow: auto;
  height: fit-content;
  max-height: 400px;
`;

export const ReplyForm = styled.form`
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

export const ReplyInput = styled.textarea`
  border: 1px solid ${colors.blue};
  background: transparent;
  border-radius: 50px;
  width: 100%;
  padding: 10px 40px 10px 20px;
  height: 40px;
  font-size: 16px;
  color: ${colors.teal};
  vertical-align: middle;
  resize: none;
`;

export const ReplyButton = styled.button`
  margin-top: 20px;
  color: ${colors.coral};
  background: transparent;
  border: none;
  margin-left: -40px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.2em;
  height: 40px;
  padding: 1px 7px;
`;

const NoCommentDiv = styled.div`
  margin: auto;
  text-align: left;
  padding: 10px;
  color: ${colors.slategrey};
  margin-bottom: 10px;
  @media (min-width: 600px) {
    text-align: center;
  }
`;

export const NoCommentsYet = (props) => {
  return <NoCommentDiv>No comments have been added yet.</NoCommentDiv>;
};
