import React from 'react';

import { Button } from '@material-ui/core';
import { useTimelineIcon } from './useTimelineIcon';
import * as T from './types';


function TimelineEvent({
  direction,
  e,
  indByType,
  bva,
  scroll,
}:T.TimelineEvent) {

  const {mileStone, id, type, content} = e,
        Icon = useTimelineIcon({ mileStone, id, type, size: 'large'});

  let styles = direction === 'horizontal' ?
    {
      'gridColumnStart': indByType + 3,
      'gridColumnEnd': indByType + 4
    } : {
      'gridRowStart': indByType + 3,
      'gridRowEnd': indByType + 4,
    };

  if(indByType === 4){
    styles = direction === 'horizontal' ?
    {
      'gridColumnStart': indByType + 4,
      'gridColumnEnd': indByType + 4
    } : {
      'gridRowStart': indByType + 4,
      'gridRowEnd': indByType + 4,
    };
  }

  const oddOrEven = indByType % 2 ? 'odd' : 'even';

  return (
    <div className={`datum event event-${oddOrEven}`} style={styles}>
      <div className='event-container'>
        {bva ?
          <div className='event-container__content'>
            <Button onClick={scroll.brands}>{Icon}</Button>
            <Button onClick={scroll.brands}>{content}</Button>
          </div> :
          <div className='event-container__content'>
            {Icon}
            <p>{content}</p>
          </div>
        }
      </div>
    </div >
  );
}

export default TimelineEvent;