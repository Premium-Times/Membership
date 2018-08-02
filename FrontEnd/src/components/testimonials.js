import React, { Component } from "react";

class Testimonials extends Component {
    render(){
        return(
            <section className="section-testimonials">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    What People Say About Us
                </h2>
            </div>
            <div className="row">
                <div className="story">
                    <div className="col-1-of-4">
                        <div className="story__profile">
                            <figure className="story__profile--avatar">
                                <img src="./img/musikilu-mojeed.jpg" alt="" className="story__img"/> 
                                <figcaption className="story__caption">
                                    "News you can trust."
                                </figcaption>
                            </figure>
                            <div className="story__profile--name">
                                <h3 className="heading-tertiary u-margin-bottom-tiny">
                                    Musikilu Mojeed
                                </h3>
                            </div> 
                            <div className="story__profile--title">
                                <p>Head of Chancery, Nigerian Embassy, Mars</p>
                            </div> 
                        </div>
                    </div>
                    <div className="col-3-of-4">
                        <div className="story__content">
                            <h3 className="heading-tertiary u-margin-bottom-small">The strongest pillar of Nigerian Democracy</h3>
                                <p className="paragraph">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in laudantium sit illum necessitatibus ex ducimus vitae facilis corporis, repudiandae alias quidem corrupti veniam ea.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in laudantium sit illum necessitatibus ex ducimus vitae facilis corporis, repudiandae alias quidem corrupti veniam ea.                                 
                                </p>
                        </div>
                    </div>
                
                </div>
            </div>

        </section>
        )
    }
}

export default Testimonials;