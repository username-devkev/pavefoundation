import React from "react";

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
  );
};

export default Donate;
