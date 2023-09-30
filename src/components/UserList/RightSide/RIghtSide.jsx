import React from "react";
import './RightSide.css'

const RightSide = () => {
    return (
        <div className="RightSide">
        <form>
            <input type="text" placeholder="Поиск по сайту"></input>
            <button type="submit" className="search">
                <svg xmlns="http://www.w3.org/2000/svg" class="rightside-icon" width="15.5" height="14.486"></svg>
            </button>
            <div className="diagram">
                <svg xmlns="http://www.w3.org/2000/svg" class="rightside-icon" width="15" height="16"></svg>
            </div>
            <div className="person">
                <svg xmlns="http://www.w3.org/2000/svg" class="rightside-icon" width="16" height="16"></svg>
            </div>
        </form>
    </div>
    )
}

export default RightSide;