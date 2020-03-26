import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props} />
  )
})

export const FormButton = styled(Button)`
  border: 2px solid ${colors.offwhite};
  color: ${colors.offwhite};
  padding: 10px;
  width: fit-content;
  margin: auto;
  border-radius: 30px;
  font-size: 16px;
  margin-top: 40px;
  background-color: ${colors.slategrey};

  :hover {
    cursor: pointer;
    color: ${colors.teal};
    border-color: ${colors.teal};
  }
`;

const Add = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <NavLink to={props.to} class='button-link'>
        <FontAwesomeIcon icon='plus' />
      </NavLink>
    </button>
  )
})

export const AddButton = styled(Add)`
  color: ${({color}) =>  color ? color : colors.coral};
  background: transparent;
  border: none;
  padding: 5px;
  margin-left: 10px;
  font-size: 1em;
 
  .button-link{
    color: ${({color}) =>  color ? color : colors.coral};
  }

  :hover {
    cursor: pointer;
    font-size: 1.1em;
  }
`;


export default Button