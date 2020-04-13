import React, { Component } from "react";
import { connect } from "react-redux";
import { undo, redo } from "../reducers/actions";

class History extends Component {
  render() {
    return (
      <div id="history-controls">
        <button onClick={this.props.undo}>undo</button>
        <button onClick={this.props.redo}>redo</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    undo: () => dispatch({ type: "UNDO" }),
    redo: () => dispatch({ type: "REDO" }),
  };
}

export default connect(null, mapDispatchToProps)(History);
