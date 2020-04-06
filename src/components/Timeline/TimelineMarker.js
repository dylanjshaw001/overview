import React from 'react';

import { useTimelineIcon } from './useTimelineIcon';
import { joinClasses } from '../shared/utility/utilities';
import { useDark } from '../shared/Theme/UseTheme';
import { Button } from '@material-ui/core';


function TimelineMarker(props) {

  const Icon = useTimelineIcon({ mileStone: props.el.mileStone, id: props.el.id, type: props.el.type }, 'large');
  let content;
  if (props.bva) {
    content = <Button onClick={props.scroll.brands}><p>{props.el.dateRange}</p></Button>;
  } else if (props.el.id.includes('music')) {
    content = <Button onClick={props.scroll.player}><p>{Icon}</p></Button>;
  } else {
    content = <p>{props.el.content}<span>{Icon}</span></p>;
  }


  return (
    <div className={joinClasses([
      'datum',
      'marker',
      `${props.bva ? 'event-bva' : ''}`,
      useDark('timeline-marker')
    ])
    }>
      <div className='marker-container'>
        <div className='marker-container__content'>{content}</div>
      </div>
    </div>
  );
}

export default TimelineMarker;