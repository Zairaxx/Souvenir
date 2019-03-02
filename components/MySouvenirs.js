import React from 'react'
import styled from 'styled-components'

const MySouvenirs = ({souvenirs}) => {

  const souvenirList = posts.map( post => {
    if (post!== 0){
      return (
        <div className="post" key={post.id}>
        <WrapperContainer>
          <ElementContainer><p>{post.author}</p></ElementContainer>
          <ElementContainer center><h3>{post.content}</h3></ElementContainer>
          <ElementContainer end><i>{post.date}</i></ElementContainer>
        </WrapperContainer>
        </div>
      )
    }
    else {return "No posts!"}
  })

  return (
    <div>
      
    </div>
  )
}

export default MySouvenirs



const Posts = ({posts, postAuthor}) => {

    const postList = posts.map(post => {
      if (post!== 0){
        return (
          <div className="post" key={post.id}>
          <WrapperContainer>
            <ElementContainer><p>{post.author}</p></ElementContainer>
            <ElementContainer center><h3>{post.content}</h3></ElementContainer>
            <ElementContainer end><i>{post.date}</i></ElementContainer>
          </WrapperContainer>
          </div>
        )
      }
      else {return "No posts!"}
    })
    return (
      <div>
        <div className="ninja-list">
        {postList}
        </div>
      </div>
    )
  }