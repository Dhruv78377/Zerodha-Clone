import React from "react";

function RightSection({ imageURL, productName, productDescription, demo }) {
  return (
    <div className="container p-5">
      <div className="row mt-5" style={{ marginTop: "100px" }}>
        <div className="col-1"></div>
        <div className="col-5">
            <h1 className="fs-3 mb-2">{productName}</h1>
            <p className="text-muted mt-3 fs-5">{productDescription}</p>
            <a href={demo}>
              {demo}<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 text-center">
          <div>
            <img src={imageURL} 
            style={{width: "110%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
