import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skillD from "../skillD.js";
import CircularP from "./CUC/CircularP.jsx";
import './multipleRowSlider.css';
import useSwipe from "./CUC/useSwipe.tsx";

function MultipleRows() {
    let sliderRef = React.useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const swipeHandlers = useSwipe({ onSwipedUp: next, onSwipedDown: previous });



    const settings = {
        className: "center",
        arrows:false,
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    autoplay: true,
                    draggable:false,
                    autoplaySpeed:2000,
                    pauseOnHover: true,
                },
            },
        ],
    };
    return (
        <div className="slider-container">
            <div {...swipeHandlers}>
            <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
            >
                {skillD.map(skill => {
                return(
                    <div>
                        <CircularP
                            percent={skill.percentage}
                            skillTitle={skill.skillName}
                        />
                        <h4 className='skill-titles'>{skill.skillName}</h4>
                    </div>
                )})}
            </Slider>
            </div>
        </div>
    );
}

export default MultipleRows;
