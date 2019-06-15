import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { firstAction, secondAction, thirdAction } from "./state/actions";

class App extends Component {
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange.bind(this)} name="placeholder" />
        <button onClick={this.updateSecond.bind(this)}>dispatch second</button>
        <button onClick={this.updateThird.bind(this)}>dispatch third</button>
      </div>
    );
  }

  handleInputChange(ev) {
    let objToSend = {
      name: [ev.target.name],
      value: ev.target.value
    };
    //We use dispatchFirst here because of how its set up in the reducer
    //It's made to handle input changes
    this.props.dispatchFirst(objToSend);
  }
  updateSecond() {
    this.props.dispatchSecond(["im new in this array"])
  }
  updateThird() {
    this.props.dispatchThird(["im something else in this array"])
  }
}

//"Shopping" part
const mapStateToProps = function(state) {
  return {
    placeholder: state.placeholder,
    arr: state.arr
  };
};

//updating part
const mapDispatchToProps = function(dispatch) {
  let obj = {
    dispatchFirst: function(data) {
      dispatch(firstAction(data));
    },
    dispatchSecond: function(data) {
      dispatch(secondAction(data));
    },
    dispatchThird: function(data) {
      dispatch(thirdAction(data));
    }
  };
  return obj;
};

const app = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default app;
