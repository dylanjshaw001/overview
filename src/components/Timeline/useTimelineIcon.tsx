import React from 'react';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import AlbumIcon from '@material-ui/icons/Album';

import bosPng from '../shared/assets/boston_b.png';
import sdPng from '../shared/assets/sd_tree.png';
import nycPng from '../shared/assets/nyc-apple.png';


type Props = {
  id: string,
  type: string,
  mileStone: 'school' | 'work',
  size: "large" | "small" | "inherit" | "default" | undefined
}

export const useTimelineIcon = ({id, type, mileStone, size}: Props) => {

  let Icon: any;

  if (type === 'event') {
    switch (mileStone) {
      case 'school':
        Icon = <SchoolIcon fontSize={size} />;
        break;
      case 'work':
        Icon = <WorkIcon fontSize={size} />;
        break;
    }
  } else if (type === 'marker') {
    switch (id) {
      case 'home-marker-boston':
        Icon = <img alt='marker-img' className='marker-img' src={bosPng} />
        break;
      case 'home-marker-sd':
        Icon = <img alt='marker-img' className='marker-img' src={sdPng} />
        break;
      case 'home-marker-nyc': 
        Icon = <img alt='marker-img' className='marker-img' src={nycPng} />; 
        break;
      case 'project-marker-music':
        Icon = <AlbumIcon />
        break;
      default:
        Icon = null;
        break;
    }
  }

  return Icon;
}