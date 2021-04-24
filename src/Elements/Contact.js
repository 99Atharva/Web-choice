import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState} from 'react';
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
        .then(()=> {
            alert("Message has been Submitted 👍");
        })

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };














    return (
       <div className="Feedback">
           <div className="detail">
            <div className="call">
           <h3>📞 Phone -</h3>  
           <p>8349387273</p>
           <p>7987851366</p>
            </div>
            <p className="mail">📧 Mail- <br/> marketing.webchoice@gmail.com</p>
           </div>
        <form className="Form" onSubmit={handlesubmit} >
            <div>
            <TextField id="outlined-basic" label="Name" required
            variant="outlined"  margin="normal" value={name} 
            onChange={(e)=> setName(e.target.value )} /> 
            </div>
            
            <div>
            <TextField id="outlined-basic" label="Email" required
            variant="outlined" margin="normal"  value={email} 
            onChange={(e)=> setEmail(e.target.value )} /> 
            </div>

            <div>
            <TextField id="outlined-basic" label="Phone" required
            variant="outlined" margin="normal" value={phone} 
            onChange={(e)=> setPhone(e.target.value )} /> 
            </div>

            <div>
               <p>Tell us your problem</p> 
            <TextField
          id="outlined-multiline-static"
          label="Message"
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
            </div>
            
            <div className="btn" >
            <Button variant="outlined" type="submit">
               Submit
           </Button>
            </div>
           
        

            

        </form>  
  </div>
    )
}

export default Contact;