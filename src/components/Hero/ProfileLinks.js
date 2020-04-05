import React from 'react';
import { useDark } from '../shared/Theme/UseTheme';
import { joinClasses } from '../shared/utility/utilities';

import { Button } from '@material-ui/core';

import ResumePDF from '../../pdf/Dylan_Shaw_resume.pdf';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ProfileLinks = (props) => {


  const profLinkClasses = joinClasses([
    'profile-link',
    useDark('profile-link')
  ]);

  return (
    <div className="centered-horizontal profile-link__container">
      <Button
        className={profLinkClasses}
        href="https://www.linkedin.com/in/dylan-j-shaw"
        target="_blank"
        size="small"
      >
        <LinkedInIcon />
      </Button>
      <Button
        className={profLinkClasses}
        href="https://github.com/dylanjshaw"
        target="_blank"
        size="small"
      >
        <GitHubIcon />
      </Button>
      <Button
        className={`${profLinkClasses} profile-link__pdf`}
        href={ResumePDF}
        target="_blank"
      >resume.pdf</Button>
    </div>
  );
}

export default ProfileLinks;
