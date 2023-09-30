import React from "react";
import './LeftSide.css'

const LeftSide = () => {
    return (
        <div  className = 'LeftSide'>
        <ul>
            <li>
                <a>Каталог</a>
            </li>
            <li>
                <a>Доставка</a>
            </li>
            <li>
                <a>Статьи</a>
            </li>
            <li>
                <a>Обратная связь</a>
            </li>
        </ul>
    </div>
    )
}

export default LeftSide;