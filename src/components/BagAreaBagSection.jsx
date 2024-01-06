import React from "react";
import "../componentsCss/BagAreaBagSection.css";
import viewbag from "../icons/viewbag.png";
import bagitem1 from "../icons/bagitem1.svg";
import bagitem2 from "../icons/bagitem2.svg";
import bagitem3 from "../icons/bagitem3.svg";
import bagitem4 from "../icons/bagitem4.svg";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
function BagArea() {
  const cart = useSelector(state => state.product.cart);
  const totalPrice = useSelector(state => state.product.totalPrice);
  const Navigate = useNavigate();
  function goToCheckout() {
    Navigate(`/checkout`);
  }
  return (
    <div className="bagArea">
      <h1 className="title">BAG</h1>
      <div className="bagItems">
        {cart.map(c => <div className="bagItem">
          <img className="bagImg" src={c.image} alt="2" />
        </div>)}
      </div>

      <div className="checkout">
        <p>Bag Total:</p>
        <p>${Math.floor(totalPrice)}</p>
      </div>
      <button className="viewbag" onClick={goToCheckout}>
        <img src={viewbag} alt="viewbagicon" />
        <p className="pTagViewBag">Checkout</p>
      </button>
    </div>
  );
}

export default BagArea;
