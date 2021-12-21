import React from 'react';
import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ProfileLinks = () => {

  const classes = joinClasses(['profile-link', useDark('profile-link')]);

  return (
    <div className="centered-horizontal profile-link__container">
      <Button
        className={classes}
        href="https://www.linkedin.com/in/dylan-j-shaw"
        target="_blank"
        size="small"
        rel="noopener noreferrer"
      ><LinkedInIcon /></Button>
      <a
        className={`${classes} profile-link__pdf`}
        href={`${process.env.PUBLIC_URL}/pdf/Dylan_Shaw_resume.PDF`}
        download
        rel="noopener noreferrer"
      >download resume</a>
    </div>
  );
}

export default ProfileLinks;
