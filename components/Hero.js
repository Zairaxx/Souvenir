import React from 'react'
import styled from 'styled-components'

const HeroText  = styled.h1`
    font-family:sans-serif;
    color:orange;
    text-align:center;
`
const HeroSlogan = styled.h2`
    font-family:Oswald;
    color:black;
    text-align:center;
`

const Hero = () => {
  return (
    <div>
      <HeroText> Souvenir </HeroText>
      <HeroSlogan> - Strengthen your memories </HeroSlogan>
    </div>
  )
}

export default Hero
