import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (

      <section className="introduction">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
                            Become a Premium Times Member
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
                                We deliver the best investigative journalism
            </h3>
            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae error suscipit natus corporis tempore illo rem voluptatum illum accusantium, beatae dicta doloribus ea? Modi.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
                                Your support comes with rewards
            </h3>
            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae error suscipit natus corporis tempore illo rem voluptatum illum accusantium, beatae dicta doloribus ea? Modi.
            </p>

            <a href="#" className="btn-text">Learn More &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
              <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
              <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
            </div>
          </div>
        </div>
      </section>


    );
  }
}

export default Introduction;
