import React, { Component } from "react";

class MemberWelcome extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="row">
        <div className="section-welcome">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                            CONGRATULATIONS!
            </h2>
          </div>
          <p className="paragraph">
                        You are now a member of the PREMIUM TIMES.
                        We are happy to have you as a member of Premium Times.
          </p>
          <p className="paragraph">
                        Here are what to expect next.
          </p>
        </div>
      </div>
    );
  }
}

export default MemberWelcome;
