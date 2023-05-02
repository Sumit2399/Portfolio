import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css"

function Footer(props) {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon/>
                <MailIcon/>
                <GitHubIcon/>
                <InstagramIcon/>
            </div>
            <p>&copy;2023 sumit.com</p>
            
        </div>
    );
}

export default Footer;