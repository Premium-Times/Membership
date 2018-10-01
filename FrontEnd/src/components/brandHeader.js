// The jumbo section of the website

import React, { Component } from "react";
import { Link } from "react-router-dom";

class BrandHeader extends Component {
  componentDidMount() {

  }

  render() {
    return (

      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">BOLD JOURNALISM, BOLD SUPPORTERS</span>
            <span className="heading-primary--sub"> Join Premium Times Members to support our journalism, and enjoy a programme of fantastic member events </span>

          </h1>

          <Link className="btn btn--white" to="/register">JOIN</Link>
        </div>

      </header>

    );
  }
}

export default BrandHeader;
