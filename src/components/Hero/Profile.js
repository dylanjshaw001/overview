import React, { useState, useEffect } from 'react';
import fire from '../../fire';
import { CSSTransition } from 'react-transition-group';

import { useDark, useWork } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

import ProfileLinks from './ProfileLinks';
import TrackPlayer from '../Player/Player';

import faceImg from './assets/face_professional.jpeg';
import faceImgHover from './assets/face_hover.jpeg';

const Profile = (props) => {

  const [tracksState, setTracksState] = useState({ tracks: [], loaded: false });

  const fetchTracks = () => {
    fire.database().ref('music')
      .on('value', function (snapshot) {
        // const tracks = ObjectFromArray(snapshot.val(), 'title');
        const tracks = snapshot.val();
        setTracksState({ tracks: tracks, loaded: true });
      });
  }

  useEffect(() => {
    fetchTracks();
  }, []);

  const
    isWorkMode = useWork(),
    isDark = useDark(null),
    profClasses = joinClasses([
      'profile',
      useDark('profile')
    ]),
    profPicClasses = joinClasses([
      'profile-picture',
      useDark('profile-picture')
    ]);

  return (
    <div className={profClasses}>
      <div>
        <CSSTransition
          in={true}
          timeout={1000}
          appear
          classNames='fade-slow'
        >
          <div className='centered-column'>
            <img
              alt="Dylan Shaw"
              src={isWorkMode ? faceImg : faceImgHover}
              className={profPicClasses}
            />
            <h4>
              <span className='profile-name'>dylan shaw </span>
              <div className='profile-title__container'>
                <span className='profile-title'>front-end</span>
                <span className='profile-title'>developer</span>
              </div>
            </h4>
            <div className='centered-horizontal profile-info'>
              <span>dylanjshaw000@gmail.com</span>
              <span><ProfileLinks /></span>
            </div>
          </div>
        </CSSTransition>
        <TrackPlayer tracks={tracksState.tracks} loaded={tracksState.loaded} isDark={isDark} />
      </div>
    </div>
  );
}

export default React.memo(Profile);
