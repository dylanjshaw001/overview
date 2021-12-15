import React from 'react';

import MuiIcon from '../shared/assets/MaterialUI.svg';
import ReactIcon from '../shared/assets/React.svg';
import SassIcon from '../shared/assets/Sass.svg';
import FireIcon from '../shared/assets/Fire.svg';
import TypeScriptIcon from '../shared/assets/TypeScript.svg';

import styled from 'styled-components';

import { FadeIn } from '../shared/hoc/FadeIn';
import { useDark } from '../shared/Theme/UseTheme';

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


export default () => (
  <div className={`footer ${useDark('footer')}`}>
    <FadeIn>
      <LogoDiv>
        <ReactIcon />
        <FireIcon />
        <SassIcon />
        <MuiIcon />
        <TypeScriptIcon />
      </LogoDiv>
    </FadeIn>
  </div>
);