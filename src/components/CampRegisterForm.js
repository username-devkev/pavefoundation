import React, { useState } from "react";
import axios from "axios";

export default function CampResgisterForm() {
  //States
  const [attendeeFirst, setAttendeeFirst] = useState(null);
  const [attendeeLast, setAttendeeLast] = useState(null);
  const [attendeeAge, setAttendeeAge] = useState(null);
  const [guardianFullName, setGuardianFullName] = useState(null);
  const [guardianPhone, setGuardianPhone] = useState(null);
  const [guardianEmail, setGuardianEmail] = useState(null);
  //Response State
  const [response, setResponse] = useState(null);

  function handleSubmit() {
    axios
      .post("https://pavefoundation-api.herokuapp.com/2021camp", {
        attendeeFirst: attendeeFirst,
        attendeeLast: attendeeLast,
        attendeeAge: attendeeAge,
        guardianFullName: guardianFullName,
        guardianPhone: guardianPhone,
        guardianEmail: guardianEmail,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          setResponse({
            status: 200,
            text: "Thank You for RSVP",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!response || response.status === 400) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div className="helping-form">
          <div className="section-heading d-flex flex-column align-items-center justify-contents-center">
            <div className="section-icon">
              <img src="/images/section-icon.png" alt="section-icon" />
            </div>
            <h2 className="section__title ">RSVP Now!</h2>
            <p className="section__meta">Contact Us for More Details</p>
          </div>
          <div className="form-shared">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeHolder="Attendee First Name"
                    onChange={(e) => setAttendeeFirst(e)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeHolder="Attendee Last Name"
                    onChange={(e) => setAttendeeLast(e)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeHolder="Attendee Age"
                    onChange={(e) => setAttendeeAge(e)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeHolder="Guardian Full Name"
                    onChange={(e) => setGuardianFullName(e)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeHolder="Guardian Phone"
                    onChange={(e) => setGuardianPhone(e)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeHolder="Guardian Email"
                    onChange={(e) => setGuardianEmail(e)}
                  />
                </div>
              </div>
            </div>
            <input
              className="theme-btn btn-sm p-1 mt-2 mb-3"
              type="submit"
              style={{ width: "150px" }}
              value="submit"
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </div>
    );
  }
  if (response.status === 200) {
    return (
      <div>
        <h3 className="h3">Thank You For Your Interest</h3>
        <h4 className="h4">We'll reach out soon!</h4>
      </div>
    );
  }
}
