import React, { useState } from "react";
import axios from "axios";

export default function NewsletterForm() {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  function removeError() {
    const errorMesaggeTag = document.querySelector("#");
    errorMesaggeTag.parentNode.removeChild(errorMesaggeTag);
  }
  function handleSubmit() {
    axios.get("/functions/api").then((res) => console.log("response=", res));
  }

  function onSubmit() {
    axios
      .post("http://localhost:4000/email", {
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
        setInterval(removeError, 3000);
      });
  }

  if (!response || response.status === 400) {
    return (
      <div className={"container pt-0 pb-0 mt-0 mb-0"}>
        <div
          id="form-Newsletter"
          className={"row d-flex flex-column justify-content-center"}
        >
          <h1 style={{ color: "#FFF" }}>Newsletter Registration</h1>
          <h2 style={{ color: "#FFF" }}>Email Address:</h2>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="submit" value="submit" onClick={() => handleSubmit()} />
        </div>
      </div>
    );
  }
  if (response.status == 200) {
    return (
      <div>
        <h1 style={{ color: "#FFF" }}>Thanks for subscribing</h1>
      </div>
    );
  }
}
