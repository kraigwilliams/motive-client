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
  border: 2px solid ${({ color }) => color || colors.offwhite};
  color: ${({ color }) => color || colors.offwhite};
  padding: 10px;
  width: fit-content;
  margin: auto;
  border-radius: 30px;
  font-size: 16px;
  margin-top: ${({ marginTop }) => marginTop || "40px"};
  background-color: ${({ backgroundColor }) => backgroundColor || colors.slategrey};
  opacity: ${({disabled}) => disabled ? .5 : 1};

  :hover {
    cursor: pointer;
    color: ${({disabled}) => !disabled && colors.teal};
    border-color: ${({disabled}) => !disabled && colors.teal};
  }
`;

const Add = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <NavLink to={props.to} className='button-link'>
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


const Delete = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <NavLink to={props.to} className='button-link'>
        <FontAwesomeIcon icon='minus'/>
      </NavLink>
    </button>
  )
})

export const DeleteButton = styled(Delete)`
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

// const Delete = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     <button className={cx('Button', className)} ref={ref} {...props}>
//       <NavLink to={props.to} className='button-link'>
//         <FontAwesomeIcon icon='minus' />
//       </NavLink>
//     </button>
//   )
// })

// export const DeleteButton = styled(Delete)`
//   color: ${({color}) =>  color ? color : colors.coral};
//   background: transparent;
//   border: none;
//   padding: 5px;
//   margin-left: 10px;
//   font-size: 1em;
 
//   .button-link{
//     color: ${({color}) =>  color ? color : colors.coral};
//   }

//   :hover {
//     cursor: pointer;
//     font-size: 1.1em;
//   }
// `;


export default Button