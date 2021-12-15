import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface TrackContainerProps {
  selectedTrack: null | string;
  timeElapsed: number
}

const TrackContainer = ({ selectedTrack, timeElapsed }: TrackContainerProps) => {
  return (
    <div className='player-progress'>
      <p className='player-progress--title'>{selectedTrack}</p>
      <div className={useStyles().root}>
        <LinearProgress 
          variant="determinate" 
          value={timeElapsed} 
          color="secondary" 
        />
      </div>
    </div>
  );
}

export default TrackContainer;