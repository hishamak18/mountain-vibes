import React from 'react'
import styled from 'styled-components'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'
import Photos from '../components/Photos'
import RoomsAndSuits from '../components/RoomsAndSuits'
import Wellcome from '../components/Wellcome'
import Image from '../img/hero.jpeg'


const Wrapper = styled.div`
background-position:centre;
background-repeat:no-repeat;
background-size:cover;
`
const Container = styled.div``

const Home = () => {
  return (
<Container > 
    <Wrapper style={{backgroundImage:`url(${Image})`}}>
     <Navbar/>
      <MainPage/>
    </Wrapper>
      <Wellcome/>
      <RoomsAndSuits/>
      <Photos/>
    </Container>

  )
}

export default Home