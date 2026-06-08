import React from "react";

function Universe() {
  return (
    <div className="text-center mt-5">
      <h3 className="mt-5 text-muted mb-3">The Zerodha Universe</h3>
      <p className="mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
          <img
            src="media/zerodhafundhouse.png"
            alt="Fund house"
            style={{ width: "30%" }}
          />
          <p
            className="text-center text-muted p-4 mb-5"
            style={{ fontSize: "15px" }}
          >
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
          <img
            src="media/streak-logo.png"
            alt="Streak"
            className="mt-5"
            style={{ width: "30%" }}
          />
          <p
            className="text-center text-muted p-4 mb-5"
            style={{ fontSize: "15px" }}
          >
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/smallcase-logo.png"
            alt="Smallcase"
            style={{ width: "30%" }}
          />
          <p
            className="text-center text-muted p-4 mb-5"
            style={{ fontSize: "15px" }}
          >
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
          <img
            src="media/sensibull-logo.svg"
            alt="Sensibull"
            className="mt-5"
            style={{ width: "30%" }}
          />
          <p
            className="text-center text-muted p-4 mb-5"
            style={{ fontSize: "15px" }}
          >
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-3">
          <img src="media/tijori.svg" alt="Tijori" style={{ width: "30%" }} />
          <p
            className="text-center text-muted p-4 mb-5"
            style={{ fontSize: "15px" }}
          >
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
          <img
            src="media/ditto-logo.png"
            alt="Ditto"
            className="mt-5"
            style={{ width: "30%" }}
          />
          <p
            className="text-center text-muted p-4 mb-5"
            style={{ fontSize: "15px" }}
          >
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Universe;
