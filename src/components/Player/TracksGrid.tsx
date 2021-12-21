import React from 'react';
import { Click } from './types';
import { joinClasses } from '../shared/utility/utilities';
import {FadeIn} from '../shared/utility/Transitions';


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
          <FadeIn loaded={tracksLoaded} key={track.title} >
            <div
              className={modifiedClasses}
              style={styles}
              onClick={() => { handleTrackClick(track.title, track.cover); }}
            >
              <img alt='album-cover' src={track.cover} />
            </div>
          </FadeIn>
        );
      })
  return <div className='player-track-container'>{trackElements}</div>;
}
