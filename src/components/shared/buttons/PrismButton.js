import React from 'react';
import { useDark } from '../../UseTheme';
import { joinClasses } from '../utility/utilities';
import PrismBtnStyles from './PrismButton.module.scss';

function PdfButton(props) {

  const classes = joinClasses([
    props.class || '',
    PrismBtnStyles['btn-flip']
  ])

  return (
    <a
      href="#"
      class={classes}
      data-back={props.back}
      data-front={props.front}
    />
  );
}

export default PdfButton;


