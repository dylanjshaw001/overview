import React from 'react';

import { Button } from '@material-ui/core';
import { useTimelineIcon } from './useTimelineIcon';

function TimelineEvent(props) {

  let Icon = useTimelineIcon(props.el.mileStone, 'large');

  return (
    <div className={`datum event event-${props.el.order}`}>
      <div className='event-container'>
        {props.bva ?
          <div className='event-container__content'>
            <Button onClick={props.scroll}>{Icon}</Button>
            <Button onClick={props.scroll}>{props.el.content}</Button>
          </div> :
          <div className='event-container__content'>
            {Icon}
            <p>{props.el.content}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default TimelineEvent;