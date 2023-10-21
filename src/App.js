import ClassProps from "./ClassProps";
import FunctionalProps from "./FunctionalProps";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClassProps name="learner 1" place="X">
          <p>This is a child comp</p>
        </ClassProps>
        <ClassProps name="learner 2" place="Y" />

        <FunctionalProps msg="Functional Component" />
      </div>
    );
  }
}

export default App;
