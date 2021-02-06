import styled, { css } from 'styled-components'

import { IButtonProps } from './index'

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: 0;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 200ms ease-in;

  height: 40px;
  min-width: 120px;

  ${({ theme, color }) =>
    css`
      padding: ${theme.spacing(4)}px ${theme.spacing(10)}px;

      background: ${theme.colors[color].main};

      color: ${theme.colors.white.main};
      border-radius: ${theme.spacing(3)}px;

      &:hover {
        transform: translateY(-2px);
      }

      & > svg {
        width: 24px;
        height: 24px;
        margin-right: ${theme.spacing(4)}px;
      }
    `};
`
