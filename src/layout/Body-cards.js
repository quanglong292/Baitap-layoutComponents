import React, { Component } from "react";
import Card from "./Card";

export default class Bodycards extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            {/* item */}
            <Card />
          </div>
          <div className="col-sm-4">
            {/* item */}
            <Card />
          </div>
          <div className="col-sm-4">
            {/* item */}
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
