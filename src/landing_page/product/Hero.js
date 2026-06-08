import React from "react";

function Hero() {
  return (
    <div className="text-center p-5 mb-5 border-bottom">
      <h1 className="mt-5 fs-2 fw-semibold">Zerodha Products</h1>

      <h3 className="mt-3 fs-4 text-muted">
        Sleek, modern, and intuitive trading platforms
      </h3>

      <p className="mt-3 mb-4">
        Check out our
        <a href="" className="mx-1" style={{ textDecoration: "none" }}>
           investment offerings {" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
