import React from "react";
import DonorBox from "./DonorBox";

const Donate = () => {
  return (
    <div className="col-lg-6 col-md-4 col-xl-6">
      <div className="helping-form p-2 pt-0">
        <div
          className="section-heading d-flex flex-column justify-content-center align-content-center"
          style={{ textAlign: "center" }}
        >
          <div className="section-icon">
            <img src="/images/section-icon.png" alt="section-icon" />
          </div>
          <h2
            className="section__title"
            style={{ textAlign: "center", marginBottom: "15px" }}
          >
            Make a Donation
          </h2>
          <DonorBox />
        </div>
      </div>
    </div>
  );
};

export default Donate;
