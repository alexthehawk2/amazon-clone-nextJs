import React, { Component, Fragment } from "react";
import Image from "next/image";
import classes from "./TopHeader.module.css";
import Link from "next/link";
export class TopHeader extends Component {
  render() {
    return (
      <div className={classes.top_container}>
        <div className={classes.top__left_container}>
          <Image
            src="/assets/images/logo.png"
            alt="amazon-logo"
            width={100}
            height={30}
          />
          <div className={classes.top__left__inner_container}>
            <div>
              <Image
                src="/assets/images/location.png"
                alt="location-icon"
                width={16}
                height={16}
              />
            </div>
            <div className={classes.top__left__inner__span_container}>
              <span>Deliver to Abir</span>
              <span>Kolkata 700127</span>
            </div>
          </div>
        </div>
        <div className={classes.top__center_container}>
          <form className={classes.search_form}>
            <select
              name="categories"
              id="categories"
              style={{ fontFamily: "Amazon Ember" }}
            >
              <option value="All" selected>
                All
              </option>
              <option value="Mobiles">Mobiles</option>
              <option value="Electronics">Electronics</option>
              <option value="Appliances">Appliances</option>
            </select>
            <input />
            <div className={classes.search__btn}></div>
          </form>
        </div>
        <div className={classes.top__right_container}>
          <div className={classes.top__right__country_container}>
            <Image
              src="/assets/images/india.png"
              alt="country png"
              width={20}
              height={20}
            />
          </div>
          <Link href="/create-account">
            <div className={classes.top__right__profile_container}>
              <div>
                <span>Hello, Abir</span>
                <span>Accounts & Lists</span>
              </div>
              <div>
                <Image
                  src="/assets/images/down-arrow-2.png"
                  alt="arrow-icon"
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </Link>
          <div className={classes.top__right__orders_container}>
            <div>
              <span>Returns</span>
              <span>& Orders</span>
            </div>
            <div>
              <Image
                src="/assets/images/down-arrow-2.png"
                alt="arrow-icon"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className={classes.top__right__cart_container}>
            <div>
              <span>2</span>
              <Image
                src="/assets/images/Vector.png"
                alt="cart icon"
                width={38}
                height={26}
              />
            </div>
            <div>Cart</div>
            <div style={{ justifyContent: "flex-end", marginLeft: "2px" }}>
              <Image
                src="/assets/images/down-arrow-2.png"
                alt="arrow-icon"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
