import React, { Component } from 'react';

import Hero from '../components/Hero';
import SouvenirForm from '../components/SouvenirForm';
import Navigation from '../components/Navigation';
import MySouvenirs from '../components/MySouvenirs';

export default class App extends Component {

    state={
        souvenirs:[
          {name:"Vietnam livin", location:"Ho chi Minh", color:"blue", audio:"www.spotify.com", souvenirStory:"I had fun."},
        ]
    }

  render() {
    return (
        <div>
            <Hero/>
            <SouvenirForm/>
            <MySouvenirs souvenirs={this.state.souvenirs}/>
        </div>
    )
  }
}
