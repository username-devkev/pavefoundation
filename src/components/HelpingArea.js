import React from "react";

const HelpingArea = () => {
  return (
    <div>
      {/* <section className="mixer-area helping-area pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading mixer-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">Contribute Today!</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="helping-text-box">
                <p className="helping__text"></p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="mixer-area2 helping-area2 pt-5">
        <div className="container">
          <div className="row fun-content-wrap">
            <div className="col-lg-6">
              <div className="fun-content">
                {/* <div className="fun-item fun-item1">
                  <img src="/images/helping-img.jpg" alt="" />
                </div> */}
                <div className="section-heading p-0">
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2 className="section__title">Our Mission</h2>
                  <p className="section__desc">
                    The Pave Foundation, Inc. is committed to “paving the way”
                    for African American girls to achieve success in STEAM
                    (science, technology, engineering, arts and mathematics)
                    careers by providing them with academic and enrichment
                    opportunities that ignite their intellectual curiosity,
                    develop self-confidence and instill a passion for protecting
                    the planet by equitably distributing its resources.
                  </p>
                </div>
              </div>
            </div>
            {/* Donation */}
            <div className="col-lg-6">
              <div className="helping-form p-2 pt-0">
                <div className="section-heading d-flex flex-column justify-content-center align-content-center">
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2
                    className="section__title text__white"
                    style={{ textAlign: "center", marginBottom: "15px" }}
                  >
                    Make a Donation
                  </h2>
                  <div id="donorbox-homepage" className='row' style={{display:'flex', justifyContent:'center'}}>
                  <iframe
                    allowpaymentrequest=""
                    frameborder="0"
                    height="450px"
                    name="donorbox"
                    scrolling="no"
                    seamless="seamless"
                    src="https://donorbox.org/embed/kevdev-giving-tuesday"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      minWidth: "250px",
                      height: "450px!important",
                      margin:0,
                      padding:0
                    }}
                  ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpingArea;
