import React, { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  // states
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [steamField, setSteamField] = useState(null);
  // server response
  const [response, setResponse] = useState(null);

  function handleSubmit() {
    // axios
    //   .post("http://localhost:5000/email", {
    //     emailAddress: email,
    //     firstName:firstName,
    //     lastName:lastName,
    //     phoneNumber:phone,
    //     steamField:steamField;
    //   })
    //   .then((res) => {
    //     const { status } = res;
    //     if (status === 200) {
    //       setResponse({
    //         status: 200,
    //         text: "Thank You for RSVP",
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log("submitted");
    console.log(firstName, lastName, email, phone, steamField);
  }

  if (!response || response.status === 400) {
    return (
      <div className="col-lg-6 col-sm-12 col-xs-12 col-md-12 m-3">
        <div className="helping-form">
          <div className="section-heading d-flex flex-column align-items-center justify-contents-center">
            <div className="section-icon">
              <img src="/images/section-icon.png" alt="section-icon" />
            </div>
            <h2 className="section__title ">Volunteer</h2>
            <p className="section__meta">Register to Help </p>
          </div>
          <div className="form-shared">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeHolder="First Name"
                      onChange={(e) => setFirstName(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeHolder="First Name"
                      onChange={(e) => setFirstName(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeHolder="Last Name"
                      onChange={(e) => setLastName(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phoneNumber"
                      placeHolder="Phone Number"
                      onChange={(e) => setPhone(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeHolder="emailAddress"
                      onChange={(e) => setEmail(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <select name="steamField" onChange={(e) => setSteamField(e)}>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                    <option value="engineering">Engineering</option>
                    <option value="arts">Arts</option>
                    <option value="math">Math</option>
                  </select>
                </div>

                <div className="col-lg-12">
                  <button
                    onClick={handleSubmit}
                    className="theme-btn submit__btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (response.status === 200) {
    return (
      <div>
        <h1 style={{ color: "#FFF" }}>Thank You for Your Volunteering! b</h1>
      </div>
    );
  }
};
export default VolunteerForm;
