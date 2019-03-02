import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

const InputField = styled.input`
    text-align:center;
    margin-bottom:2em;
    width:30em;
`

const slideIn = keyframes`
    from {
        left:100vw;
    }

    to {
        left:0vw;
    }`

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

const FlexSlider = styled.div`
    background-color:${props => props.bgColor || "auto" };
    display:${props => props.display || "flex" };
    position: ${props => props.position || "auto" };
    flex-direction: ${props => props.direction || "column"};
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justify || "center"};
    width: ${props => props.width || "auto" };
    top: ${props => props.top || "0" };
    min-width: ${props => props.minWidth || "auto" };
    left: ${props => props.left || "auto" };
    right: ${props => props.right || "auto" };
    overflow-x:hidden;
    overflow-y:auto;
    z-index: ${props => props.zIndex || "0" };
    padding: ${props => props.padding || "0" };
`

const ColorBox = styled.span`
    display:${props => props.display || "flex"};
    width:13px;
    height:13px;
    background-color:${props => props.color || "white"};
    border: 1px solid black;
    margin-left:5px;
    border-radius:3px;
    cursor: ${props => props.cursor || "pointer"};

    &:hover {
        border: ${props => props.hover || "3px solid black"};
    }
`

const SouvenirText = styled.h2`
    font-size:${props => props.size || "1rem"};
    color:${props => props.color || "black"};
    font-style:${props => props.fontStyle || "normal"};
`

const TextArea = styled.textarea`
    resize:none;
    `

const Form = styled.form`
    display:flex;

`


export default class SouvenirForm extends Component {

    state={
        name:"",
        location:"",
        color:"",
        audio:"",
        souvenirStory:""
    }

    pickColor = (color) => {
        this.setState({
            color:color
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }

    nextPage = () => {
        document.getElementById('pageTwo').setAttribute('style', 'left:0');
        document.getElementById('flex-slider-wrapper').setAttribute('style', 'overflow:visible');
        document.getElementById('next-page').setAttribute('style', `display:none`) //For Firefox

        console.log("hi")
    }

    prevPage = () => {
        document.getElementById('pageTwo').setAttribute('style', 'left:100vw');
        document.getElementById('flex-slider-wrapper').setAttribute('style', 'overflow:hidden');
        document.getElementById('next-page').setAttribute('style', `display:auto`)
    }

    handleSubmit = () => {
        event.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
        <FlexSlider id="flex-slider-wrapper"direction="row" minWidth="100%" position="relative" justify="center" overflow="auto">

            {//                  ---START OF FIRST PAGE---
            }
            <Form onSubmit={this.handleSubmit}>
            <Flex minWidth="100%" position="relative">
                <InputField type="text" placeholder="Name" id="name" onChange={this.handleChange}/>
                <InputField type="text" placeholder="Location" id="location" onChange={this.handleChange}/>
                <InputField type="text" placeholder="Add audio link" id="audio" onChange={this.handleChange}/>
                <Flex direction="row">
                    <Flex direction="row">
                        <h3> Color: </h3>
                        <ColorBox cursor="auto" hover="auto" color={this.state.color}/>
                    </Flex>
                    <Flex direction="row" width="100%">
                    <ColorBox color="#DC143C" onClick={() => (this.pickColor("#DC143C"))}/>
                    <ColorBox color="#87CEFA" onClick={() => (this.pickColor("#87CEFA"))}/>
                    <ColorBox color="#1E90FF" onClick={() => (this.pickColor("#1E90FF"))}/>
                    <ColorBox color="#00FF7F" onClick={() => (this.pickColor("#00FF7F"))}/>
                    <ColorBox color="#FA8072" onClick={() => (this.pickColor("#FA8072"))}/>
                    </Flex>
                </Flex>
                <button id="next-page" onClick={this.nextPage}>Start writing</button>
            </Flex>
            {//              ---END OF FIRST PAGE / START OF 2ND PAGE---
            }
            <Flex id="pageTwo" zIndex="999" position="absolute" padding="1200px" left="100vw" minWidth="100%" bgColor={(this.state.color || "white")} id="pageTwo">
                <Flex bgColor="black" minWidth="100%">
                    <SouvenirText size="1.5rem" color="white">{this.state.location}</SouvenirText>
                </Flex>
                <h2>Write your story:</h2>
                <SouvenirText fontStyle="oblique" color="white">{this.state.name}</SouvenirText>
                <TextArea cols="50" rows="15"id="souvenirStory" onChange={this.handleChange}></TextArea>
                <Flex direction="row" justify="space-around" minWidth="100%">
                    <input type="button" id="prev-page" onClick={this.prevPage} value="Previous page"></input>
                    <input type="submit" value="Submit story"></input>
                </Flex>
            </Flex>
            </Form>
        </FlexSlider>
    )
  }
}