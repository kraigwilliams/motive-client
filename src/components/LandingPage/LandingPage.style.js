import styled from "styled-components";
import { colors } from "../constants";
import { Link } from "react-router-dom";
import cloud from "./Assets/cloud.jpg";

export const PageWrapper = styled.div`
  /* background-image: url(${cloud});
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  text-align: center;
  /* z-index: 5px; */
  width: 100vw;
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 50px 10px 30px 10px;
  color: ${colors.coral};
  font-size: 35px;
  width: 100vw;
  opacity: 100%;

  @media (min-width: 600px) {
    color: ${colors.white};
    padding: 50px 30px 50px 30px;
  }
`;

export const LandingText = styled.p`
  text-align: center;
  padding: 0px 0px 20px 0px;
  color: ${colors.white};
  margin: 5px auto;
  max-width: 80%;

  line-height: 2em;
  word-spacing: 3px;
  font-size: 25px;
  z-index: 3px;
  @media (min-width: 600px) {
    padding: 0px 10px 50px 10px;
    color: ${colors.white};
    max-width: 50%;
  }
`;

export const ContentHeader = styled.div`
  background-image: url(${cloud});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .header {
    background-color: rgba(66, 75, 84, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    z-index: 1px;
  }
  @media (min-width: 600px) {
    height: 100vh;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.color ? props.color : colors.slategrey};
  height: fit-content;
  width: 100%;
  margin: 0px auto;
  padding: 70px 30px;
  justify-content: center;
  align-items: center;
  color: ${colors.darkgrey};
  font-size: 20px;
  text-align: center;
  /* 
  div:nth-child(odd), */
  :nth-child(even) {
    color: ${colors.white};
  }

  > h2 {
    font-size: 22px;
  }

  .img {
    width: 90%;
    border-radius: 50px;
    margin: 40px;
  }

  > p {
    font-size: 18px;
  }

  @media (min-width: 600px) {
    font-size: 33px;
    height: 100vh;
    padding: 70px 50px;
    /* width: fit-content; */
    height: fit-content;

    .img {
      padding: 0px;
      width: 60%;
    }

    > h2 {
      font-size: 30px;
    }

    > p {
      font-size: 20px;
      width: 60%;
    }
  }
`;

export const LandingLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  margin-top: 50px;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  padding: 8px;
  color: ${colors.darkgrey};
  border: 2px solid ${colors.darkgrey};

  :hover {
    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.2);
    border: 2px solid ${colors.white};
    color: ${colors.white};
  }

  @media (min-width: 600px) {
    margin-top: 70px;
    font-size: 20px;
  }
`;

export const LandingImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 5px;
  height: 100%;
  height: auto;

  @media (min-width: 600px) {
    width: 70%;
    height: auto;
  }
`;
