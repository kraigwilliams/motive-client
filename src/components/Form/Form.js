import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import {colors} from '../constants'
// import './Form.css'

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 22px;
  color: ${({ color }) => color || colors.teal};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#829191"};
  width: 100%;
  
  @media (min-width:700px) {
      width: 70%;
      margin: auto;
      padding: 30px;
      border-radius: 30px;
  }
`;

export const LoginWrapper = styled.div`
  background-color: ${colors.slategrey};
  margin: 0;
  padding: 40px;
  min-height: 100vh;
  
  @media (min-width:500px) {
    background-color: ${colors.offwhite};

  }
`;

function Label({ className, ...props }) {
  return (
    <label className={cx('Label', className)} {...props} />
  )
}

export const FormLabel = styled(Label)`
  color: ${props => props.color ? props.color : colors.coral} ;
  text-align: ${props => props.align ? props.align : 'left'};
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
  font-weight: bolder;
  width: 100%;

  @media (min-width:700px) {
    width: 60%; 
    margin: auto;
    margin-top: 20px;
  }
`;

export const Input =  React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input className={cx('Input', className)} type='text' ref={ref} {...props} />
  )
})

export const FormInput = styled(Input)`
  border: 2px solid ${colors.darkgrey};
  border-radius: 40px;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.slategrey};
  color: ${colors.offwhite};
  text-align: center;
  width: 100%;

  :focus {
    border-color: ${colors.teal}
  }

  @media (min-width:700px) {
    width: 60%; 
    margin: auto;
  }
`;


export function Required({ className, ...props }) {
  return (
    <span className={cx('Required', className)} {...props}>
      &#42;
    </span>
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={cx('Textarea', className)} {...props} />
  )
}