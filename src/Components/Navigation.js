import React from 'react';
import '../Components/Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {auth , provider } from "../firebaseconfig";
import { Link } from "react-router-dom";

function GoogleSignup() {

  auth.signInWithPopup(provider);
  
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  bgco:{
    backgroundColor: '#cceabb',
  },

  title: {
    flexGrow: 1,
    color: '#3f3f44',
    fontWeight: 600,
    fontSize: 25,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgco}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           <Link to='./' className="li">
           Web Choice
           </Link>  
          </Typography>
          
          <ul className="nav-links">
            <Link to='/services' className="li">
            <li>Services</li>
            </Link>
            <Link to='/blog' className="li">
            <li>Blog</li>
            </Link>
            <Link to='/work' className="li">
            <li>Work</li>
            </Link>
            <Link to='/about' className="li">
            <li>About</li>
            </Link>
            <Link to='/contact'className="li">
            <li>Contact Us</li>
            </Link>
          </ul>
          <Button color="black" size="medium" variant="outlined" 
          onClick = {GoogleSignup} classes="login"> Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



