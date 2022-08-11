import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AlbumIcon from '@material-ui/icons/Album';
import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

export default function PlayerHeader():JSX.Element {

  const location = useLocation();
  const headerClasses = joinClasses([
    'player-header',
    useDark('player-header')
  ]);

  return (
    <div>
      {
        location.pathname === '/melophile' ? 
        <React.Fragment>
          <p className={`${headerClasses} melophile-page`}>
            <span>mel</span>
            <AlbumIcon />
            <span>phile</span>
          </p>    
        </React.Fragment> :
        <Link to="/melophile" className={`${headerClasses} home-page`}>
            <p>fun music player i made</p>
            <KeyboardArrowUpIcon />
        </Link>
      }
    </div>
  );
}