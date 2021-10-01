import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
