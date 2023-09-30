import React from "react";
import Header from './Header/Header'
import Container from "./Container/Container";
import './TopSide.css'

const TopSide = () => {
    return( 
        <div className="TopSide">
            <Header/>
            <Container/> 
    </div>
    )

}

export default TopSide;