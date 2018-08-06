// High level card used to diaplay membership level information

import React, { Component } from "react";
import {connect} from "react-redux";

class LevelCard extends Component {

    renderEachCard(levelArray){

        levelArray.forEach((level) => {
            return (
                <div className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                            &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span-1">
                                {level.name}
                        </span>
                            
                    </h4>
                    <div className="card__details">
                            <ul>
                                <li>Support the independence of the Premium Times and our award-winning journalism</li>                                            
                                <li>Get Welcome Package</li>
                                <li>Insider Programs</li>
                                <li>Four Tickets to Premium Times Events</li>
                                <li>Weekly Briefings</li>
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
                                    ₦{level.monthlyCost}/year
                                </p>
                                <p className="card__price-value-year">
                                    ₦{level.annualCost}/year
                                </p>
                            </div>
                            <a href="#" className="btn btn--white">
                                Join Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            )
        }, this);

    }
    render(){
        return(
            <div className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                            &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span-1">
                                Supporter
                        </span>
                            
                    </h4>
                    <div className="card__details">
                            <ul>
                                <li>Support the independence of the Premium Times and our award-winning journalism</li>                                            
                                <li>Get Welcome Package</li>
                                <li>Insider Programs</li>
                                <li>Four Tickets to Premium Times Events</li>
                                <li>Weekly Briefings</li>
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
                                        ₦10,000/Month
                                </p>
                                <p className="card__price-value-year">
                                        ₦100,000/year
                                </p>
                            </div>
                            <a href="#" className="btn btn--white">
                                Join Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    console.log(state );
   
};
export default connect(mapStateToProps)(LevelCard);
