import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';

function Contact() {
    return (
        <div className="head"><h2>Contact</h2>
        <div className="form" >
            
            <div className="feedback">
            <div className="fields">
            <TextField required id="standard-required" 
            label="Name" type="Name"  variant="outlined" />
            </div>
            
            <div className="fields">
            <TextField required id="standard-required" 
            label="Email"  variant="outlined" />
            </div>

            <div className="fields">
            <TextField  id="standard" 
            label="Phone"  variant="outlined" />
            </div>

            <div className="fields">
            <TextField className="messagebox"
            id="outlined-multiline-static"
            label="Tell us your problem"
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            />
            
            </div>
           <Button  variant="outlined"  >Submit</Button>
            </div>
            <div className="contact">
                
                <div className="phone">
                   <PhoneIcon fontSize="large" color="action" /> 
                   <h4>+91 7587136525 </h4> 
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
