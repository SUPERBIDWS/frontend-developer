import React, { Component } from "react";
import "./App.css";

//Components
import Fetcher from "./components/APICalls/Fetcher";

class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <Fetcher />
      </div>
    );
  }
}

export default App;
