import React from "react";

function Hero() {
  return (
    // Full-width background
    <div
      style={{ backgroundColor: "#D3D3D3", width: "100%", padding: "50px 0" }}
    >
      <div className="container">
        {/* Heading and button row */}
        <div className="d-flex justify-content-between align-items-center w-100 mb-3">
          <h1 className="m-0" style={{ color: "black" }}>
            Support Portal
          </h1>
          <button
            className="btn"
            style={{ backgroundColor: "#387ED1", color: "white" }}
          >
            My Ticket
          </button>
        </div>

        {/* Search bar */}
        <div className="w-100">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            style={{
              width: "100%",
              height: "55px", // ✅ Increased height
              fontSize: "1.1rem", // ✅ Larger text inside
              paddingLeft: "15px", // ✅ Better spacing inside
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
