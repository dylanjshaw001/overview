import React, { Component } from 'react';
import fire from '../../fire';

class Musical extends Component {

  constructor(){
    super();
    this.state = {
      tracks: [],
      tracksLoaded: false
    }
  }

  componentDidMount() {
    var component = this;
    fire.database().ref('music')
      .on('value', function (snapshot) {
        // console.log(snapshot.exportVal())
        const tracks = snapshot.val();
        console.log(tracks)
        component.setState({ tracks: tracks, tracksLoaded: true });
      });
  }

  render() {return}
}

export default Musical;