import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/images/hero/hero-img.svg";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container hero">
                <div className="hero__left">
                    <h1 className="hero__title">
                        <span>Mobile</span>
                        <span>Backcover</span>
                        <span>Tempered Glass</span>
                    </h1>
                    <button className="hero__btn">Shop all !</button>
                </div>
                <div className="hero__right">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
