import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function NewsletterForm() {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  function removeError() {
    const errorMesaggeTag = document.querySelector("#");
    errorMesaggeTag.parentNode.removeChild(errorMesaggeTag);
  }
  function handleSubmit() {
    var data = qs.stringify({
      emailAddress: email,
      fvv: "1",
      draftResponse: '[null, null, "461536633622265465"]',
      pageHistory: "0",
      fbzx: "461536633622265465",
    });
    var config = {
      method: "post",
      url:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdAbjD-uXppApTFXtN5moklEphu56036NGrsGCCw8F2CUpyvA/formResponse",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "S=spreadsheet_forms=gJD_wvqnzlkXT4JqVH6PraODubFWDnlRtOouUO8N0ys; NID=204=rq2wvALAs09_qHKG564_wbqp5OY-UXYnc7F8jBqf59lpTKIjJyijSN9f-9po924SdjIN3_UhKi6isFDHEO0KlWMnVO_BsZ6qTIcppINxes1Kl1pyIELyRvvECqbuEBIqvYywsE9llaeFKbJeppx_OvkvclBV_uNDLRCPQgnVdwM",
      },
      data: data,
    };
    axios(config).then(console.log).catch(console.log);
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
