import React from 'react'
import styled, {keyframes} from 'styled-components'


const HeroText  = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Oswald');
    font-family: 'Oswald', cursive;
    font-size:5.6rem;
    color:#BFF;
    text-align:center;
`
const HeroBg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

  background:#000;
  min-width:100vw;
  min-height:105vh;
  position:relative;
`

const scrollIt = keyframes`
    from {
      transform:translateY(10px);
    }
    to {
        transform:translateY(50px);
    }
`

const HeroSlogan = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');
    font-family: 'Amatic SC', cursive;
    color:white;
    text-align:center;
`
const ScrollDown = styled.div`

  animation: ${scrollIt} 1s linear infinite;
`


const Hero = () => {
  const imgSrc = require('../images/scroll-arrow-light.png');
  return (
      <HeroBg>
        <div>
          <HeroText> Souvenir </HeroText>
          <HeroSlogan>
            <br/>
            Write it down. <br/>Read it out loud. Listen closely. <br/><br/>Feel it all over again.</HeroSlogan>
        </div>
        <ScrollDown>
        <img src={imgSrc} alt="Scroll down to view more" width="120px" height="40px"/>
        </ScrollDown>
      </HeroBg>
  )
}

export default Hero
