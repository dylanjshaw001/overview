import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export const useTimelineIcon = (mileStone, size) => {

  let Icon;
  switch (mileStone) {
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

  return Icon;
}