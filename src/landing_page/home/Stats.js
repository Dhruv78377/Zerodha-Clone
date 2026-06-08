import React from "react";

function Stats() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-5 p-5">
          <h4 className="fw-semibold text-muted mt-5 fs-2">
            Trust with confidence
          </h4>
          <h5 className="fw-semibold text-muted mt-5 fs-4">
            Customer-first always
          </h5>
          <p className="lead mt-2">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h5 className="fw-semibold text-muted mt-5 fs-4">
            No spam or gimmicks
          </h5>
          <p className="lead mt-2">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h5 className="fw-semibold text-muted mt-5 fs-4">
            The Zerodha universe
          </h5>
          <p className="lead mt-2">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5 className="fw-semibold text-muted mt-5 fs-4">
            Do better with money
          </h5>
          <p className="lead mt-2">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-7 p-5">
          <img
            src="media/ecosystem.png"
            alt="Eco"
            className="mt-5"
            style={{ width: "110%" }}
          />

          <div>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Try kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <img
          src="media/press-logos.png"
          alt="Press"
          className="mt-5 mx-auto d-block"
          style={{ width: "700px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Stats;
