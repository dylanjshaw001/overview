import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AlbumIcon from '@material-ui/icons/Album';
import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

function PlayerHeader(props) {

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
            <p>music streaming app I've been working on</p>
            <KeyboardArrowUpIcon />
        </Link>
      }
    </div>
  );
}

export default PlayerHeader;