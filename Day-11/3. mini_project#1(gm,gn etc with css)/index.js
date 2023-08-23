import react from "react";
import reactDom from "react-dom/client";
import App from "./App";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);
// reactDom.render(<App />, document.getElementById("root"));

// Questions
// 1. create a react app from scratch
// 2. Show a heading that say Hello Sir, Good Morning, if time is between 1 to 11am
// 3. Good Afternoon, if time is 12pm to 7pm,
// 4. Good night, if 7pm till midnight
// 5. Apply css in it, then dynamically change the color of greeting ports only using inline css style. Ex. green, orange, black etc.....

//change in css style.....
