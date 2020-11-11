import React, { useState } from "react";
import axios from "axios";

export default function NewsletterForm() {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);

  function onSubmit() {
    axios
      .post("http://localhost:5000/email", {
        emailAddress: email,
      })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          setResponse({
            status: 200,
            text: "Thank You for Subscribing",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!response || response.status === 400) {
    return (
      <div
        className={"container pt-0 pb-0 mt-3 mb-3 ml-2"}
        style={{ height: "300px" }}
      >
        <div
          id="form-Newsletter"
          className={
            "section-heading footer-heading row d-flex flex-column justify-content-center"
          }
        >
          <div className="section-icon">
            <img src="/images/section-icon.png" alt="section-icon" />
          </div>
          <h2 className="h3" style={{ color: "#FFF" }}>
            Newsletter Registration
          </h2>
          <div className="d-flex flex-row mt-2 mb-2">
            <h3 className="section__meta h4 pr-4" style={{ color: "#FFF" }}>
              Email Address:
            </h3>
            <input
              type="email"
              style={{ width: "200px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <input
            className="theme-btn btn-sm p-1 mt-2 mb-3"
            type="submit"
            style={{ width: "150px" }}
            value="submit"
            onClick={() => onSubmit()}
          />
        </div>
      </div>
    );
  }
  if (response.status === 200) {
    return (
      <div>
        <h1 style={{ color: "#FFF" }}>Thanks for subscribing</h1>
      </div>
    );
  }
}
