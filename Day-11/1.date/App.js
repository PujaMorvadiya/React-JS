import react from "react";

const App = () => {
  const name = "puja";
  const cdate = new Date().getDate();
  const cdate2 = new Date().toLocaleDateString();
  const ctime = new Date().toLocaleTimeString();
  return (
    <>
      <h1> hello, my name is {name} </h1> <p> Today date is: {cdate} </p>{" "}
      <p> Today date is: {cdate2} </p> <p> Current time is: {ctime} </p>{" "}
    </>
  );
};

export default App;
