import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import {useEffect, useState} from 'react';
import db from '../firebaseconfig';


function Contact() {

    const [name , setName ] = useState('');
    const [email , setEmail ] = useState('');
    const [phone , setPhone ] = useState('');
    const [message , setMessage ] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email : email,
            phone: phone,
            message : message

        })
    }














    return (
        <div className="head"><h2>Contact</h2>
        <div className="form" >
            
            <form className="feedback"  onSubmit = {handlesubmit}>
            <div className="fields">
            <TextField required id="standard-required" 
            label="name" type="Name"  variant="outlined"  value = {name}
            onChange = { (e) => setName(e.target.value) } />
            </div>
            
            <div className="fields">
            <TextField required id="standard-required" 
            label="email"  variant="outlined"
            value = {email}
            onChange = { (e) => setEmail(e.target.value)} />
            </div>

            <div className="fields">
            <TextField  id="standard" 
            label="phone"  variant="outlined" 
            value = {phone} 
            onChange = {(e) => setPhone(e.target.value)} />
            </div>

            <div className="fields">
            <TextField className="messagebox"
            id="outlined-multiline-static"
            label="message"
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
            />
            
            </div>
           <Button  variant="outlined"  >Submit</Button>
           

            </form>
            
            <div className="contact">
                
                <div className="phone">
                   <PhoneIcon fontSize="large" color="action" /> 
                   <h4>+91 8349387273</h4>
                   <h4>+91 7987851366 </h4> 
                   <h4>+91 9630868841 </h4> 
                  </div>
                   <div className="email">
                   <EmailIcon fontSize="large"  color="error" />
                   <h4>marketing.webchoice@gmail.com </h4> 
                </div>

            </div>
        </div>
        </div>
    )
}

export default Contact;