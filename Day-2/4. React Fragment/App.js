import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      // when we write only fragment then we have to import Fragment

      // <Fragment>
      //   <h1>Hello Everyone</h1>
      //   <h2>Hello World</h2>
      // </Fragment>

      //or

      // <React.Fragment>
      //   <h1>Hello Everyone</h1>
      //  <h2>Hello World</h2>
      // </React.Fragment>

      <>
        <h1> Hello Everyone </h1>
        <h2> Hello World </h2>{" "}
      </>
    );
  }
}

export default App;
