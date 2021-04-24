import { useState, useEffect } from 'react';
import { storage,db } from '../firebaseconfig';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
     const storageRef = storage.ref(`ProImg/${file.name}`);
     console.log("okay");
     storageRef.put(file).on('state_changed', 
     (snapshot)=> {
       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setProgress(progress);
       console.log('upload is' + progress + '% done');
     }, (error)=> {
       
       setError(console.log("something went wrong"));
     },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      console.log('File available at', url);
    });
  
},[file]);

  return { progress, url, error };
}

export default useStorage;
