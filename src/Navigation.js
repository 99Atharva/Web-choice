import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Navigation.css";
import {auth , provider } from "./firebaseconfig"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  back: {
      background:"#ff7b54"
  },
  type: {
      padding:"20px",
      color: "#ffff",
      marginRight: "25px"
  }

}));

function GoogleSignup() {

  auth.signInWithPopup(provider);
  
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.back}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Web Choice
          </Typography>
          <Typography variant="h6" >
          <a href="#" className={classes.type}>Blog</a>
          <a href="#" className={classes.type}>Contact Us</a>
          <a href="#" className={classes.type}>Services</a>
          </Typography>
          <Button color="inherit" size="medium" variant="outlined">signup {onclick = (GoogleSignup)} 
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
