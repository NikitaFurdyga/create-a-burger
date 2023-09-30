import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
                <div className="NavbarTop">
                    <h1>Каталог</h1>
                    <div className="Roster">
                    <span>Парфюмерия</span>
                    <span>Крема</span>
                    <span>Губные помады</span>
                </div>
            </div>
            <form className="NavbarBottom"></form>
        </div>
        )
}

export default Navbar;