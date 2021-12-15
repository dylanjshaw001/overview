import React, { Component, Fragment } from 'react';
import fire from '../../fire';

// interface {
//   tracks: Object[],
// }


class Musical extends Component {

  constructor(props:any){
    super(props);
    this.state = {
      tracks: [],
      tracksLoaded: false
    }
  }

  componentDidMount() {
    var component = this;
    fire.database().ref('music')
      .on('value', function (snapshot) {
        const tracks = snapshot.val();
        console.log(tracks)
        component.setState({ tracks: tracks, tracksLoaded: true });
      });
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

export default Musical;