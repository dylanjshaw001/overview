import React from 'react';
import {Player} from '../Player/Player';
import Musical from './Musical';

class Melophile extends Musical {

    state = this.state;
    props = this.props;


  render() {
    return (
        <Player
          tracks={this.state.tracks}
          tracksLoaded={this.state.tracksLoaded}
          isDark={this.props.darkTheme}
        />
    );
  }
}

export default Melophile;