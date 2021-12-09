import React from 'react';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import AlbumIcon from '@material-ui/icons/Album';

import bosPng from '../Logos/assets/boston_b.png';
import sdPng from '../Logos/assets/sd_tree.png';
import nycPng from '../Logos/assets/nyc.png';

export const useTimelineIcon = (data, size) => {

  let Icon;

  if (data.type === 'event') {
    switch (data.mileStone) {
      case 'school':
        Icon = <SchoolIcon fontSize={size} />;
        break;
      case 'work':
        Icon = <WorkIcon fontSize={size} />;
        break;
      default:
        Icon = null;
        break;
    }
  } else if (data.type === 'marker') {
    switch (data.id) {
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