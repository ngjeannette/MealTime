import "./App.css";
import React, { Component } from "react";
import SimpleMap from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const mapStyles = {
  width: "100%",
  height: "100%"
};

export default class Yelp extends React.Component {
  state = {
    selectedCategory: "All"
  };

  handleChangeSelectCategory = event => {
    this.setState({ selectedCategory: event.target.value });
  };
  render() {
    return (
      this.props.selection.length > 0 && (
        <>
          <div className="container select">
            <FontAwesomeIcon icon={faFilter} size="2x" color="black" />
            <select
              onChange={this.handleChangeSelectCategory}
              value={this.state.selectedCategory}
              className="react-autosuggest__container "
              id="filterSelection"
            >
              {[
                "All",
                ...this.props.selection
                  .reduce((categories, business) => {
                    business.categories.forEach(category => {
                      if (!categories.includes(category.title)) {
                        categories.push(category.title);
                      }
                    });

                    return categories;
                  }, [])
                  .sort()
              ].map(categoryTitle => {
                //each category is place inside an option
                return (
                  <option
                    value={categoryTitle}
                    className="react-autosuggest__input "
                  >
                    {categoryTitle}
                  </option>
                );
              })}
            </select>
          </div>
          <ul id="searchResults">
            {this.props.selection
              .filter(
                item =>
                  this.state.selectedCategory === "All" ||
                  item.categories
                    .map(category => category.title)
                    .includes(this.state.selectedCategory)
              )
              .map(item => {
                return (
                  <li>
                    <div className="selections" key={item.id}>
                      <div className="container restaurant bg-light mb-3">
                        <img src={item.image_url} alt={item.alias} />
                        <div className="information">
                          <h4> {item.name} </h4>
                          {`
                    ${item.location.address1}
                    ${item.location.city}
                    ${item.location.state}
                    ${item.location.zip_code}
                    ${item.location.country}`}
                        </div>
                        <SimpleMap
                          lat={item.coordinates.latitude}
                          lng={item.coordinates.longitude}
                          center={{
                            lat: item.coordinates.latitude,
                            lng: item.coordinates.longitude
                          }}
                          city={item.location.city}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      )
    );
  }
}
