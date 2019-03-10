import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


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
    overflow: ${props => props.overflow || "auto" };
    margin: ${props => props.margin || "auto" };
    min-height: ${props => props.minHeight || "auto" };
`

const Navigation = ({getCollection}) => {

  return (
    <Flex direction="row-reverse" minWidth="20vw" minHeight="100vh" justify="center" margin="0">
      <NavItem>
        Create new souvenir
      </NavItem>
      <input type="button" id="prev-page" onClick={getCollection} value="Get Collection page"></input>
      <NavItem>
        My Collection
      </NavItem>
    </Flex>
  )
}

export default Navigation
