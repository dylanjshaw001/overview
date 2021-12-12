import React from 'react';
import TrackPlayer from '../Player/Player';
import Musical from '../Pages/Musical';

class Melophile extends Musical {
  render() {
    return (
      <React.Fragment>
        {
          this.state.tracksLoaded && (
            <TrackPlayer
              tracks={this.state.tracks}
              tracksLoaded={this.state.tracksLoaded}
              isDark={this.props.darkTheme}
              ref={this.playerRef}
            />
          )
        }
      </React.Fragment>
    );
  }
}

export default Melophile;