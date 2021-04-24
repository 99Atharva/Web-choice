import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button} from '@material-ui/core';
import ProgressBar from './Progress';

 function UploadFile() {
  
  const [file, setFile ] = useState(null);

const useStyles = makeStyles((theme) => ({
  root: {
     textAlign:'center',
      paddingBottom:50,
     '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  style: {
    background:'#b3ffff',
    borderRadius:'50%',
    lineHeight:2.4,
    padding:'8px 16px',
    fontSize:20,
    color:'#4d4d4d'
    
  }
}));

  const changeHandler = e => {
     if(e.target.files[0]){
      setFile(e.target.files[0]);
     }
  };
  
 
  const classes = useStyles();
  return (
  
      <div className={classes.root}>
    
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={changeHandler} />
      <label htmlFor="icon-button-file" >
      <Button className={classes.style}  variant="contained" size="large" component="span" >
          +
        </Button>
        
      </label>
      {file && <ProgressBar file={file} setFile={setFile} />}
    </div>  
  );
  }

export default UploadFile;