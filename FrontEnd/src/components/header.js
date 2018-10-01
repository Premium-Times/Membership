import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <li className="header__navigation--item"><Link className="header__link" to="/about">About </Link></li>
              <li className="header__navigation--item"><a href="#" className="header__link">Why Join </a></li>
              <li className="header__navigation--item"><a href="#" className="header__link">Events </a></li>
              <li className="header__navigation--item"><a href="#" className="header__link">Contact </a></li>
            </ul>
          </nav>
          <div className="header__botton">
            <Link className="btn" to="/register">Sign Up</Link>
            <a className="btn" href="#">Log In</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
