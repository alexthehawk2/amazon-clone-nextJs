import Signin from "@/components/signin/Signin";
import React, { Component } from "react";
import { withRouter } from "next/router";
import AuthContext from "@/context/auth";
export class signin extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let value = this.context;
    if (value.isLoggedIn) {
      this.props.router.push("/");
    }
  }
  render() {
    return <Signin />;
  }
}

export default withRouter(signin);
signin.contextType = AuthContext;
