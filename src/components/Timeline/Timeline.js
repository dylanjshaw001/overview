import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import fire from '../../fire';

import TimelineEvent from './TimelineEvent';
import TimelineMarker from './TimelineMarker';

import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';
import { useWindowSize } from '../shared/utility/useWindowSize';

function Timeline(props) {

  const [windowWidth,] = useWindowSize();

  const [eventsState, setEventsState] = useState({ events: [], loaded: false });

  const fetchEvents = () => {
    fire
      .database()
      .ref('events')
      .orderByChild('order')
      .on('value', function (snapshot) {
        const events = [];
        snapshot.forEach(function (child) {
          events.push(child.val());
        });
        setEventsState({ events: events, loaded: true });
      });
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  const indByType = (event) => eventsState.events.filter(el => el.type === event.type).findIndex(el => el.id === event.id),
    direction = windowWidth > 768 ? 'horizontal' : 'vertical';

  return (
    <div className={joinClasses([useDark('timeline'), 'timeline-container--outer'])}>
      <div className={joinClasses([
        'timeline-container',
        `timeline-container--${direction}`
      ])}>
        {
          eventsState.events.map((el, ind) => {
            const isBVA = el.id.includes('bva');
            return (
              el.type === 'event'

                ?

                <CSSTransition
                  in={eventsState.loaded}
                  timeout={1000}
                  appear
                  classNames='fade-slow'
                  key={ind}
                >
                  <TimelineEvent
                    el={el}
                    bva={isBVA}
                    indByType={indByType(el)}
                    ind={ind}
                    direction={direction}
                    scroll={props.scroll}
                  />
                </CSSTransition>

                :

                <CSSTransition
                  in={eventsState.loaded}
                  timeout={1000}
                  appear
                  classNames='fade-slow'
                  key={ind}
                >
                  <TimelineMarker
                    el={el}
                    bva={isBVA}
                    scroll={props.scroll}
                  />
                </CSSTransition>
            );
          })
        }
      </div>
    </div>
  );
}

export default Timeline;