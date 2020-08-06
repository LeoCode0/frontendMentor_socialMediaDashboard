import React, { useState } from "react";

const Context = React.createContext({});

export const ToggleMode = ({ children }) => {
  const [mode, setMode] = useState("light");

  return (
    <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
  );
};

export default Context;
