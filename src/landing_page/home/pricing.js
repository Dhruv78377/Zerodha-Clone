import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left section with text */}
        <div className="col-5 p-5">
          <h2 className="fw-semibold text-muted mt-5 fs-2">
            Unbeatable pricing
          </h2>
          <p className="lead mt-2 fs-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right section with images */}
        <div className="col-7 d-flex justify-content-around">
          <img
            src="media/zeropricing.svg"
            alt="Zero"
            className="p-4"
            style={{ width: "30%" }}
          />
          <img
            src="media/zeropricing2.svg"
            alt="Zero2"
            className="p-4"
            style={{ width: "30%" }}
          />
          <img
            src="media/othertrades.svg"
            alt="Twenty"
            className="p-4"
            style={{ width: "30%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
