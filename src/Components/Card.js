import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "../Components/Card.css";
import img from "../Components/d1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={7} className="image">
        <img src={img} alt="project"/>
        <div className="overlay">
          <span>The Burger</span>
        </div>
        </Paper>
    </div>
  );
}

