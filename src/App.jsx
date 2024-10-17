import Portfolio from "./Portfolio.jsx";
import React from "react";
import Model3d from "./components/Model3d.jsx";

const App = () => {
    return (
        <>
            <Portfolio />
            <div style={{position:'absolute',left:'-10%',top:'0px',zIndex:'-10'}}><Model3d /></div>
        </>
    );
};

export default App;
