import React, { Component } from "react";
import classes from "./CategoriesNavigation.module.css";
export class CategoriesNavigation extends Component {
  render() {
    return (
      <nav className={classes.nav}>
        <div className={classes.categories__container}>
          <span> All</span>
          <span>Fashion</span>
          <span>Mobiles</span>
          <span>Gift Ideas</span>
          <span>Prime</span>
          <span>Amazon Pay</span>
          <span>Gift Cards</span>
          <span>Sports, Fitness & Outdoors</span>
          <span>Computers</span>
          <span>Customer Service</span>
        </div>
        <div className={classes.prime__feature__container}></div>
      </nav>
    );
  }
}

export default CategoriesNavigation;
