import React from "react";
import "../componentsCss/BagAreaItemView.css";
import viewbag from "../icons/viewbag.png";
import bagitem1 from "../icons/bagitem1.svg";
import bagitem2 from "../icons/bagitem2.svg";
import bagitem3 from "../icons/bagitem3.svg";
import bagitem4 from "../icons/bagitem4.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function BagAreaItemDetail() {
  const navigate = useNavigate();
  const cart = useSelector(state => state.product.cart);
  return (
    <div className="bagArea">
      <h1 className="title">BAG</h1>
      <div className="bagItems">
        {cart.map(c => <div className="bagItem">
          <img className="bagImg" src={c.image} alt="2" />
        </div>)}
      </div>

      <button onClick={() => { navigate("/mybag") }} className="viewbag">
        <img src={viewbag} alt="viewbagicon" />
        <p className="pTagViewBag">View Bag</p>
      </button>
    </div>
  );
}

export default BagAreaItemDetail;
