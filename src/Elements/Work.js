import React from 'react'
import Card from "../Components/Card";
import {useEffect, useState} from 'react';
import db from '../firebaseconfig';
import "./Work.css";
import UploadFile from '../Components/Upload';


function Work() {


    const [posts , setPosts ] = useState([]);


    useEffect(() => { 
       db.collection('images').onSnapshot(snapshot => {
   
         setPosts(snapshot.docs.map(doc => ({ 
           id: doc.id,
           post :  doc.data()
         }))) ;
     })
   }, []);


    





    return (
        <div className="back">
           <h1>Our Work</h1> 
           <div className="container">
             
             {

                posts.map(({id , post}) => (
                  <Card  key = {id} image = {post.image} title = {post.title} /> 
                ))

             } 
             
            
           </div>  

           <UploadFile />      
        </div>  
    )
}

export default Work;
