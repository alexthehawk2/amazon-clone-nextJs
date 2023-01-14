import classes from "./Layout.module.css";
import React, { Component, Fragment } from "react";
import TopHeader from "./TopHeader";
import CategoriesNavigation from "./CategoriesNavigation";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <TopHeader />
        <CategoriesNavigation />
      </Fragment>
    );
  }
}

export default Layout;
