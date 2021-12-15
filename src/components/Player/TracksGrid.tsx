import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Click } from './types';
import { joinClasses } from '../shared/utility/utilities';


interface Track {
  title: string,
  cover: string
}

interface TracksGridProps {
  tracks: Track[],
  selectedTrack: null | string,
  dropShadow: string,
  playerState: null | string,
  tracksLoaded: boolean,
  handleTrackClick: Click
}

export default function TracksGrid({
  tracks,
  selectedTrack,
  dropShadow,
  playerState,
  tracksLoaded,
  handleTrackClick
}:TracksGridProps) {

  let styles = {},
      classes = ['player-track', 'player-track--option', 'centered-horizontal'],
      modifiedClasses: string,
      trackElements = tracks.map((track) => {
        styles = { 'padding': '0', 'filter': selectedTrack === track.title ? dropShadow : '' };
        modifiedClasses = joinClasses([...classes, selectedTrack === track.title ? `player-track--selected ${playerState === 'play' ? 'playing' : 'paused'}` : '']);

        return (
          <CSSTransition in={tracksLoaded} timeout={500} appear classNames='fade-fast' key={track.title}>
            <div
              className={modifiedClasses}
              style={styles}
              onClick={() => { handleTrackClick(track.title, track.cover); }}
            >
              <img alt='album-cover' src={track.cover} />
            </div>
          </CSSTransition>
        );
      })
  return <div className='player-track-container'>{trackElements}</div>;
}