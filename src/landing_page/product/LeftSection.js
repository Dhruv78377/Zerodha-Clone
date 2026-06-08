import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row mt-5" style={{ marginTop: "100px" }}>
        <div className="col-1"></div>
        <div className="col-5 text-center">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h1 className="fs-3 mb-2">{productName}</h1>
          <p className="text-muted mt-3 fs-5">{productDescription}</p>
          <div>
            <a href={tryDemo}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/google-play-badge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/appstore-badge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
