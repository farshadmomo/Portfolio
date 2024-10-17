import React from "react";
import bioBg from '../content/gradientBG1.gif'
import bioPhoto from '../content/farshads-resume-photo.png'
import './styles.css'
import {ContactUs} from "./CUC/ContactUs.jsx";

export default function Bio() {
    return (
        <div style={{margin:'0 25px'}}>
            <div style={{fontFamily:"sans-serif", fontSize:'18px',color:'black',fontWeight:'bold',marginBottom:'20px'}}>
            Hi my name is farshad momtaz and i'm a front end developer(going for becoming a full stack developer).<br/><br/>
            I study computer engineering in Tehran Markaz university.(im in my 3rd year now)<br/><br/>
            I'm open to learning new things such as new programming languages like vue.js and React Native<br/><br/>
            or new tools like how i learned spline for this project<br/><br/>
            And i'm open to get more portfolio projects in the future<br/><br/>
            so if you want a portfolio project you can contact me via email:<br/><br/>
            </div>
            <ContactUs />
        </div>
    )
}
