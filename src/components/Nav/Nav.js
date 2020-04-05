import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness3';

import funMe from './assets/fun_me.png';
import seriousMe from './assets/serious_me.png';

import { useDark, useWork } from '../shared/Theme/UseTheme';

import { joinClasses } from '../shared/utility/utilities';

const Nav = (props) => {

  const isWorkMode = useWork();
  const isDarkTheme = useDark(null);
  const navClasses = joinClasses([
    'nav',
    useDark('nav')
  ])
  return (
    <div className={navClasses}>
      <IconButton
        size="medium"
        className='nav-toggle nav-toggle--theme'
        onClick={props.click.theme}>
        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      </IconButton>
      <IconButton
        size="medium"
        className='nav-toggle nav-toggle--me'
        onClick={props.click.work}
      >
        <img
          className="nav-toggle--me__image"
          src={isWorkMode ? seriousMe : funMe}
          alt="avatar"
        />
      </IconButton>
      {/* <Logos /> */}
    </div>
  );
}

export default React.memo(Nav);