import React from 'react';

import { Button } from '@material-ui/core';
import { joinClasses } from '../shared/utility/utilities';
import { useDark } from '../shared/Theme/UseTheme';


function TimelineMarker(props) {

  return (
    <div className={joinClasses([
      'datum',
      'marker',
      `marker-${props.el.order}`,
      `${props.bva ? 'event-bva' : ''}`,
      useDark('timeline-marker')
    ])
    }>
      <div className='marker-container'>
        <div className='marker-container__content'>
          {
            props.bva ?
              <Button onClick={props.scroll}><p>{props.el.dateRange}</p></Button> :
              <p>{props.el.dateRange}</p>
          }
        </div>
      </div>

    </div>
  );
}

export default TimelineMarker;