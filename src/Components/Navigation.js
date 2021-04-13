import React from 'react';
import '../Components/Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popover from '@material-ui/core/Popover';
import {auth , provider } from "../firebaseconfig";
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';



function GoogleSignup() {

  auth.signInWithPopup(provider);
  
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  colorsc:{
      backgroundColor:"#37a69c",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  title: {
    flexGrow: 1,

  },
  head:{
    textDecoration:"none",
    color:"#ebebeb",
  },
  typography:{
    padding: theme.spacing(2),
  }
}));

export default function ButtonAppBar() {
  const matches = useMediaQuery('(max-width:940px)');
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (

    
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorsc}>
        <Toolbar>

{/* --------------------- POPER ELEMENT -------------------- */}
{ matches ?
      <div className="Menu">
          <IconButton edge="start" aria-describedby={id} className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon  />
                </IconButton>
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}><ul className="nav-links2">
            <Link to='/services' className="li" onClick={handleClose}>
            <li>Services</li>
            </Link>
            <Link to='/blog' className="li" onClick={handleClose}>
            <li>Blog</li>
            </Link>
            <Link to='/work' className="li" onClick={handleClose}>
            <li>Work</li>
            </Link>
            <Link to='/about' className="li" onClick={handleClose} >
            <li>About</li>
            </Link>
            <Link to='/contact'className="li" onClick={handleClose} >
            <li>Contact Us</li>
            </Link>
          </ul></Typography>
      </Popover>
    </div> : null
}

    {/* -------------------  Poper Element above  ----------------------*/}

          <Typography variant="h5" className={classes.title}>
          <Link to='./' className={classes.head}>
              Web Choice 
              </Link>  
          </Typography>
          {
            matches ? null :  <Typography >
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
            </Typography>
          }
         
          <Button color="inherit" variant="outlined" onClick = {GoogleSignup} classes="login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}