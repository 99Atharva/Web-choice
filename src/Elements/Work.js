import React from 'react'
import Card from "../Components/Card";
import {useEffect, useState} from 'react';
import db from '../firebaseconfig';


function Work() {


    const [posts , setPosts ] = useState([]);


    useEffect(() => { 
       db.collection('users').onSnapshot(snapshot => {
   
         setPosts(snapshot.docs.map(doc => ({ 
           id: doc.id,
           post :  doc.data()
         }))) ;
     })
   }, []);






    return (
        <div>
           <h1>Work</h1> 
           
      {

posts.map(({id , post}) => (
  <Card  key = {id} image = {post.image} title = {post.title} /> 
))

}
           
        </div>
    )
}

export default Work;
