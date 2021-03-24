import React, { Component } from "react";
class PropsMappingExample extends Component {
  render() {
    const visitedPlaces = () =>
      this.props.visited.map((place) => <li>{place}</li>);

    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>{visitedPlaces()}</ul>
      </div>
    );
  }
}

export default PropsMappingExample;