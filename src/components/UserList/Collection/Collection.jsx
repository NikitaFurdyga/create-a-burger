import React from "react";
import LeftCollection from "./LeftCollection/LeftCollection";
import RightCollection from "./RightCollection/RightCollection";

const Collection = () => {
    return (
        <div className="Collection">
            <LeftCollection/>
            <RightCollection/>
        </div>
    )
}

export default Collection;