import React from "react";
import "../componentsCss/BagArea.css";
import viewbag from "../icons/viewbag.png";
import bagitem1 from "../icons/bagitem1.svg";
import bagitem2 from "../icons/bagitem2.svg";
import bagitem3 from "../icons/bagitem3.svg";
import bagitem4 from "../icons/bagitem4.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BagArea() {
  const Navigate = useNavigate();
  const cart = useSelector(state => state.product.cart)
  console.log(cart)
  function goToMyBag() {
    Navigate(`/mybag`);
  }
  return (
    <div className="bagArea">
      <h1 className="title">BAG</h1>
      <div className="bagItems">
        {cart.map(c => <div className="bagItem">
          <img className="bagImg" src={c.image} alt="4" />
        </div>)}
      </div>

      <button className="viewbag" onClick={goToMyBag}>
        <img src={viewbag} alt="viewbagicon" />
        <p className="pTagViewBag">View Bag</p>
      </button>
    </div>
  );
}

export default BagArea;
