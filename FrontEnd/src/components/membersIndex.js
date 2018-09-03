import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchMembers } from "../actions";

class MemebersIndex extends Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  renderMembers() {
    const { items } = this.props.membersIndex;
    return _.map(items, (member) => {
      return (
        <li key={member._id} className="list-group">
          { member.title }
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderMembers() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { membersIndex: state.membersIndex }
};

export default connect(mapStateToProps, { fetchMembers })(MemebersIndex);
