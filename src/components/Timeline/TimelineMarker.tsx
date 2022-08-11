import React from 'react';

import { useTimelineIcon } from './useTimelineIcon';
import { joinClasses } from '../shared/utility/utilities';
import { useDark } from '../shared/Theme/UseTheme';
import { Button } from '@material-ui/core';
import * as T from './types';


export default ({
  e,
  bva,
  dbc,
  scroll,
}: T.TimelineMarker) => {

  const {mileStone, id, type, content, dateRange} = e,
        Icon = useTimelineIcon({ mileStone, id, type, size: 'large'});
  let markerContent: any;
  if (bva) {
    markerContent = <Button onClick={scroll.brands}><p>{dateRange}</p></Button>;
  } else if (dbc) {
    markerContent = <a style={{'textDecoration': 'none'}} href="https://en.wikipedia.org/wiki/Dev_Bootcamp" target="_blank"><Button><p>{dateRange}</p></Button></a>;
  } else if (id.includes('music')) {
    markerContent = <Button onClick={scroll.player}><p>{Icon}</p></Button>;
  } else {
    markerContent = <p>{content}<span>{Icon}</span></p>;
  }


  return (
    <div className={joinClasses([
      'datum',
      'marker',
      `${bva || dbc ? 'event-bva' : ''}`,
      useDark('timeline-marker')
    ])
    }>
      <div className='marker-container'>
        <div className='marker-container__content'>{markerContent}</div>
      </div>
    </div>
  );
}