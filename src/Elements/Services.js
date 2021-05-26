import React from 'react';
import "./Services.css";
import Button from "@material-ui/core/Button";

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { useState} from 'react';
import db from '../firebaseconfig';





function Services() {

    


        const [open, setOpen] = React.useState(false);
    
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };



        const [name , setName ] = useState('');
        const [email , setEmail ] = useState('');
        const [phone , setPhone ] = useState('');

        const submitHandler = (e) => {

             e.preventDefault();

             db.collection('feedback').add({
                name: name,
                email : email,
                phone: phone,
                
    
            })
            .then(()=> {
                alert("Response has been Submitted 👍");
            })
    
            setName("");
            setEmail("");
            setPhone("");
            
        };


     const [info,setInfo]  = useState( [

     {title : 'Submission form', subtitle : 'Submit the following form after reading the T&c Carefully', }






     ])


        
    return (
        <div className="service">
            <h1>Services</h1>
            <div className="container">
                {/* Card */}

                <diV className="plan_box">
                   
                    <div className="head">
                        
                       <h3>SMM Bronze 🥉 </h3>
                       <p>₹ 3500  <span>+ Ad spent</span></p>
                       
                    </div>
                   
                    <div className="features">
                        <h3>Duration : 1 Month</h3>
                        <ul>
                            <li>
                                Account Handling 
                            </li>
                            <li>
                                Audience Research
                            </li>
                            <li>
                                Strategy Preprations
                            </li>

                            <li>
                                 Color Corrections  ✔️
                                 
                            </li>
                            
                            <li>
                                Font Changes ✔️
                            </li>
                        </ul>
                    </div>
                   
                    <div className="btn">
                    <Button variant="contained" color="inherit" className="MuiButton-root"  onClick = {handleClickOpen}>
                        Get Started 

                    </Button>
                    <Dialog open = {open} onClose = {handleClose} >

                      <DialogTitle><h2  >Submission Form</h2> </DialogTitle>

                      <DialogContent>

                      <DialogContentText>
                         <h3> Submit the following form after reading the T&c Carefully  </h3>

                          <p>    </p>     
                        
                          

                          Package Includes 👇

                          <p>    </p>   
                        👉Content Creation : 2500
                        (10 Posts per Month)
                        <p>    </p>   
                        👉Operational Cost : 1000
                        (Account Handling, Audience Research and Strategy Preprations)
                        <p>    </p>   
                        👉Paid Promotion : 1k to 5k
                        (Paid to Social Media Platforms)
                        <p>    </p>   
                        Privileges 👇
                        <p>    </p>   
                        👉Color corrections ✅ 
                        <p>    </p>   
                        👉Font Changes ✅

                      </DialogContentText>

                      <TextField
                        autoFocus
                        margin="dense"
                        id="name1"
                        label="Name"
                        type="text"
                        fullWidth
                        value = {name}
                        onChange={(e)=> setName(e.target.value )} 
                         />

                      <TextField
                         
                        margin="dense"
                        id="name2"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value = {email}
                        onChange={(e)=> setEmail(e.target.value )}
                         />



                       <TextField
                        
                        margin="dense"
                        id="name2"
                        label="Phone"
                        type="number"
                        fullWidth
                        value = {phone}
                        onChange={(e)=> setPhone(e.target.value )}
                         />

                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={submitHandler} color="primary">
                            Submit 
                        </Button>
                        </DialogActions>





                    </Dialog>
                     
                    </div>

                </diV>
                

                {/* Card */}
                {"              "}

                <diV className="plan_box">
                   
                    <div className="head">
                       <h3>SMM Silver  🥈 </h3>
                       <p>₹ 4000 <span>+ Ad spent </span></p>
                    </div>
                   
                    <div className="features">
                    <h3>Duration : 1 Month</h3>
                        <ul>
                        <li>
                                Account Handling 
                            </li>
                            <li>
                                Audience Research
                            </li>
                            <li>
                                Strategy Preprations
                            </li>

                            <li>
                                 Color Corrections  ✔️
                                 
                            </li>
                            
                            <li>
                                Font Changes ✔️
                            </li>

                            <li>
                            Two variants for same design ✔️
                            </li>
                        </ul>
                    </div>
                   
                    <div className="btn">
                    <Button variant="contained" color="inherit" className="MuiButton-root">
                    Get Started
                    </Button>
                    </div>

                </diV>
                
                <diV className="plan_box">
                   
                   <div className="head">
                      <h3>SMM Gold  🥇 </h3>
                      <p>₹ 5000 <span>+ Ad spent</span></p>
                   </div>
                  
                   <div className="features">
                   <h3>Duration : 1 Month</h3>
                       <ul>
                       <li>
                                Account Handling 
                            </li>
                            <li>
                                Audience Research
                            </li>
                            <li>
                                Strategy Preprations
                            </li>

                            <li>
                                 Color Corrections  ✔️
                                 
                            </li>
                            
                            <li>
                                Font Changes ✔️
                            </li>

                            <li>
                            Two variants for same design ✔️
                            </li>

                            <li>
                                Design Modifications ✔️
                            </li>
                       </ul>
                   </div>
                  
                   <div className="btn">
                   <Button variant="contained" color="inherit" className="MuiButton-root">
                   Get Started
                   </Button>
                   </div>

               </diV>
            </div>

            <div className="text">
                We Offer not just what you want but what you need
                <p>
                We all live in a world where we start the day with social media and end the day with it .  
                So what possibly could be better option than not to Promote your own brand on social media ! But we completely understand the amount of work you do to run your buisnesses , so here we are : Webchoice , to help you Engage with your customers, watch your social following grow, and increase social media results and establish your brand as an authority in your niche.
                Let Webchoice's Social Media Management experts drive your social media efforts to help increase followers, maximize brand awareness and gain revenue. Our experienced team can turn your business vision into a cohesive social persona for your brand.
                Have you ever seen Zomato's / Swiggy's social media Handles ? They have a very strong social media marketing team which makes there content relatable , funny and most Important " Marketable". Being Said that , the most Important part of today's social media marketing is memes and we are the best in buisness when it comes to memes :P .
                We have a very stong media presence in Chattisgarh ( Espicially Durg and Bhilai) with over 50k followers combining our both social media handles (Tag Both ).
                And if are still not sure about the social media marketing , watch our previous projects to build your faith in us and start a Buisness relation with us ! 

                </p>
            </div>
        </div>
    )
}

export default Services;
