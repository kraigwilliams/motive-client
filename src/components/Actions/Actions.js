import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import {colors} from 'constants'

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props} />
  )
})

export const ShareButton = styled(Button)`
  background: transparent;
  border: 1px solid ${colors.coral}
`;