import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Coordinate = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "10px",
      display: "inline-flex",
      "font-size": "1rem",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    zoom: 15
  };
  render() {
    return (
      <>
        <div className="mapImage" style={{ height: "200px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBhxC0ajIe4Q3ZZHvPrycvvT0a4dGzl7hY"
            }}
            center={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Coordinate
              lat={this.props.lat}
              lng={this.props.lng}
              text=<FontAwesomeIcon icon={faUtensils} />
            />
          </GoogleMapReact>
        </div>
      </>
    );
  }
}
export default SimpleMap;
