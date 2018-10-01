// High level card used to diaplay membership level information

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLevels } from "../actions";
import { localLevelData } from "../reducers/Levels";
import LevelList from "./levelList";

class LevelCard extends Component {
  constructor(props) {
    super(props);
    fetchLevels();
  }

  renderEachCard() {
    const { memberLevels } = this.props;
    // TODO: replace LOADING with Spinner
    const { levels } = memberLevels.items;
    if (!levels) {
      return (
        <div>
          <LevelList levels={localLevelData} />
        </div>
      );
    }
    return (
      <div>
        <LevelList levels={levels} />
      </div>
    );
  }

  render() {
    const { memberLevels } = this.props;
    const { loading } = memberLevels;
    if (loading) {
      return (
        <div>
          <h2>Loading ...</h2>
        </div>
      );
    }
    return (
      <div>
        {this.renderEachCard()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ memberLevels: state.levels });
export default connect(mapStateToProps, { fetchLevels })(LevelCard);
