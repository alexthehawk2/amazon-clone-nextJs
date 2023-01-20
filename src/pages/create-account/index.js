import CreateAccount from "@/components/create-account/CreateAccount";
import AuthContext from "@/context/auth";
import { withRouter } from "next/router";
import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export class createAccount extends Component {
  componentDidMount() {
    const token = Cookies.get("accessToken");
    if (token) {
      const user = jwt_decode(token);
      this.context.logIn(user.name, user.email);
      this.props.router.push("/");
    }
  }
  render() {
    return <CreateAccount />;
  }
}
createAccount.contextType = AuthContext;
export default withRouter(createAccount);
