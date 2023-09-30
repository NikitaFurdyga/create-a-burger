import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header className="Header">
            <p className="item"> +7 (999) 999-99-99 </p>
            <img src="https://static.insales-cdn.com/assets/1/3309/888045/1668370167/logo_1.png" class="logo-image" alt="Beauty" title="Beauty"></img>
            <p className="cost"> 10.00 руб</p>
        </header>
    )
}

export default Header;