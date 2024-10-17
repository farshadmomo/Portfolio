import React from 'react'
import './mainSection.css'
import Bio from "./components/Bio.jsx";

export default function MainSection(props) {
    function mainContent(props) {
        const {category} = props

        switch (category) {
            case 'Bio':
                return <Bio />;
            case 'Projects':
                return <div>yooyo</div>;
            default:
                return <div>nono</div>;
        }
    }
    return (
            <div className='mainSection-container'>
                <div className='tabs-container'>
                    <div className='main-section-title' onClick={() => props.handlerFunction('Bio')} style={{height:'40px',width:'90px',background:`${props.category==='Bio'?'rgba(255,255,255,0.2)':''}`,borderRadius:'30px',margin:'10px 5px 10px 25px',display:"flex",justifyContent:'center',alignItems:'center',fontSize:'14px',fontWeight:'bold',cursor:'pointer',transition:'0.5s'}}>
                        Bio
                    </div>
                    <div className='main-section-title' onClick={() => props.handlerFunction('Projects')} style={{height:'40px',width:'90px',background:`${props.category==='Projects'?'rgba(255,255,255,0.2)':''}`,borderRadius:'30px',margin:'10px 5px 10px 10px',display:"flex",justifyContent:'center',alignItems:'center',textAlign: 'center',fontSize:'14px',fontWeight:'bold',cursor:'pointer',transition:'0.5s'}}>
                        Projects
                    </div>
                    <div className='main-section-title' onClick={() => props.handlerFunction('Work')} style={{height:'40px',width:'90px',background:`${props.category==='Work'?'rgba(255,255,255,0.2)':''}`,borderRadius:'30px',margin:'10px 5px 10px 10px',display:"flex",justifyContent:'center',alignItems:'center',textAlign: 'center',fontSize:'14px',fontWeight:'bold',cursor:'pointer',transition:'0.5s'}}>
                        Work
                    </div>
                    <div className='main-section-title' onClick={() => props.handlerFunction('Update')} style={{height:'40px',width:'90px',background:`${props.category==='Update'?'rgba(255,255,255,0.2)':''}`,borderRadius:'30px',margin:'10px 5px 10px 10px',display:"flex",justifyContent:'center',alignItems:'center',textAlign: 'center',fontSize:'14px',fontWeight:'bold',cursor:'pointer',transition:'0.5s'}}>
                        Updates
                    </div>
                </div>
                {mainContent(props)}
            </div>
    )
}
