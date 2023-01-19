import Image from "next/image";
import React, { Component } from "react";
import Card from "../ui/Card";
import classes from "./HeroSection.module.css";
export class HeroSection extends Component {
  render() {
    return (
      <section className={classes.section_container}>
        <div className={classes.hero__image_container}>
          <div className={classes.hero__card_container}>
            <Card>
              <div className={classes.profile__card_container}>
                <div>
                  <Image
                    src="/assets/images/profile-icon.png"
                    alt="profile-icon"
                    width={60}
                    height={60}
                  />
                  <div>
                    <span>Hi, Abir</span>
                    <span>Customer since {new Date().getFullYear()}</span>
                  </div>
                </div>
                <p>Top links for you</p>
                <div className={classes.profile_grid}>
                  <div className={classes.profile__grid_items}>
                    <Image
                      src="/assets/images/your-orders.png"
                      height={60}
                      width={92}
                      alt="your orders image"
                    />
                    <p>Your Orders</p>
                  </div>
                  <div className={classes.profile__grid_items}>
                    <Image
                      src="/assets/images/oneplus-6.png"
                      height={65}
                      width={82}
                      alt="your orders image"
                    />
                    <p>Mobiles & Accessories</p>
                  </div>
                  <div className={classes.profile__grid_items}>
                    <Image
                      src="/assets/images/watch.png"
                      height={68}
                      width={82}
                      alt="your orders image"
                    />
                    <p>Watches for Men</p>
                  </div>
                  <div className={classes.profile__grid_items}>
                    <Image
                      src="/assets/images/fashion-image.png"
                      height={60}
                      width={92}
                      alt="your orders image"
                    />
                    <p>Fashion</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.electronics__card_container}>
                <p>Up to 70% off | Electronics</p>
                <p>clearance store</p>
                <Image
                  src="/assets/images/laptop-image.png"
                  width={310}
                  height={249}
                  alt="Laptop Image"
                />
                <span>See more</span>
              </div>
            </Card>
            <div className={classes.third__card_container}>
              <div>
                <p>Shop on the Amazon App</p>
                <p>
                  Fast, convenient and secure | Over 17 crore products in your
                  pocket
                </p>
                <span>Download the Amazon App</span>
              </div>
              <div className={classes.third__card__sub_container}>
                <Image
                  src="/assets/images/Laptops-image-3.png"
                  alt="laptop_image_3"
                  width={430}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.hero__image_linear_gradient}></div>
      </section>
    );
  }
}

export default HeroSection;
