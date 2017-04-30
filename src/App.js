import React, { Component } from 'react';
import Comment from "./components/Comment";

class App extends Component {
  render() {
    return (
      <div>
          <Comment>here is a test comment 1</Comment>
          <Comment>here is a test comment 2</Comment>
          <Comment>here is a test comment 3</Comment>

      </div>
    );
  }
}

export default App;
