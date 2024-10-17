import React from 'react'
import './sideBar.css'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import UpdateIcon from '@mui/icons-material/Update';


export default function SideBar({handlerFunction}) {
    return (
        <div className='slide-main' >
            <div className='side-bar-icons' style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px',marginTop:'50px'}}>
                <FingerprintIcon className='icons' fontSize="medium" sx={{height:'50px'}}  onClick={() => handlerFunction('Bio')}/>
                <PermMediaIcon className='icons' fontSize="medium" sx={{height:'50px'}}  onClick={() => handlerFunction('Projects')}/>
                <WorkOutlineIcon className='icons' fontSize="medium" sx={{height:'50px'}}  onClick={() => handlerFunction('Work')}/>
                <UpdateIcon className='icons' fontSize='medium' sx={{height:'50px'}}  onClick={() => handlerFunction('Update')}/>
            </div>
            <div></div>
        </div>
    )
}
