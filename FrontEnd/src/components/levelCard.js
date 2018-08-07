// High level card used to diaplay membership level information

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLevels } from "../actions";

class LevelCard extends Component {
    constructor(props){
        super(props);
        this.props.fetchLevels();
    }

   
    renderEachCard(){
        // TODO: replace LOADING with Spinner
        if(this.props.memberLevels.items.levels === undefined){
            return(
                <div>
                    <h2> LOADING 2</h2>
                </div>
            )
        }
        return this.props.memberLevels.items.levels.map((level) => {
            return (
                <div key={level._id} className="col-1-of-4">
                <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                            &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span-1">
                                {level.title}
                        </span>
                            
                    </h4>
                    <div className="card__details">
                            <ul>
                                {this.renderDescriptors(level.descpriptors)}
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
                                    ₦{level.monthly}/year
                                </p>
                                <p className="card__price-value-year">
                                    ₦{level.annual}/year
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
        });
    }
    renderDescriptors(descriptors){
        return descriptors.map(descriptor => {
            return(
                <li>{descriptor}</li>
            )
        })
    }
    render(){
        if(this.props.memberLevels.loading){
            return (
                <div>
                    <h2>Loading ...</h2>
                </div>
            );
        }
        return(
            <div>
                {this.renderEachCard()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return{ memberLevels: state.levels}
   
};
export default connect(mapStateToProps, { fetchLevels })(LevelCard);
