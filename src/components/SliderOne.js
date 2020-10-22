import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import "swiper/swiper-bundle.css";

const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="slider-area">
      <div className="homepage-slide1">
        <Swiper
          loop={true}
          speed={500}
          effect={"slide"}
          direction={"horizontal"}
        >
          <div className="single-slide-item slide-bg1">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div
                  className="container"
                  style={{ margin: "0px 0px 0px 60px " }}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div
                        className="slider-heading d-flex flex-column justify-content-start"
                        style={{
                          maxWidth: "375px",
                          maxHeight: "350px",
                        }}
                      >
                        <p
                          className="slider__meta"
                          style={{
                            letterSpacing: "4px",
                            fontWeight: 400,
                            fontSize: "20px",
                            width: "100%",
                          }}
                        >
                          The Pave Foundation
                        </p>
                        <div
                          className="container d-flex flex-column space-evenly justify-content-between "
                          style={{ minHeight: "150px", marginTop: "12px" }}
                        >
                          <h2 style={{ fontSize: "20px", color: "#000" }}>
                            ignite intellectual curiosity
                          </h2>
                          <h2 style={{ fontSize: "20px", color: "#000" }}>
                            develop self-confidence{" "}
                          </h2>
                          <h2 style={{ fontSize: "20px", color: "#000" }}>
                            instill a passion for protecting the planet by
                            equitably distributing its resources.
                          </h2>
                        </div>
                        <a
                          href="#"
                          className="theme-btn btn btn-primary btn-sm"
                          style={{ marginTop: "20px", width: "190px" }}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Carousel Picture */}
          <div className="single-slide-item slide-bg2">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div
                  className="container"
                  style={{ margin: "0px 0px 0px 60px " }}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">
                          Giving Tuesday 2020 Fund Drive
                        </p>
                        <h2 className="slider__title">GOAL</h2>
                        <a href="#" className="theme-btn">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd Carousel Picture */}
          <div className="single-slide-item slide-bg3">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div
                  className="container"
                  style={{ margin: "0px 0px 0px 60px " }}
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">Volunteer</p>
                        <h2 className="slider__title">
                          We are in need of volunteers!
                        </h2>
                        <a href="#" className="theme-btn">
                          Register to Volunteer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
        <div className="owl-dots">
          <div onClick={goPrev} className="owl-dot">
            <span></span>
          </div>
          <div onClick={goNext} className="owl-dot">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
