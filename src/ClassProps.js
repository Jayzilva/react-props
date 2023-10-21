import React, { Component } from "react";

export class ClassProps extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} from {this.props.place}
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default ClassProps;
