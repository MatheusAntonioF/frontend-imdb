import React from 'react'

import { MdAdd } from 'react-icons/md'

import { Wrapper, Container, Title, ButtonAddMovie } from './styles'

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <Wrapper>
      <Container>
        <Title>IMDB Clone</Title>
      </Container>
      <ButtonAddMovie>
        <MdAdd />
      </ButtonAddMovie>
    </Wrapper>
  )
}

export default Navbar
