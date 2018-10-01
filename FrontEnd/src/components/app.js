import React, { Component } from "react";
import ErrorBoundry from "./errorBoundry";
import LevelCard from "./levelCard";
import BrandHeader from "./brandHeader";
import Introduction from "./introduction";
import Footer from "./footer";
import Testimonials from "./testimonials";
import LevelsBox from "./levelsBox";

export default class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <BrandHeader />
        <main>
          <Introduction />
          <LevelsBox>
            <ErrorBoundry>
              <LevelCard />
            </ErrorBoundry>
          </LevelsBox>
          <Testimonials />
        </main>
      </div>
    );
  }
}
