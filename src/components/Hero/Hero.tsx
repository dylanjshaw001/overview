import React, {memo} from 'react';
import { CSSTransition } from 'react-transition-group';

import { useDark, useWork } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

import HeroLinks from './HeroLinks';

import faceImg from './assets/face_professional.jpeg';
import faceImgHover from './assets/face_hover.jpeg';




const Avatar = () => (
  <img
    alt="Dylan Shaw"
    src={useWork() ? faceImg : faceImgHover}
    className={joinClasses(['profile-picture', useDark('profile-picture')])}
  />
);

const Title = () => (
  <div>
    <span className='profile-name'>dylan shaw </span>
    <div className='profile-title__container'>
      <span className='profile-title'>developer</span>
    </div>
  </div>
);

const Info = () => (
  <div className='centered-column profile-inner-container'>
    <Title/>
    <HeroLinks />
  </div>
);

export default memo(() => {

  return (
    <div className={joinClasses(['profile', 'centered-column', useDark('profile')])}>
      <div>
        <CSSTransition in={true} timeout={500} appear classNames='fade-fast'>
          <div className='centered-horizontal profile-inner'>
            <Avatar />
            <Info />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
});
