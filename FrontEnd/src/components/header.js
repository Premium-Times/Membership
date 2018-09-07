import React, { Component } from "react";

class Header extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <header className="">
        <div className="header__navigation">

          <img src="img/Ptn-logo.png" alt="Premium Times Logo" className="header__logo" />

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
      </header>
    );
  }
}

export default Header;
