import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faLocationArrow,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> About </h2>
        <div className="row">
          <div className="col-sm">
            <h3> Select Location </h3>
            <FontAwesomeIcon icon={faLocationArrow} size="5x" color="#f09878" />
          </div>
          <div class="vl" />
          <div className="col-sm">
            <h3> Find your meal </h3>
            <FontAwesomeIcon icon={faUtensils} size="5x" color="#f09878" />
          </div>
        </div>
        <div className="row description">
          <div className="col-sm">
            <h3>
              Based on the location, MealTime finds the current local time and
              suggests nearby restaurants for the appropriate meal
              time.Timezones are from IANA Time Zone Database.
            </h3>
            <FontAwesomeIcon
              icon={faChevronDown}
              size="5x"
              color="#f09878"
              onClick={this.props.scroll}
            />
          </div>
        </div>
      </div>
    );
  }
}
