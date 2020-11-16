import React from "react";
import DonorBox from "./DonorBox";
import MissionStatement from "./MissionStatement";

const HelpingArea = () => {
  return (
    <div>
      <section className="mixer-area2 helping-area2 pt-2">
        <div className="container">
          <div className="row fun-content-wrap">
            <MissionStatement />
            {/* Donation */}
            <span id="donorbox"></span>
            <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12 donorbox-mobile w-100 p-0">
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

                  <DonorBox />
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
