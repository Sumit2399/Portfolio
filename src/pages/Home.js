import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"
function Home(props) {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi,My Name is Sumit.</h2>
                <div className='prompt'>
                    <p>A software developer with a passion for leanrning and creating.</p>
                <LinkedInIcon/>
                <MailIcon/>
                <GitHubIcon/>
                </div>
            </div>
           <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                     <span>ReactJS,Redux,HTML,CSS,MaterialUI</span>   
                </li>

                <li className='item'>
                    <h2>Back-End</h2>
                    <span>NodeJS,.NET,ExpressJS,MySQL,MongoDB</span>
                </li>

                <li className='item'>
                    <h2>Languages</h2>
                    <span>JavaScript,Java,C,C#,Python</span>
                </li>
            </ol>
           </div>
        </div>
    );
}

export default Home;