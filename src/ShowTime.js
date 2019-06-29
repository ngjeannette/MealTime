import "./App.css";
import React, { Component } from "react";

export default class ShowTime extends React.Component {
  render() {
    return (
      this.props.city.length > 0 && (
        <div className=" showTime">
          <h3>
            {this.props.city}: {this.props.timeStamp}
          </h3>
          <h3>It's {this.props.time} time!</h3>
        </div>
      )
    );
  }
}
