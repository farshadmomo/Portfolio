import React from 'react'
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";

export default function CircularP(props) {
    return (
        <div style={{display:'flex',flexDirection:'column',width:'70px',margin:'0px auto'}}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={props.percent}
                duration={1}
                easingFunction={easeQuadInOut}
            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: "none",pathColor:'#FF662E',textColor:'#FF662E'})}
                        />
                    );
                }}
            </AnimatedProgressProvider>
        </div>
    )
}
