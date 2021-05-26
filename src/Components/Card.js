import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "../Components/Card.css";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    outline:0,
    width: theme.spacing(100),
    height:theme.spacing(60),
    borderRadius:7,
    backgroundSize: "cover",
    boxShadow: theme.shadows[5],
  },
}));

export default function SimplePaper({image , title }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const body = (
    <h2>Hi there fellas </h2>
  )

  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={7} className="image" onClick={handleOpen}>
          <img src={image} alt="project"/>
          <div className="overlay">
            <span>{title}</span>
          </div>
        </Paper>
      </div>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500, 
        }}
      >
        
        
        <Fade in={open}>
          <div className={classes.paper} >
            {/* <h2 id="transition-modal-title">Transition modal</h2> */}
            <img src={image} alt="project" className={classes.paper} />
          </div>
        </Fade>
    
      </Modal>
    </div>
    
  );
}

