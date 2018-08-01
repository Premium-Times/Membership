// The jumbo section of the website

import React, { Component } from "react";

class BrandHeader extends Component {

    render(){
        return (

            <header className="header">
            <div className="header__navigation">
                    
                    <img src="img/Ptn-logo.png" alt="Premium Times Logo" className="header__logo"></img>
        
                    <nav className="header__navigation--bar">
                        <ul className="header__navigation--items">
                            <li className="header__navigation--item"><a href="#" className="header__link">About </a></li>
                            <li className="header__navigation--item"><a href="#" className="header__link">Why Join </a></li>
                            <li className="header__navigation--item"><a href="#" className="header__link">Events </a></li>
                            <li className="header__navigation--item"><a href="#" className="header__link">Contact </a></li>
                        </ul>
                    </nav>
                    <div className="header__botton"> 
                        <a className="btn" href="#">Sign Up</a>
                        <a className="btn" href="#">Log In</a>
                    </div>
            </div>
                    
        
            <div className="header__text-box">
                    <h1 className="heading-primary">
                            <span className="heading-primary--main">BOLD JOURNALISM, BOLD SUPPORTERS</span>
                            <span className="heading-primary--sub"> Join Premium Times Members to support our journalism, and enjoy a programme of fantastic member events </span>
            
                    </h1> 
                    
                    <a href="#" className=" btn btn--white">JOIN</a>
            </div>
            
        </header>

        )
    }
}

export default BrandHeader;