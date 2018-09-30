import React, { Component } from "react";
import DefaultPage from "./defaultPage";
import HeadlineText from "./headlineText";

class MemberWelcome extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <DefaultPage>
        <HeadlineText title="congratulations" size="big" />
        <p className="paragraph">
                        You are now a member of the PREMIUM TIMES.
                        We are happy to have you as a member of Premium Times.
        </p>
        <p className="paragraph">
                        Here are what to expect next.
        </p>
      </DefaultPage>
    );
  }
}

export default MemberWelcome;
