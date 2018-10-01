import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-box">
          <img src="img/Ptn-logo.png" alt="Premium Times logo" className="footer__logo-box" />
        </div>
        <div className="row">
          <div className="footer__navigation-box">
            <div className="col-1-of-3">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item"><a href="#" className="footer__link">Why Join</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Events</a></li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item"><a href="#" className="footer__link">Membership Policy</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
        <hr className="divider-full" />
        <div className="footer__copyright">
          <p> &copy; 2018 Premium Times Services Limited or its affiliated companies. All rights reserved. </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
