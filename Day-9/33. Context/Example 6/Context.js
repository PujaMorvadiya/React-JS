import React from "react";
const MyContext = React.createContext("Good Night");
export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;