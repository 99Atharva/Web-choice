import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "../Components/Card.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },
}));

export default function SimplePaper({image , title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={7} className="image">
        <img src={image} alt="project"/>
        <div className="overlay">
          <span>{title}</span>
        </div>
        </Paper>
    </div>
  );
}

