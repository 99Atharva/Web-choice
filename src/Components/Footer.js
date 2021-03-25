import React from 'react';
import '../Components/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';

function Footer() {
    return (
        <div className="footer_box">
            <div className="left">
                <h2>About Us </h2><br />
                <p>Just a bunch of student who wants to be someone from no-one. We just want to
                    help you focus on the work and leave advertising and other works on us.
                    Let us be your hands.
                </p>
            </div>
            <div className="social_links">
            <IconButton className="icon">
            <FacebookIcon fontSize="large" color="primary"  />
            </IconButton>
            <IconButton > 
            <TwitterIcon fontSize="large" className="twitter"/>
            </IconButton>
            <IconButton >
            <InstagramIcon fontSize="large" color="secondary" />
            </IconButton>
            </div>
            <div className="contact">
                <h4>Get In touch</h4>
                <div className="details">
                <PhoneIcon  fontSize="small" /> 99XXXXX, <br/>
                Address - 12/24 Karol Bagh,
                </div>
            </div>
        </div>
    )
}

export default Footer;
