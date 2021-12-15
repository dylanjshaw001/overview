import React, { Component } from 'react';
import * as T from './types';

import TrackContainer from './TrackContainer';
import TracksGrid from './TracksGrid';
import PlayerHeader from './PlayerHeader';

export class Player extends Component<T.PlayerProps>{

  state: T.PlayerState = {
    selectedTrack: null,
    selectedCover: null, 
    playerState: null,
    timeElapsed: 0,
    duration: 0
  }

  player: React.RefObject<HTMLAudioElement> = React.createRef();
  play = React.createRef();
  pause = React.createRef();
  dropShadow = `${this.props.isDark ? 'drop-shadow(0px 0px 6px white)' : 'drop-shadow(0px 0px 6px black)'}`;

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
    if(player){
      player.addEventListener('ended', () => this.autoPlayNextTrack())
      player.addEventListener('durationchange', () => this.setState({ duration: player.duration }))
      player.addEventListener('timeupdate', () => this.setState({ timeElapsed: player.currentTime }))
    }
  }

  normalize: T.Normalize = (elapsed) => {
    const { duration } = this.state;
    return (elapsed - 0) * 100 / (duration - 0)
  }

  autoPlayNextTrack():void {
    const { selectedTrack } = this.state,
      { tracks } = this.props,
      selectedInd = this.getIndex(selectedTrack),
      nextInd = (selectedInd + 1 === tracks.length) ? 0 : selectedInd + 1,
      nextTrackTitle = tracks[nextInd].title;
    this.setState({ selectedTrack: nextTrackTitle, playerState: 'play' })
  }

  getIndex: T.Title = (title) => {
    return this.props.tracks.findIndex(track => track.title === title);
  }

  getSrc: T.Source = (title) => {
    let currInd = this.getIndex(title);
    return currInd !== -1 ? this.props.tracks[currInd].src : null;
  }

  playNewTrack: T.NewTrack = (player, title) => {
    const track = this.getSrc(title);
    if (track) {
      player.src = track;
      setTimeout(() => { player.play(); }, 300) // delay play 300ms for transition
    }
  }

  stopPlayer: T.Stop = (player) => {
    player.pause();
    player.currentTime = 0;
    this.setState({ selectedTrack: null, timeElapsed: 0 });
  }

  togglePlayer: T.Toggle = (player, action) => {
    if (action) player[action]();
  }

  componentDidUpdate: T.PlayerLifeCycle = (prevProps, prevState) => {
    const prev = { ...prevState },
      curr = { ...this.state },
      player = this.player.current;

    // SONG CHANGE
    if (prev.selectedTrack !== curr.selectedTrack && !!player) {
      this.playNewTrack(player, curr.selectedTrack);
    }
    // SONG TOGGLED
    else if (prev.playerState !== curr.playerState && !!player) {
      this.togglePlayer(player, curr.playerState);
    }
  }

  handleTrackClick: T.Click = (title, cover) => {
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
    return (
      <div className={`theme-player--${this.props.isDark ? 'dark' : 'light'}`}>
        <div 
          ref={this.props.refAccess} 
          className='player'>
            <div className='centered-column player-preview-caption'>
              <PlayerHeader />
            </div>

          <TrackContainer 
            selectedTrack={this.state.selectedTrack}
            timeElapsed={this.normalize(this.state.timeElapsed)}
          />

          <TracksGrid 
            tracks={this.props.tracks}
            selectedTrack={this.state.selectedTrack}
            dropShadow={this.dropShadow}
            playerState={this.state.playerState}
            tracksLoaded={this.props.tracksLoaded}
            handleTrackClick={this.handleTrackClick}
          />

          <audio ref={this.player} />
        </div>
      </div>
    );
  }
}