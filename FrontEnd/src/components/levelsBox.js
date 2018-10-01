import React, { Component } from "react";

class LevelsBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="membership-levels">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
                        Membership Levels
          </h2>
        </div>
        <div className="row">
          {this.props.children}
        </div>


        <div className="u-center-text u-margin-bottom-big">
          <a href="#" className="btn btn--ptn">Become a friend &rarr;</a>
        </div>
      </section>
    );
  }
}

export default LevelsBox;
