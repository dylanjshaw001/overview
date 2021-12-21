import React from 'react';
import {Link} from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness3';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';


import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

interface NavProps {
  click: {
    theme: () => void,
    work: () => void
  }
}

const Nav = (props: NavProps):JSX.Element => {

  const isDarkTheme = useDark(null);
  const navClasses = joinClasses(['nav', useDark('nav')]);
  
  return (
    <div className={navClasses}>
      <div className={'nav-side'}>
        <Link to="/">
          <IconButton>
            <HomeIcon/>
          </IconButton>
        </Link>
        <Link to="/melophile">
          <IconButton>
            <AlbumIcon/>
          </IconButton>
        </Link>
        <IconButton
          size="medium"
          className='nav-toggle nav-toggle--theme'
          onClick={props.click.theme}>
          {
            isDarkTheme ? 
              <SunIcon /> : 
              <MoonIcon />
          }
        </IconButton>
        {/* <IconButton
          size="medium"
          className='nav-toggle nav-toggle--me'
          onClick={props.click.work}
        >
          <img
            className="nav-toggle--me__image"
            src={isWorkMode ? seriousMe : funMe}
            alt="avatar"
          />
        </IconButton> */}
      </div>
    </div>
  );
}

export default React.memo(Nav);