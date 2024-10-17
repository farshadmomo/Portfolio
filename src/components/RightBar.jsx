import React from 'react'
import Profile from "./CUC/Profile.jsx";
import PercentSkill from "./PercentSkill.jsx";
import CircularP from "./CUC/CircularP.jsx";
import './rightBar.css'

export default function RightBar() {
    return (
        <div className='right-bar-container'>
            <Profile />
            <PercentSkill />
            {/*<CircularP />*/}
        </div>
    )
}
