import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import delKey from '../content/delKey.png';
import "./styles.css"

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <div>Farshad Momtaz</div>
                <img className='del-key' src={delKey}/>
            </div>
            <div className='tabs-container'>
                <div className='home-tab'>Home</div>
                <div className='skills-tab'>Skills</div>
                <div className='projects-tab'>Projects</div>
            </div>
            <div className='social-container'>
                <div><a href="https://www.instagram.com/farshadmomtaz/" target="_blank"><InstagramIcon /></a></div>
                <div><a href="https://www.linkedin.com/in/farshadmomtaz/" target="_blank"><LinkedInIcon /></a></div>
                <div><a href="https://github.com/farshadmomo" target="_blank"><GitHubIcon /></a></div>
            </div>
        </div>
    )
}
