import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import bosPng from '../Logos/assets/boston_b.png';
import sdPng from '../Logos/assets/sd_tree.png';
import sfPng from '../Logos/assets/sf_bridge.png';

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
      case 'home-marker-sf':
        Icon = <img alt='marker-img' className='marker-img' src={sfPng} />
        break;
      default:
        Icon = null;
        break;
    }
  }

  return Icon;
}