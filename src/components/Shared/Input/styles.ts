import styled, { css } from 'styled-components'

import { IInputProps } from './index'

const transition = css`
  transition: all 250ms ease-in;
`

export const Wrapper = styled.div<Partial<IInputProps>>`
  display: flex;
  flex-direction: column;

  border: 1.5px solid transparent;

  padding: ${({ theme }) => theme.spacing(4)}px;

  width: ${({ width }) => {
    if (typeof width === 'number') return `${width}px`

    return width
  }};

  ${transition}

  & > label {
    color: ${({ theme }) => theme.colors.grey.main};
    margin-bottom: ${({ theme }) => theme.spacing(4)}px;
  }

  &:focus-within {
    & > label {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    & > div {
      border-color: ${({ theme }) => theme.colors.primary.main};

      & > svg {
        fill: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 1.8px solid transparent;
  background: ${({ theme }) => theme.colors.white.main};
  height: 40px;
  border-radius: ${({ theme }) => theme.spacing(4)}px;

  ${transition}

  & > svg {
    margin-left: 2px;
    ${transition}
  }
`

export const Input = styled.input`
  border: 0;
  outline: 0;
  background: none;
  height: 100%;

  font-size: ${({ theme }) => theme.spacing(8)}px;
`
