import React from "react";

function Hero() {
  return (
    <div className="bg-white py-20 border-b p-5">
      <div className="container mx-auto text-center">
        <h1 className="fs-3 mt-5">Charges</h1>
        <p className="fw-semibold text-muted mb-5">
          List of all charges and taxes
        </p>
        <div className="row mt-5">
          <div className="col-4 p-5">
            <img
              src="media/zeropricing.svg"
              alt="zero"
              className=""
              style={{ width: "90%" }}
            />
            <h1 className="mt-3 fw-semibold text-muted fs-2">Free equity delivery</h1>
            <p className="mt-3 text-muted">
              All equity delivery investments (NSE, BSE),
              <br /> are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/othertrades.svg"
              alt="zero"
              className=""
              style={{ width: "80%" }}
            />
            <h1 className="mt-3 fw-semibold text-muted fs-2">Intraday and F&O trades</h1>
            <p className="mt-3 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on
              intraday trades across<br/> equity, currency, and commodity trades.
              Flat<br/> ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/zeropricing.svg"
              alt="zero"
              className=""
              style={{ width: "90%" }}
            />
            <h1 className="mt-3 fw-semibold text-muted fs-2">Free direct MF</h1>
            <p className="mt-3 text-muted">
              All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
