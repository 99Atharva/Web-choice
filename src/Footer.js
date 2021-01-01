import React from 'react';
import './Footer.css';
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
                <p>Tomcat siamese, sphynx. Balinese cougar. Scottish fold ocelot yet cheetah and american shorthair ocicat for tom. Jaguar puma. Cheetah panther yet grimalkin. Ragdoll russian blue savannah yet cornish rex but grimalkin so scottish fold. Devonshire rex turkish angora and kitty.</p>
            </div>
            <div className="social_links">
            <IconButton>
            <FacebookIcon fontSize="large" color="primary" />
            </IconButton>
            <IconButton> 
            <TwitterIcon fontSize="large" className="twitter" />
            </IconButton>
            <IconButton>
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
