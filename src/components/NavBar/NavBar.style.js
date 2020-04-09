import React from "react";
import styled from "styled-components";
import { colors } from "../constants";
import { Link } from "react-router-dom";
import { ReactComponent as FokulLogo } from "./FOLKUL.svg";

export const NavWrapper = styled.header`
  background-color: ${colors.darkgrey};
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  overflow: hidden;

  .logged-in {
    display: flex;
    flex-direction: row;
    align-self: center;
    height: 40px;
    width: fit-content;
    justify-items: right;
  }
`;

export const Logo = styled(Link)`
  font-size: 10px;
  color: ${colors.white};
  text-decoration: none;
  font-weight: bolder;
  align-self: center;
  margin-top: 7px;
  :hover {
    cursor: pointer;
    fill: ${colors.teal};
  }
`;

const UserLogoContainer = styled.div`
  display: flex;
  align-items: flex-end;

  flex-wrap: wrap;

  > h1 {
    font-style: italic;
    font-size: 16px;
    margin-right: 10px;
    align-self: center;
    color: ${colors.lightblue};
  }

  .logo {
    fill: white;
    width: 65px;
    :hover {
      cursor: pointer;
      fill: ${colors.teal};
    }
  }

  @media (min-width: 500px) {
    > h1 {
      font-size: 18px;
    }

    .logo {
      width: 73px;
    }
  }

  @media (min-width: 800px) {
    > h1 {
      font-size: 25px;
      height: 33px;
      align-self: center;
    }

    .logo {
      width: 100px;
    }
  }
`;

export const UserLogo = (props) => {
  return (
    <UserLogoContainer>
      <h1>{props.username.toUpperCase()}'S</h1>

      <FokulLogo
        aria-label="Folkul logo, click to go to landing page"
        className="logo"
        // style={{ fill: "white", width: "100px" }}
      />
    </UserLogoContainer>
  );
};

export const MenuLink = styled(Link)`
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  margin-left: 20px;
  align-self: center;
  height: fit-content;

  :hover {
    cursor: pointer;
    color: ${colors.coral};
  }
`;

export const MobileButton = styled.div`
  background: transparent;
  border: none;
  display: none;
  justify-content: center;
  align-content: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    display: block;
  }

  :hover {
    cursor: pointer;
  }
`;
