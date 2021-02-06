import React, { InputHTMLAttributes } from 'react'

import { IconBaseProps } from 'react-icons'
import { Wrapper, Container, Input as InputStyled } from './styles'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconBaseProps
  width?: string | number
  name?: string
  label: string
}

const Input: React.FC<IInputProps> = ({ width = 300, label, name, icon }) => {
  return (
    <Wrapper width={width}>
      {label && <label htmlFor={name}>{label}</label>}
      <Container>
        {icon && icon}
        <InputStyled name={name} />
      </Container>
    </Wrapper>
  )
}

export default Input
