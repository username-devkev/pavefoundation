import React from "react";

const ServiceArea = () => {
  return (
    <section className="service-area text-center pb-3 pt-3">
      <img
        src="/images/heart-icon1.png"
        alt=""
        className="heart-icon heart-icon-1"
      />
      <img
        src="/images/heart-icon2.png"
        alt=""
        className="heart-icon heart-icon-2"
      />
      <img
        src="/images/heart-icon3.png"
        alt=""
        className="heart-icon heart-icon-3"
      />
      <img
        src="/images/heart-icon4.png"
        alt=""
        className="heart-icon heart-icon-4"
      />
      <img
        src="/images/heart-icon5.png"
        alt=""
        className="heart-icon heart-icon-5"
      />
      <img
        src="/images/heart-icon6.png"
        alt=""
        className="heart-icon heart-icon-6"
      />
      <img
        src="/images/heart-icon7.png"
        alt=""
        className="heart-icon heart-icon-7"
      />
      <img
        src="/images/heart-icon8.png"
        alt=""
        className="heart-icon heart-icon-8"
      />
      <img
        src="/images/heart-icon9.png"
        alt=""
        className="heart-icon heart-icon-9"
      />
      <img
        src="/images/heart-icon10.png"
        alt=""
        className="heart-icon heart-icon-10"
      />
      <img
        src="/images/heart-icon11.png"
        alt=""
        className="heart-icon heart-icon-11"
      />
      {/* Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">
                We prepare African American girls to achieve success in STEAM
              </h2>
            </div>
          </div>
        </div>

        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="fa fa-microscope"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Science</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="service-item service-item2">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Technology</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="fa fa-cogs"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Engineering</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="service-item service-item4">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="fa fa-paint-brush"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Arts</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="fa fa-divide"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Mathematics</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared">
              <a href="/donate" className="theme-btn">
                donate now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
