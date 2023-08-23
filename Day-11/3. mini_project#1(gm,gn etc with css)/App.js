import react from "react";
import "./App.css";
const App = () => {
  const cssStyle = {
    color: "black",
  };

  const ctime = new Date().getHours();
  let curDate = new Date().toLocaleTimeString();
  // let curDate = new Date(2022, 5, 5, 20);
  // curDate = curDate.getHours();
  let msg = "";
  if (ctime >= 0 && ctime < 12) {
    msg = "Good Morning!!";
    cssStyle.color = "green";
  } else if (ctime >= 12 && ctime < 19) {
    msg = "Good AfterNoon!!";
    cssStyle.color = "Orange";
  } else {
    msg = "Good Night!!";
    cssStyle.color = "red";
  }
  return (
    <>
      <h2> Time is: {curDate} </h2>{" "}
      <h1>
        Hello Sir, <span style={cssStyle}> {msg} </span>{" "}
      </h1>{" "}
    </>
  );
};

export default App;
