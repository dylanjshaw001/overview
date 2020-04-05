import React from 'react';
import Logos from './Logos';

import { FadeIn } from '../shared/hoc/FadeIn';
import { useDark } from '../shared/Theme/UseTheme';


const Footer = (props) => {

  return (
    <div className={`footer ${useDark('footer')}`}>
      <FadeIn>
        <Logos />
      </FadeIn>
    </div>
  );
}

export default Footer;