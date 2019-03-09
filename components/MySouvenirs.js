import React from 'react'
import styled from 'styled-components'

const ElementContainer = styled.div`
display:flex;
justify-content:${ props => (props.center ? "center" : props.end ? "flex-end":"flex-start")};
padding:${ props => (props.center ? 0 : props.end ? "0 20px 0 0":"0 0 0 20px")};
font-family: 'Ubuntu', sans-serif;
`

const MySouvenirs = ({souvenirs}) => {

  const souvenirList = souvenirs.map( souvenir => {
    if (souvenir!== 0){
      return (
        <div className="post" key={Math.random()}>
          <div>
            <ElementContainer><p>{souvenir.name}</p></ElementContainer>
            <ElementContainer center><h3>{souvenir.location}</h3></ElementContainer>
            <ElementContainer center><i>{souvenir.color}</i></ElementContainer>
            <ElementContainer center><i>{souvenir.souvenirStory}</i></ElementContainer>
          </div>
        </div>
      )
    }
    else {return "No posts!"}
  })

  return (
    <div>
     {souvenirList}
    </div>
  )
}

export default MySouvenirs


