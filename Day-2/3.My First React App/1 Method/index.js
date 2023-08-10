import React from "react";
import ReactDOM from "react-dom";

// let el = <h1> Hello Friends </h1>;
//or
let el = React.createElement("h1", null, "Hello Friends");
ReactDOM.render(el, document.getElementById("root"));