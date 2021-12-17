import React, { Component, Fragment } from 'react';
import fire from '../../fire';

class Musical extends Component {

  constructor(props:any){
    super(props);
    this.state = {
      tracks: [],
      tracksLoaded: false
    }
  }

  upDateTracks (this: Component, snapshot: any) {
    const tracks = snapshot.val();
    this.setState({ tracks, tracksLoaded: true });
  }


  componentDidMount() {
    fire
      .database()
      .ref('music')
      .on('value', this.upDateTracks.bind(this));
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

export default Musical;