import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'
import cx from 'classnames'
// import './Button.css'

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props} />
  )
})

export const FormButton = styled(Button)`
  border: 2px solid ${colors.offwhite};
  color: ${({ color }) => color || colors.offwhite};
  padding: 10px;
  width: fit-content;
  margin: auto;
  border-radius: 30px;
  font-size: 16px;
  margin-top: ${({ margintop }) => margintop || "40px"};
  background-color: ${({ backgroundColor }) => backgroundColor || colors.slategrey};

  :hover {
    cursor: pointer;
    color: ${colors.teal};
    border-color: ${colors.teal};
  }
`;



export default Button