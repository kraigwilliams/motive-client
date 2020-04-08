import styled from "styled-components";
import { colors } from "../constants";

export const ConnectionsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  margin: 0px;
  padding: 0;
  min-height: 100vh;
  height: 100%;
`;

export const ConnectionsHeader = styled.h1`
  font-size: 25px;
  padding-top: 60px;
  padding-bottom: 30px;

  color: ${colors.white};
  text-align: center;

  @media (min-width: 600px) {
    text-align: center;
    font-size: 45px;
  }
`;

export const FriendsName = styled.h2`
  padding: 15px 8px 8px 8px;
  color: ${colors.white};
  text-align: center;
  font-size: 18px;

  @media (min-width: 600px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const FriendsUserName = styled.h2`
  color: ${colors.blue};
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid ${colors.darkgrey};
  border-radius: 7px;
  line-height: 1.5;
  width: 300px;
  margin: auto;
  padding-bottom: 8px;

  @media (min-width: 600px) {
    text-align: center;
  }
`;

export const FriendsHeader = styled.h2`
  padding-top: 20px;
  color: ${colors.white};
  text-align: center;
  line-height: 2.5;
  border-bottom: 1px solid ${colors.white};
  max-width: 300px;
  margin: auto;
  font-size: 28px;

  @media (min-width: 600px) {
    text-align: center;
  }
`;

export const ConnectionsSection = styled.section`
  background-color: ${colors.darkergrey};
  text-align: center;
  padding-bottom: 50px;
  /* height: auto 140%; */
  width: 100%;

  .connections-container {
    height: 300px;
    width: 80%;
    margin: auto;
    overflow: auto;
  }

  @media (min-width: 600px) {
    height: 100%;
  }
`;

export const AddConnectionsWrap = styled.div`
  overflow: auto;
  height: 200px;
  width: 100%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
