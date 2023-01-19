import Image from "next/image";
import React, { Component, Fragment } from "react";
import classes from "./CreateAccount.module.css";
export class CreateAccount extends Component {
  render() {
    return (
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
              <form className={classes.form_container}>
                <p>Create Account</p>
                <label htmlFor="name">Your name</label>
                <br />

                <input name="name" />
                <br />
                <label htmlFor="email">Email address</label>
                <br />

                <input name="name" type="email" />
                <br />

                <label htmlFor="email">Password</label>
                <br />

                <input name="name" type="password" />
                <br />

                <button>Continue</button>
              </form>
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
    );
  }
}

export default CreateAccount;
