import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { useDark, useWork } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

import ProfileLinks from './ProfileLinks';

import faceImg from './assets/face_professional.jpeg';
import faceImgHover from './assets/face_hover.jpeg';

const Profile = (props) => {

  const
    isWorkMode = useWork(),
    profClasses = joinClasses([
      'profile',
      'centered-column',
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
          timeout={500}
          appear
          classNames='fade-fast'
        >
          <div className='centered-horizontal profile-inner'>
            <img
              alt="Dylan Shaw"
              src={isWorkMode ? faceImg : faceImgHover}
              className={profPicClasses}
            />
            <div className='centered-column profile-inner-container'>
              <div>
                <span className='profile-name'>dylan shaw </span>
                <div className='profile-title__container'>
                  <span className='profile-title'>developer</span>
                </div>
              </div>
              <ProfileLinks />
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default React.memo(Profile);
