import React, { useEffect, useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
import fire from '../../fire';

import TimelineEvent from './TimelineEvent';
import TimelineMarker from './TimelineMarker';
import * as T from './types';

import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';
import { useWindowSize } from '../shared/utility/useWindowSize';
import { FadeIn } from '../shared/utility/Transitions';


type TimelineProps = {
  scroll: {
    brands: () => void, 
    player: () => void
  }
}


export default function Timeline({scroll}: TimelineProps) {

  const [windowWidth,] = useWindowSize(),
        direction = windowWidth > 768 ? 'horizontal' : 'vertical';

  const [eventsState, setEventsState] = useState({ events: Array(0), loaded: false });

  const indByType = (event: T.EventOrMarker) => eventsState.events.filter(el => el.type === event.type).findIndex(el => el.id === event.id);
  const isBVA = (e: T.EventOrMarker):boolean => e.id.includes('bva');
  const isDBC = (e: T.EventOrMarker):boolean => e.id.includes('dbc');
  

  useEffect(():void => {
    const events = Array(0);
    const mapEvent = (child:any):void => {events.push(child.val())}
    const fetchEvents = ():void => {
      fire
        .database()
        .ref('events')
        .orderByChild('order')
        .on('value', function (snapshot: any) {
          snapshot.forEach(mapEvent);
          setEventsState({ events, loaded: true });
        });
    }
  
    fetchEvents();
  }, [eventsState.loaded]);

  const printEvents = (e: T.EventOrMarker, ind: number):JSX.Element => {
    return (
      <FadeIn loaded={eventsState.loaded} key={ind}>
          {
            e.type === 'event' ?
              <TimelineEvent
                e={e}
                bva={isBVA(e)}
                dbc={isDBC(e)}
                indByType={indByType(e)}
                direction={direction}
                scroll={scroll}
              /> :
              <TimelineMarker
                e={e}
                bva={isBVA(e)}
                dbc={isDBC(e)}
                scroll={scroll}
              />
          }
      </FadeIn>
    );
  }


  return (
    <div className={joinClasses([useDark('timeline'), 'timeline-container--outer'])}>
      <div className={joinClasses(['timeline-container', `timeline-container--${direction}`])}>
        {eventsState.events.map(printEvents)}
      </div>
    </div>
  );
}