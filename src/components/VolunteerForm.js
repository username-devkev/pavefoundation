import React from "react";

const VolunteerForm = () => {
  return (
    <div className="col-lg-6">
      <div className="helping-form">
        <div className="section-heading">
          <div className="section-icon">
            <img src="/images/section-icon.png" alt="section-icon" />
          </div>
          <h2 className="section__title text__white">Make a Donation</h2>
          <p className="section__meta text__white">donate us now</p>
        </div>
        <div className="form-shared">
          <form action="#">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Insert Custom Value"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    className="textarea"
                    name="message"
                    placeholder="Leave a comment"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <button className="theme-btn submit__btn">continue now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default VolunteerForm;
