import React from 'react';
import useStorage from './useStorage';
import { useEffect } from 'react';

const ProgressBar = ({file, setFile}) => {
    const {url,progress} =useStorage(file);
    
useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
console.log(progress);
  return (
      <div className="progress" style={{width:progress + '%'}}></div>
  )

}

export default ProgressBar;
