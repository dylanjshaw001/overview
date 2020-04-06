import React from 'react';

import { useTimelineIcon } from './useTimelineIcon';
import { joinClasses } from '../shared/utility/utilities';
import { useDark } from '../shared/Theme/UseTheme';
import { Button } from '@material-ui/core';


function TimelineMarker(props) {

  const Icon = useTimelineIcon({ mileStone: props.el.mileStone, id: props.el.id, type: props.el.type }, 'large');

  return (
    <div className={joinClasses([
      'datum',
      'marker',
      `${props.bva ? 'event-bva' : ''}`,
      useDark('timeline-marker')
    ])
    }>
      <div className='marker-container'>
        <div className='marker-container__content'>
          {
            props.bva ?
              <Button onClick={props.scroll}><p>{props.el.dateRange}</p></Button> :
              <p>{props.el.content}<span>{Icon}</span></p>
          }
        </div>
      </div>

    </div>
  );
}

export default TimelineMarker;