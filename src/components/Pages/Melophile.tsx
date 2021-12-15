import React from 'react';
import {Player} from '../Player/Player';
import Musical from './Musical';

class Melophile extends Musical {

    state = this.state;
    props = this.props;


  render() {
    return (
      <React.Fragment>
        {
          this.state.tracksLoaded && (
            <Player
              tracks={this.state.tracks}
              tracksLoaded={this.state.tracksLoaded}
              isDark={this.props.darkTheme}
            />
          )
        }
      </React.Fragment>
    );
  }
}

export default Melophile;