import { signIn } from "@/helpers/axios";
import Image from "next/image";
import Link from "next/link";
import React, { Component, Fragment } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Signin.module.css";
import AuthContext from "@/context/auth";
import jwt_decode from "jwt-decode";
import { withRouter } from "next/router";

export class Signin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      enteredEmail: "",
      isLoggedIn: context.isLoggedIn,
      enteredPassword: "",
    };
  }
  componentDidMount() {
    const token = Cookies.get("accessToken");
    if (token) {
      const user = jwt_decode(token);
      this.context.logIn(user.name, user.email);
      this.props.router.push("/");
    }
  }
  onChangeHandler(e, type) {
    if (type === "email") {
      this.setState({ enteredEmail: e.target.value });
    } else {
      this.setState({ enteredPassword: e.target.value });
    }
  }
  onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state.enteredEmail, this.state.enteredPassword);
    const userData = {
      email: this.state.enteredEmail,
      password: this.state.enteredPassword,
    };
    const formBody = Object.keys(userData)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(userData[key])
      )
      .join("&");
    const url = "https://amazon-clone-users-api.onrender.com/signin";
    const res = await signIn(url, formBody);
    console.log(res);
    if (res.status === 1) {
      Cookies.set("accessToken", res.accessToken, { expires: 1 });
      toast("Logged In");
      const details = jwt_decode(res.accessToken);
      this.context.logIn(details.name, details.email);
    } else {
      toast(res.message);
    }
  };

  render() {
    return (
      <Fragment>
        <ToastContainer />
        {!this.state.isLoggedIn && (
          <Fragment>
            <main className={classes.main}>
              <div className={classes.Outer_container}>
                <div
                  className={classes.inner_container}
                  style={{ marginTop: "20px" }}
                >
                  <Image
                    src="/assets/images/amazon-logo-dark.png"
                    alt="amazon-logo"
                    width={100}
                    height={30}
                  />
                  <form
                    className={classes.form_container}
                    onSubmit={this.onSubmitHandler}
                  >
                    <p style={{ fontWeight: "600", fontSize: "25px" }}>
                      Sign in
                    </p>
                    <label htmlFor="email">Enter Email</label>
                    <br />
                    <input
                      name="email"
                      type="text"
                      onChange={(e) => this.onChangeHandler(e, "email")}
                    />
                    <br />
                    <label htmlFor="password">Enter password</label>
                    <br />
                    <input
                      name="password"
                      type="password"
                      onChange={(e) => this.onChangeHandler(e, "password")}
                    />
                    <br />

                    <button>Continue</button>
                    <p>
                      By continuing, you agree to Amazon&apos;s{" "}
                      <span className={classes.text_blue}>
                        Conditions of Use
                      </span>{" "}
                      and{" "}
                      <span className={classes.text_blue}>Privacy Notice.</span>
                    </p>
                    <p className={classes.text_blue}>Need Help?</p>
                  </form>

                  <p className={classes.new__account_text}>
                    <span>New to Amazon?</span>
                  </p>
                  <Link href="/create-account">
                    <button className={classes.account__create_btn}>
                      Create your Amazon account
                    </button>
                  </Link>
                </div>
              </div>
            </main>
            <footer className={classes.footer}>
              <div>
                <span className={classes.text_blue}>Conditions of Use</span>
                <span className={classes.text_blue}>Privacy Notice</span>
                <span className={classes.text_blue}>Help</span>
              </div>
              <p style={{ fontSize: ".75rem" }}>
                © 1996-2023, Amazon.com, Inc. or its affiliates
              </p>
            </footer>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
Signin.contextType = AuthContext;

export default withRouter(Signin);
