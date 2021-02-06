import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  position: static;

  width: 100%;
  height: 50px;

  background: ${({ theme }) => theme.colors.black.main};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1000px;
  height: 100%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary.main};
`

export const ButtonAddMovie = styled.button`
  background: transparent;

  svg {
    width: 30px;
    height: 30px;
    transition: all 100ms ease-in;

    path {
      fill: ${({ theme }) => theme.colors.primary.main};
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`
