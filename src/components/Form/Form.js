import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import {colors} from '../constants'

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 22px;
  color: ${({ color }) => color || colors.teal};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#829191"};
  width: 100%;
  padding: ${({padding}) => padding ? padding : '0px'};
  
  @media (min-width:700px) {
      width: 60%;
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
  
  @media (min-width:700px) {
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
  font-size: ${({fontSize}) => fontSize ? fontSize : 'auto'};
  padding: 10px;
  margin: 20px auto 0px auto;
  font-weight: bolder;
  width: 80%;

  @media (min-width:700px) {
    width: 80%; 
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
  border: 2px solid ${colors.offwhite};
  border-radius: 40px;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ backgroundcolor }) => backgroundcolor || colors.offwhite};
  color: ${({ color }) => color || colors.darkgrey};
  text-align: center;
  width: 80%;
  margin: auto;

  :focus {
    border-color: ${colors.teal}
  }

  @media (min-width:700px) {
    width: 80%; 
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

export const FormTextarea = styled(Textarea)`
  background: ${({bgColor}) => bgColor ? bgColor : colors.offwhite};
  width: 80%;
  padding: 20px;
  font-size: 16px;
  color: ${colors.darkgrey};
  border: 2px solid ${colors.offwhite};
  border-radius: 10px;
  margin: auto;

  @media (min-width: 700px) {
    width: 80%;
    margin: auto;
  } 
`;

export const Dropdown = styled.select`
  background: transparent;
  font-size: 16px;
  color: ${colors.white};
  width: 80%;
  padding: 10px;
  margin: auto;

  > option {
    text-align: center;
  }
  

  @media (min-width: 700px) {
    width: 80%;
    margin: auto;
  } 
`;