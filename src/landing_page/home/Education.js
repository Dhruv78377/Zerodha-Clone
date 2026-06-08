import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-5">
          <img
            src="media/index-education.svg"
            alt="Zero"
            className="p-4"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-7 p-5">
          <h2 className="fw-semibold text-muted mt-5 fs-2">
            Free and open market education
          </h2>
          <p className="lead mt-2 fs-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-5">
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="lead mt-2 fs-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-5">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
