import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        {/* Account Opening Section */}
        <div className="col-8">
          {/* Dropdown */}
          <div className="dropdown mt-2" style={{ backgroundColor: "white" }}>
            <button
              className="btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
              type="button"
              id="accountDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ border: "1px solid #ccc" }}
            >
              <h4 className="text-muted">
                <i
                  className="fa fa-plus-circle p-2"
                  aria-hidden="true"
                  style={{ color: "#387ED1" }}
                ></i>{" "}
                Account Opening
              </h4>
            </button>
            <ul
              className="dropdown-menu w-100"
              aria-labelledby="accountDropdown"
            >
              <li>
                <a
                  className="dropdown-item"
                  style={{ color: "#387ED1" }}
                  href="#"
                >
                  Resident individual
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  style={{ color: "#387ED1" }}
                  href="#"
                >
                  Minor
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  style={{ color: "#387ED1" }}
                  href="#"
                >
                  Non Resident Indian (NRI)
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  style={{ color: "#387ED1" }}
                  href="#"
                >
                  Company, Partnership, HUF and LLP
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  style={{ color: "#387ED1" }}
                  href="#"
                >
                  Glossary
                </a>
              </li>
            </ul>
          </div>

          <div className=" mt-2">
            {/* Dropdown */}
            <div className="dropdown mt-3" style={{ backgroundColor: "white" }}>
              <button
                className="btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "1px solid #ccc" }}
              >
                <h4 className="text-muted">
                  <i
                    class="fa fa-user-circle"
                    aria-hidden="true"
                    style={{ color: "#387ED1" }}
                  ></i>{" "}
                  Your Zerodha Account
                </h4>
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Your Profile
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Account modification
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Client Master Report (CMR) and Depository Participant (DP)
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Nomination
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Transfer and conversion of securities
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-2">
            {/* Dropdown */}
            <div className="dropdown mt-3" style={{ backgroundColor: "white" }}>
              <button
                className="btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "1px solid #ccc" }}
              >
                <h4 className="text-muted">
                  <i
                    class="fa fa-crosshairs"
                    aria-hidden="true"
                    style={{ color: "#387ED1" }}
                  ></i>{" "}
                  Kite
                </h4>
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    IPO
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Trading FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Margin Trading Facility (MTF) and Margins
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Charts and orders
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Alerts and Nudges
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    General
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-2">
            {/* Dropdown */}
            <div className="dropdown mt-3" style={{ backgroundColor: "white" }}>
              <button
                className="btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "1px solid #ccc" }}
              >
                <h4 className="text-muted">
                  <i
                    class="fa fa-inr"
                    aria-hidden="true"
                    style={{ color: "#387ED1" }}
                  ></i>{" "}
                  Funds
                </h4>
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Add money
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Withdraw money
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Add bank accounts
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    eMandates
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-2">
            {/* Dropdown */}
            <div className="dropdown mt-3" style={{ backgroundColor: "white" }}>
              <button
                className="btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "1px solid #ccc" }}
              >
                <h4 className="text-muted">
                  <i
                    class="fa fa-chevron-right"
                    aria-hidden="true"
                    style={{ color: "#387ED1" }}
                  ></i>{" "}
                  Console
                </h4>
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Corporate actions
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Funds statement
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-2">
            {/* Dropdown */}
            <div className="dropdown mt-3" style={{ backgroundColor: "white" }}>
              <button
                className="btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "1px solid #ccc" }}
              >
                <h4 className="text-muted">
                  <i
                    class="fa fa-circle-o-notch"
                    aria-hidden="true"
                    style={{ color: "#387ED1" }}
                  ></i>{" "}
                  Coin
                </h4>
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Open Demat Account
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Minor Demat Account
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Account Closure
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: "#387ED1" }}
                    href="#"
                  >
                    Update KYC
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="featured-content"
          class="col-4 mt-5 px-5 py-3 mb-5"
          style={{ color: "#424242" }}
        >
          <ul>
            <li>
              <a class="featured-link" href="" style={{color: "#387ED1"}}>
                Exclusion of F&amp;O contracts on 8 securities from August 29,
                2025
              </a>
            </li>
            <li>
              <a class="featured-link" href="" style={{color: "#387ED1"}}>
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
          </ul>

          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th className="text-start"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Quick Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#" style={{ color: "#387ED1", textDecoration:"none" }}>1. Track account opening</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" style={{ color: "#387ED1", textDecoration:"none"  }}>2. Track segment activation</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" style={{ color: "#387ED1", textDecoration:"none"  }}>3. Intraday margins</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" style={{ color: "#387ED1", textDecoration:"none"  }}>4. Kite user manual</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
