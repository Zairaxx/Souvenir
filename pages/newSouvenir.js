import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation';
import SouvenirForm from '../components/SouvenirForm'


const Flex = styled.div`
    background-color:${props => props.bgColor || "auto" };
    display:${props => props.display || "flex" };
    position: ${props => props.position || "auto" };
    flex-direction: ${props => props.direction || "column"};
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justify || "center"};
    width: ${props => props.width || "auto" };
    height: ${props => props.height || "auto" };
    top: ${props => props.top || "0" };
    min-width: ${props => props.minWidth || "auto" };
    left: ${props => props.left || "auto" };
    right: ${props => props.right || "auto" };
    overflow = ${props => props.overflow || "auto" };
`

const newSouvenir = () => {
  return (
    <div>
        <Hero/>
        <SouvenirForm/>
        <Navigation/>
    </div>
  )
}

export default newSouvenir
