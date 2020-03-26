import styled from 'styled-components'
import { colors } from '../constants'
import {Link} from 'react-router-dom'

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
    height: 40px;
    width: fit-content;
    justify-items: right;
  }
`

export const Logo = styled(Link)`
  font-size: 20px;
  color: ${colors.white};
  text-decoration: none;
  font-weight: bolder;
  align-self: center;
  :hover{
    cursor: pointer;
  }
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  margin-left: 25px;
  align-self: center;

  :hover{
    cursor: pointer;
  }
`;

export const MobileButton = styled.button`
  background: transparent;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

  :hover {
    cursor: pointer;
  }
`;

export const NavIcon = styled.div`
  margin: 1em;
  width: 20px;
  color: ${colors.offwhite};

  :after,
  :before,
  div {
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px;
    transition: all .2s ease-in-out;
  }

  :hover:before {
    transform: translateY(12px) rotate(135deg);
  }

  :hover:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  :hover div {
    transform: scale(0);
  }
`