import React, { Component } from 'react';
import LevelCard from "./levelcard";
import BrandHeader from "./brandheader";
import Introduction from "./introduction";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrandHeader />
        
        
        <main>
          <Introduction />
          <LevelCard />
        </main>
        <Footer />
      </div>
      
    );
  }
}
