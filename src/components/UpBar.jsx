import React from 'react'
import './upBar.css'
import delKey from '../content/delKey.png';

export default function UpBar() {
    return (
        <div className='upbar-main'>
            <div className='logo-container'><img className='del-key' src={delKey}/></div>
            <div className='project-name'>Farshad's Portfolio</div>
            <div className='nav-profile'>
            </div>
        </div>
    )
}
