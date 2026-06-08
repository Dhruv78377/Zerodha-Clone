import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="text-center fs-2 text-muted">People</h1>
        <div className="col-6 text-center mt-5">
          <img
            src="media/nithin-kamath.jpg"
            alt="Founder"
            style={{ borderRadius: "50%", width: "50%", height: "auto" }}
          />
          <h4 className="mt-3 text-muted">Nithin Kamath</h4>
          <h6 className="mt-3 text-muted">Founder, CEO</h6>
        </div>

        <div className="col-6">
          <p
            className="mt-5 text-muted"
            style={{ marginLeft: "30px", fontSize: "20px" }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
            <br />
            Heis a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
            <br />
            <br />
            Playing basketball is his zen.
            <br />
            <br />
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
