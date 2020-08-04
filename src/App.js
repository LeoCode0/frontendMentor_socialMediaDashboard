import React, { Fragment } from "react";
import { ListOfSecondaryCards } from "./components/ListOfSecondaryCards";
import { Header } from "./components/Header";
import { ListOfPrincipalCards } from './components/ListOfPrincipalCards'
import { SubTitle } from './components/SubTitle'

import "./css/Globals.css";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <ListOfPrincipalCards />
      <SubTitle />
      <ListOfSecondaryCards />
    </Fragment>
  );
};
