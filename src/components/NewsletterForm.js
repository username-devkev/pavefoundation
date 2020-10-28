import React, { useState } from "react";
import axios from "axios";

export default function NewsletterForm() {
  const [email, setEmail] = useState(null);

  let header = {
    "Access-Control-Allow-Origin": "*",
    emailAddress: email,
    fvv: 1,
    draftResponse: [null, null, "-5532202287099307631"],
    pageHistory: 0,
    fbzx: -5532202287099307631,
  };

  function onSubmit() {
    axios
      .post(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdAbjD-uXppApTFXtN5moklEphu56036NGrsGCCw8F2CUpyvA/formResponse",
        {
          header,
        }
      )
      .then((res) => console.log("successsssssssss", res))
      .catch((err) => console.log("error", err));
  }

  return (
    <div>
      <h1 style={{ color: "#FFF" }}>Newsletter Registration</h1>
      <h2 style={{ color: "#FFF" }}>Email Address:</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="submit" value="submit" onClick={() => onSubmit()} />
    </div>
  );
}
