import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { colors } from "../constants";

export const ThoughtWrapper = styled.div`
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

export const ThoughtHeader = styled.input`
  padding: 10px;
  color: ${colors.white};
  vertical-align: middle;
  text-align: center;
  border: none;
  background: transparent;
  font-size: 20px;
  width: 100%;
  align-self: center;
  justify-self: center;
  margin: 10px auto 20px auto;
  word-wrap: break-word;
  flex-wrap: wrap;
  height: fit-content;
  @media (min-width: 600px) {
    text-align: center;
    font-size: 22px;
    border: none;
    height: fit-content;
    margin: 0px auto 0px auto;
  }
  @media (min-width: 500px) {
    text-align: center;
    font-size: 22px;
    border: none;
    height: fit-content;
    margin: 0px auto 0px auto;
  }
`;

export const ContentWrapper = styled.form`
  padding: 20px;
  justify-content: center;
  text-align: center;
  margin: auto;

  .thought-actions {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 12px;
  }

  .edit-button {
    justify-self: center;
    margin-bottom: 20px;
  }
`;

export const ThoughtTextarea = styled.textarea`
  padding: 40px;
  color: ${colors.slategrey};
  font-size: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
  opacity: 70%;

  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 500px;
  }
`;

export const StyledDeleteDiv = styled.div`
  text-align: center;
  border-radius: 5px;
  padding: 25px;
  background-color: ${colors.darkgrey};
  color: ${colors.offwhite};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  position: absolute;
  z-index: 15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 600px) {
  }
`;

export const ThoughtDropdown = styled.select`
  background: transparent;
  font-size: 16px;
  color: ${colors.white};
  /* width: 40%; */
  padding: 20px 30px;
  margin: 40px auto;
  text-align: center;
  width: 100%;

  > span {
    text-align: center;
  }

  @media (min-width: 700px) {
    margin-top: 40px;
  }
`;

export const SuccessfulSave = styled.div`
  background: transparent;
  border: 1px solid ${colors.teal};
  font-size: 16px;
  text-align: center;
  margin: auto;
  padding: 10px;
  color: ${colors.teal};
`;

export const Container = styled.div`
  width: fit-content;
  margin: auto;
  padding: 5px 5px 30px 5px;
  text-align: center;
  display: flex;
  flex-direction: column;

  .alert-appear {
    opacity: 1;
    transition: all 250ms linear;
  }

  .alert-exit {
    opacity: 0;
    transition: all 250ms linear;
  }
`;

const DetailWrapper = styled.div`
  border-top: 1px solid ${colors.offwhite};
  padding: 30px;
  text-align: center;
  background-color: ${colors.darkgrey};
  width: 100%;

  .Detail-info-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .info {
    text-align: center;
    color: ${colors.lightblue};
    margin-top: 15px;
  }

  .info-content {
    color: ${colors.offwhite};
  }

  .info-shared {
    color: ${colors.lightblue};
    width: 50%;
    margin-top: 15px;
  }
`;

const DetailHeader = styled.h3`
  text-align: center;
  color: ${colors.coral};
  margin-bottom: 15px;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

export const Details = (props) => {
  console.log(props.shared_with, "shared with props");
  const calendarStrings = {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  };
  return (
    <DetailWrapper>
      <DetailHeader>Details</DetailHeader>
      <DetailWrap>
        <div className="Detail-info-container">
          <div className="info">
            Owner
            <div className="info-content">{props.owner}</div>
          </div>
          <div className="info">
            Last Modified
            <div className="info-content">
              <Moment calendar={calendarStrings}>{props.lastModified}</Moment>
            </div>
          </div>
        </div>
        <div className="info-shared">
          Shared With
          <div className="info-content">
            {props.shared_with &&
              props.shared_with.map((user) => (
                <div key={user.id}>
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </DetailWrap>
    </DetailWrapper>
  );
};
