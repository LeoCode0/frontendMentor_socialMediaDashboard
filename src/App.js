import React, { Fragment, useContext } from "react";
import { ListOfSecondaryCards } from "./components/ListOfSecondaryCards";
import { Header } from "./components/Header";
import { ListOfPrincipalCards } from "./components/ListOfPrincipalCards";
import { SubTitle } from "./components/SubTitle";

import { ToggleMode } from "./Context";

import "./css/Globals.css";

export const App = () => {
  return (
    <ToggleMode>
      <Fragment>
        <Header />
        <ListOfPrincipalCards />
        <SubTitle />
        <ListOfSecondaryCards />
      </Fragment>
    </ToggleMode>
  );
};
