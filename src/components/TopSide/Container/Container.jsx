import React from "react";
import './Container.css'
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RIghtSide";

const Container = () => {
    return (
        <div className="Container">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

export default Container;

