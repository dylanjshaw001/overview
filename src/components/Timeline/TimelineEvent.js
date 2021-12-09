import React from 'react';

import { Button } from '@material-ui/core';
import { useTimelineIcon } from './useTimelineIcon';
// import { LiveTvOutlined } from '@material-ui/icons';

function TimelineEvent(props) {

  const Icon = useTimelineIcon({ mileStone: props.el.mileStone, id: props.el.id, type: props.el.type }, 'large');

  let styles = props.direction === 'horizontal' ?
    {
      'gridColumnStart': props.indByType + 3,
      'gridColumnEnd': props.indByType + 4
    } : {
      'gridRowStart': props.indByType + 3,
      'gridRowEnd': props.indByType + 4,
    };

  if(props.indByType === 4){
    styles = props.direction === 'horizontal' ?
    {
      'gridColumnStart': props.indByType + 4,
      'gridColumnEnd': props.indByType + 4
    } : {
      'gridRowStart': props.indByType + 4,
      'gridRowEnd': props.indByType + 4,
    };
  }

  const oddOrEven = props.indByType % 2 ? 'odd' : 'even';

  return (
    <div className={`datum event event-${oddOrEven}`} style={styles}>
      <div className='event-container'>
        {props.bva ?
          <div className='event-container__content'>
            <Button onClick={props.scroll.brands}>{Icon}</Button>
            <Button onClick={props.scroll.brands}>{props.el.content}</Button>
          </div> :
          <div className='event-container__content'>
            {Icon}
            <p>{props.el.content}</p>
          </div>
        }
      </div>
    </div >
  );
}

export default TimelineEvent;