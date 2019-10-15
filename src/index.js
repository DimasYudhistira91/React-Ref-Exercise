import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.myInput);
  }

  render() {
    return (
      <div>
        <input ref={this.myInput} />

        <button
          onClick={() => {
            this.myInput.current.focus();
          }}
        >
          focus!
        </button>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
