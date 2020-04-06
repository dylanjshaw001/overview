import React from 'react';

import MuiIcon from './assets/MaterialUI.svg';
import ReactIcon from './assets/React.svg';
import SassIcon from './assets/Sass.svg';
import FireIcon from './assets/Fire.svg';

import styled from 'styled-components';

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    flex: 1;
    margin: 5px;
  }
  .logo-react {
    max-height: 35px;
    max-width: 35px;
  }
  .logo-fire, .logo-sass, .logo-mui {
    max-height: 25px;
    max-width: 25px;
  }
`;

const LogoContainer = (props) => {

  return (
    <LogoDiv>
      <ReactIcon />
      <FireIcon />
      <SassIcon />
      <MuiIcon />
    </LogoDiv>
  );
}

export default LogoContainer;