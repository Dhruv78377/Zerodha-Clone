import React from "react";
import Education from "./Education";
import Pricing from "./pricing";
import Stats from "./Stats";
import Hero from "./hero";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
