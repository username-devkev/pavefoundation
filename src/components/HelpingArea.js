import React from "react";

const HelpingArea = () => {
  return (
    <div>
      <section className="mixer-area2 helping-area2 pt-2">
        <div className="container">
          <div className="row fun-content-wrap">
            <div className="col-lg-6">
              <div className="fun-content">
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
            <span id="donorbox"></span>
            <div className="col-lg-6">
              <div className="helping-form p-2 pt-0">
                <div
                  className="section-heading d-flex flex-column justify-content-center align-content-center"
                  style={{ textAlign: "center" }}
                >
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2
                    className="section__title text__white"
                    style={{ textAlign: "center", marginBottom: "15px" }}
                  >
                    Make a Donation
                  </h2>
                  <div id="">
                    <iframe
                      title="donation"
                      allowpaymentrequest=""
                      frameBorder="0"
                      name="donorbox"
                      scrolling="no"
                      width="100%"
                      seamless="seamless"
                      src="https://donorbox.org/embed/kevdev-giving-tuesday"
                      style={{
                        maxWidth: "450px",
                        minWidth: "320px",
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
