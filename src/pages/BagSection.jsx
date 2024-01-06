import React from "react";
import "../pages/BagSection.css";
import Navbar from "../components/NavbarBagSection";
import BagArea from "../components/BagAreaBagSection";
import YourBag from "../components/YourBag";

function BagSection() {
  return (
    <div className="bagSection">
      <Navbar />
      <YourBag />
      <hr className="verticalLine" />
      <BagArea />
    </div>
  );
}

export default BagSection;
