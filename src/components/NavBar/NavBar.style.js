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
    color: ${colors.teal}
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
    color: ${colors.coral}
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