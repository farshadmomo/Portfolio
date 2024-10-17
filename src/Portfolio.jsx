import React from "react";
import Navbar from "./components/Navbar.jsx"
import Bio from "./components/Bio.jsx"
import Carousel from "./components/Carousel.jsx";
import Model3d from "./components/Model3d.jsx";
import Slides from "./components/Slides.jsx"
import SideBar from "./components/SideBar.jsx";
import UpBar from "./components/UpBar.jsx";
import MainSection from "./MainSection.jsx"
import Profile from "./components/CUC/Profile.jsx";
import RightBar from "./components/RightBar.jsx";

export default function Portfolio() {
    const [sideCategory,setSideCategory] = React.useState('Bio')
    const handlerFunction = (data) => {
        setSideCategory(data)
    }
    return(
        <div>
            {/*<Navbar />*/}
            <UpBar />
            <div style={{display:'flex'}}>
                <SideBar handlerFunction={handlerFunction}/>
                <MainSection category={sideCategory} handlerFunction={handlerFunction}/>
                <RightBar />
                {/*{console.log(sideCategory)}*/}
                {/*<Profile />*/}
            </div>
            {/*<Bio />*/}
            {/*<Slides />*/}
        </div>
    )
}
