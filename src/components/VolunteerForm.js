import React, { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  // states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [steamField, setSteamField] = useState("science");
  // server response
  const [response, setResponse] = useState("");

  function handleSubmit() {
    axios
      .post("https://pavefoundation-api.herokuapp.com/volunteer", {
        emailAddress: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone,
        steamField: steamField,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          setResponse({
            status: 200,
            text: "Thank You for Volunteering",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (response.status === 200) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h1 className="h1">Thank You for Volunteering!</h1>
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <div className="helping-form">
        <div className="section-heading d-flex flex-column align-items-center justify-content-center">
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
                    name="firstName"
                    placeHolder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
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
                    onChange={(e) => setLastName(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeHolder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <label className="h5 mr-3">STEAM Field: </label>
                <select
                  name="steamField"
                  onChange={(e) => setSteamField(e.target.value)}
                  value={steamField}
                  style={{ height: "50px", padding: "5px" }}
                >
                  <option value="science">Science</option>
                  <option value="technology">Technology</option>
                  <option value="engineering">Engineering</option>
                  <option value="arts">Arts</option>
                  <option value="math">Math</option>
                </select>
              </div>

              <div className="col-lg-12 mt-3 mb-3">
                <div
                  onClick={() => handleSubmit()}
                  className="theme-btn submit__btn"
                >
                  Submit
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default VolunteerForm;
