import React from "react";
import { Autoplay } from "swiper";

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
          width: "100%",
          margin: "0 auto",
          padding: "0",
        }}
      ></iframe>
    </div>
  );
}
