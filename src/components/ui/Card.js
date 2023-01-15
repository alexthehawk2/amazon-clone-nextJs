import React, { Component } from "react";
import classes from "./Card.module.css";
export class Card extends Component {
  render() {
    return <div className={classes.card_container}>{this.props.children}</div>;
  }
}

export default Card;
