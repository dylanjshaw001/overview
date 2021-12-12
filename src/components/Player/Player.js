import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { useDark } from '../shared/Theme/UseTheme';

import ProgressBar from './ProgressBar';
import PlayerHeader from './PlayerHeader';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrack: null,
      selectedCover: null, 
      playerState: null,
      timeElapsed: 0,
      duration: 0
    }
    this.player = React.createRef();
    this.play = React.createRef();
    this.pause = React.createRef();

    this.handleTrackClick = this.handleTrackClick.bind(this);
  }

  componentDidMount() {
    const player = this.player.current;
    window.addEventListener('keypress', (e) => { // pause/play on space key press
      e.preventDefault();
      if (e.which === 32) {
        const curr = { ...this.state };
        if (curr.selectedTrack) {
          this.setState({ playerState: curr.playerState === 'pause' ? 'play' : 'pause' })
        }
      }
    });
    player.addEventListener('ended', () => this.autoPlayNextTrack())
    player.addEventListener('durationchange', () => this.setState({ duration: player.duration }))
    player.addEventListener('timeupdate', () => this.setState({ timeElapsed: player.currentTime }))
  }

  normalize(elapsed) {
    const { duration } = this.state;
    return (elapsed - 0) * 100 / (duration - 0)
  }

  autoPlayNextTrack() {
    const { selectedTrack } = this.state,
      { tracks } = this.props,
      selectedInd = this.getIndex(selectedTrack),
      nextInd = (selectedInd + 1 === tracks.length) ? 0 : selectedInd + 1,
      nextTrackTitle = tracks[nextInd].title;
    this.setState({ selectedTrack: nextTrackTitle, playerState: 'play' })
  }

  getIndex(title) {
    return this.props.tracks.findIndex(track => track.title === title);
  }

  getSrc(title) {
    let currInd = this.getIndex(title);
    return currInd !== -1 ? this.props.tracks[currInd].src : null;
  }

  playNewTrack(player, title) {
    const track = this.getSrc(title);
    if (track) {
      player.src = track;
      setTimeout(() => { player.play(); }, 300) // delay play 300ms for transition
    }
  }

  stopPlayer(player) {
    player.pause();
    player.currentTime = 0;
    this.setState({ selectedTrack: null, timeElapsed: 0 });
  }

  togglePlayer(player, action) {
    player[action]();
  }

  componentDidUpdate(prevProps, prevState) {
    const prev = { ...prevState },
      curr = { ...this.state },
      player = this.player.current;

    // SONG CHANGE
    if (prev.selectedTrack !== curr.selectedTrack) {
      this.playNewTrack(player, curr.selectedTrack);
    }
    // SONG TOGGLED
    else if (prev.playerState !== curr.playerState) {
      this.togglePlayer(player, curr.playerState);
    }
  }

  handleTrackClick(title, cover) {
    const curr = { ...this.state };
    if (curr.selectedTrack !== title) { // play new track
      this.setState({ 
        selectedTrack: title, 
        selectedCover: cover,
        playerState: 'play' 
      });
    } else { // toggle track
      this.setState({ playerState: curr.playerState === 'pause' ? 'play' : 'pause' })
    }
  }

  render() {
    const dropShadow = `${this.props.isDark ? 'drop-shadow(0px 0px 6px white)' : 'drop-shadow(0px 0px 6px black)'}`;
    return (
      <div className={`theme-player--${this.props.isDark ? 'dark' : 'light'}`}>
        <div 
          ref={this.props.playerRef} 
          className='player'>
            <div className='centered-column player-preview-caption'>
              <PlayerHeader />
            </div>
          <div className='player-progress'>
            <p className='player-progress--title'>{this.state.selectedTrack}</p>
            <ProgressBar progress={this.normalize(this.state.timeElapsed)} />
          </div>
          <div className='player-track-container'>
            {
              this.props.tracks.map((track, ind) => {
                const trackStyles = { 'padding': '0', 'filter': this.state.selectedTrack === track.title ? dropShadow : '' },
                  trackClasses = `
                      player-track 
                      player-track--option
                      centered-horizontal
                      ${this.state.selectedTrack === track.title ? `player-track--selected ${this.state.playerState === 'play' ? 'playing' : 'paused'}` : ''}
                      `;
                return (
                  <CSSTransition
                    in={this.props.tracksLoaded}
                    timeout={500}
                    appear
                    classNames='fade-fast'
                    key={track.title}
                  >
                    <div
                      className={trackClasses}
                      style={trackStyles}
                      onClick={() => { this.handleTrackClick(track.title, track.cover); }}
                    >
                      <img alt='album-cover' src={track.cover} />
                    </div>
                  </CSSTransition>
                );
              })
            }
          </div>
          <audio ref={this.player} />
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => {
  return <Player playerRef={ref} {...props} />;
})