import React from 'react'
import './percentSkill.css'
import skillD from "../skillD.js";
import CircularP from "./CUC/CircularP.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import { FreeMode, Pagination } from 'swiper/modules';
import MultipleRowSlider from "./MultipleRowSlider.jsx";

export default function PercentSkill() {
    return (
        <div className='pskill-container' >
            <div className='pskill-header'>SKILLS</div>
            {/*<div className='lang-skills'>*/}
            {/*    <div style={{height:'200px'}}>*/}
            {/*    <Swiper*/}
            {/*        slidesPerView={3}*/}
            {/*        spaceBetween={30}*/}
            {/*        freeMode={true}*/}
            {/*        // pagination={{*/}
            {/*        //     clickable: true,*/}
            {/*        //     dynamicBullets: true,*/}
            {/*        // }}*/}
            {/*        modules={[FreeMode, Pagination]}*/}
            {/*        className="mySwiper"*/}
            {/*    >*/}
            {/*        {skillD.map(skill => {*/}
            {/*            return(*/}
            {/*                // <div className="skill-box">*/}
            {/*                //     <span className="title">{skill.skillName}</span>*/}
            {/*                //*/}
            {/*                //     <div className="skill-bar">*/}
            {/*                //         <span className="skill-per" style={{    width:`${skill.percentage}`, animationDelay: "0.5s"}}>*/}
            {/*                //               <span className="tooltip">{skill.percentage}</span>*/}
            {/*                //          </span>*/}
            {/*                //     </div>*/}
            {/*                // </div>*/}




            {/*            <SwiperSlide style={{height:'150px'}}>*/}
            {/*                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>*/}
            {/*                <CircularP*/}
            {/*                percent={skill.percentage}*/}
            {/*                skillTitle={skill.skillName}*/}
            {/*            />*/}
            {/*                <div style={{marginLeft:'25px'}}>{skill.skillName}</div>*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*            )*/}
            {/*        })}*/}


            {/*    </Swiper>*/}
            {/*        <Swiper*/}
            {/*            slidesPerView={3}*/}
            {/*            spaceBetween={30}*/}
            {/*            freeMode={true}*/}
            {/*            pagination={{*/}
            {/*                clickable: true,*/}
            {/*                dynamicBullets: true,*/}
            {/*            }}*/}
            {/*            modules={[FreeMode, Pagination]}*/}
            {/*            className="mySwiper"*/}
            {/*        >*/}
            {/*            {skillD.map(skill => {*/}
            {/*                return(*/}
            {/*                    // <div className="skill-box">*/}
            {/*                    //     <span className="title">{skill.skillName}</span>*/}
            {/*                    //*/}
            {/*                    //     <div className="skill-bar">*/}
            {/*                    //         <span className="skill-per" style={{    width:`${skill.percentage}`, animationDelay: "0.5s"}}>*/}
            {/*                    //               <span className="tooltip">{skill.percentage}</span>*/}
            {/*                    //          </span>*/}
            {/*                    //     </div>*/}
            {/*                    // </div>*/}

            {/*                    <SwiperSlide style={{height:'150px'}}>*/}
            {/*                        <CircularP*/}
            {/*                            percent={skill.percentage}*/}
            {/*                            skillTitle={skill.skillName}*/}
            {/*                        />*/}

            {/*                    </SwiperSlide>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </Swiper>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div style={{width:'17vw',paddingTop:'20px'}}>
                <MultipleRowSlider />
            </div>

        </div>
    )
}
