import React from 'react'

import { IconType } from 'react-icons/lib'

import theme from '@styles/themes/light'

import { Button as ButtonStyled } from './styles'

export interface IButtonProps {
  color?: keyof typeof theme.colors
  icon?: IconType
}

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  icon: Icon,
  children,
}) => {
  return (
    <ButtonStyled color={color}>
      {Icon && <Icon />}
      {children}
    </ButtonStyled>
  )
}

export default Button
