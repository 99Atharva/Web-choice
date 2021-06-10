import React from 'react'
import Card from "../Components/Card";
import {useEffect, useState} from 'react';
import db from '../firebaseconfig';
import "./Work.css";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



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

   

   const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(18),
        width: theme.spacing(20),
        height: theme.spacing(10),
        
      },
      backgroundColor: '#6D9F7E',
      borderWidth: 2,
      borderColor : '#050505',
      
    },
    
    e1 :{

      backgroundColor: ''
    }




  }));
  const classes = useStyles();



    





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
           
           <div  className = "heading">
           <h1>Our Clients</h1>
           </div>
           
           <div className = "wrapper">
          <div className = "c1" >
            <h3>Dronacharya IAS Academy</h3>

          </div>


          <div className = "c2">
            <h3>Samrat Tailors</h3>

          </div>

          <div className = "c3">
            <h3>Dog Kingdom</h3>
          </div>



          </div>



          

              
        </div>  
    )
}

export default Work;
