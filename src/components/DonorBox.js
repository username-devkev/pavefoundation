import React from "react";

export default function DonorBox() {
  return (
    <div>
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
  );
}
