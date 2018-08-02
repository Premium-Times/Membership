import React, { Component } from 'react';
import LevelCard from "./levelcard";
import BrandHeader from "./brandheader";
import Introduction from "./introduction";
import Footer from "./footer";
import Testimonials from "./testimonials";
import LevelsBox from "./levelsBox";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrandHeader />
        
        
        <main>
          <Introduction />
          <LevelsBox>
            <LevelCard />
            <LevelCard />
            <LevelCard />
            <LevelCard />
          </LevelsBox>
          <Testimonials />
        </main>
        <Footer />
      </div>
      
    );
  }
}
