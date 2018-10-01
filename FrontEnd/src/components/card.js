// Used in displaying levels cards

import React from "react";

const getRandomInt = () => {
  return Math.random().toString(36).substr(2, 9);
}
const renderDescriptors = (descriptors) => {
  return descriptors.map(descriptor => (
    <li key={getRandomInt()}>{descriptor}</li>
  ));
};

const Card = ({ id, title, descriptors, monthly, annual }) => {
  return (
    <div key={id} className="col-1-of-4">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1">
                            &nbsp;
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span-1">
              {title}
            </span>

          </h4>
          <div className="card__details">
            <ul>
              {renderDescriptors(descriptors)}
            </ul>
          </div>
        </div>

        <div className="card__side card__side--back card__side--back-1">
          <div className="card__call-to-action">
            <div className="card__price-box">
              <p className="card__price-only">
                                    Only
              </p>
              <p className="card__price-value-month"> 
                    ₦
                {monthly}
                    /year
              </p>
              <p className="card__price-value-year">
                    ₦
                {annual}
                    /year
              </p>
            </div>
            <a href="#" className="btn btn--white"> Join Now </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
