import React from "react";
import "../pages/Checkout.css";
import star from "../icons/star.svg";
import halfstar from "../icons/halfstar.png";
import increase from "../icons/increase.svg";
import decrease from "../icons/decrease.svg";
import yourbag1 from "../icons/yourbag1.svg";
import yourbag2 from "../icons/yourbag2.svg";
import yourbag3 from "../icons/yourbag3.svg";
import backicon from "../icons/backicon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
  const Navigate = useNavigate();
  const cart = useSelector(state => state.product.cart);
  const totalPrice = useSelector(state => state.product.totalPrice)
  function goToMyBag() {
    Navigate(`/mybag`);
  }
  return (
    <div className="checkoutPage">
      <div className="leftOfCheckout">
        <div className="addressCard">
          <h2 className="addressTitle">SHIPPING ADDRESS</h2>
          <div className="addressDetail">
            <div className="texts">
              <p className="text">John Maker</p>
              <p className="text">123 Plae Grond Stret</p>
              <p className="text">Vermont, California</p>
              <p className="text">United States of America</p>
            </div>
            <button className="change">Change</button>
          </div>
        </div>
        <div className="addressCard">
          <h2 className="addressTitle">PAYMENT METHOD</h2>
          <div className="addressDetail">
            <div className="texts">
              <p className="text">
                <b>Mastercard</b> ending in 0000
              </p>
              <p className="text">
                <b>$ 53.21</b> gift card balance
              </p>
              <p className="text">Billing address same as Shipping Address</p>
            </div>
            <button className="change">Change</button>
          </div>
        </div>

        <div className="checkoutBag">
          {cart.map(c => <>
          <div className="itemInBagCheckout">
            <div className="productBackground">
              <img src={c.image} alt="productimg" className="productImg" />
            </div>
            <div className="textContent">
              <h3 className="titleProduct">{c.name}</h3>
              <p>
                {c.description}
              </p>
              <div className="thestars">
                <div className="rating">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={halfstar} alt="star" />
                </div>
                <h4 className="ratenumber">{c.rating}/5</h4>
              </div>

              <div className="priceQuantity">
                <p>${c.price}</p>
                <div className="quantity">
                  <button className="decrease">
                    <img src={decrease} alt="decrease" />
                  </button>
                  <p>1</p>
                  <button className="increase">
                    <img src={increase} alt="increase" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="checkoutHr" /></>)}
        
        </div>
      </div>
      <div className="rightOfCheckout">
        <div className="totalSummary">
          <h3 className="orderSummary">Order Summary</h3>
          <div className="lines">
            <div className="line">
              <p>Items</p>
              <p>$5454.99</p>
            </div>
            <div className="line">
              <p>Shipping</p>
              <p>$5454.99</p>
            </div>
            <div className="line">
              <p>Estimated GST</p>
              <p>$5454.99</p>
            </div>
            <div className="line">
              <p>Gift Card</p>
              <p>$5454.99</p>
            </div>
          </div>
          <hr className="smallhr" />
          <div className="orderTotal">
            <h3>Order Total:</h3>
            <h3>${Math.floor(totalPrice)}</h3>
          </div>

          <hr className="smallhr" />
          <button className="placeYourOrder">Place your order</button>
        </div>
        <div className="backCheckout" onClick={goToMyBag}>
          <img className="navlinkimg " src={backicon} alt="backicon" />
          <p className="navlinkP">Back</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
