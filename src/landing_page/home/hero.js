import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col text-center">
          <img
            src="media/homeHero.png"
            alt="Hero"
            className="mb-5"
            style={{ width: "1000px", height: "auto" }}
          />

          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "15%", backgroundColor: "#387ED1" }}
          >
            SignUp For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
