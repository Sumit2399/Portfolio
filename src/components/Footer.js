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
            <a href="https://www.linkedin.com/in/sumit-dhyani-53470a1b8/" target="_blank">
                <LinkedInIcon/>
                </a>
                <a href="mailto:sumit2399@gmail.com" target="_blank">
                <MailIcon/>
                </a>
                <a href="https://github.com/Sumit2399" target="_blank">
                <GitHubIcon/>
                </a>
                <a href="https://www.instagram.com/sumitdhyani99/" target="_blank">
                <InstagramIcon/>
                </a>
            </div>
            
            
        </div>
    );
}

export default Footer;