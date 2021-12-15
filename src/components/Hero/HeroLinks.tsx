import React from 'react';
import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

import { Button } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
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
      <Button
        className={classes}
        href="https://github.com/dylanjshaw"
        target="_blank"
        size="small"
        rel="noopener noreferrer"
      ><GitHubIcon /></Button>
      <a
        className={`${classes} profile-link__pdf`}
        href={`${process.env.PUBLIC_URL}/pdf/Dylan_Shaw_resume.pdf`}
        download
        rel="noopener noreferrer"
      >download resume.pdf</a>
    </div>
  );
}

export default ProfileLinks;
