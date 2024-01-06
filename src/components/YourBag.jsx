import React from "react";
import "../componentsCss/YourBag.css";
import star from "../icons/star.svg";
import halfstar from "../icons/halfstar.png";
import increase from "../icons/increase.svg";
import decrease from "../icons/decrease.svg";
import yourbag1 from "../icons/yourbag1.svg";
import yourbag2 from "../icons/yourbag2.svg";
import yourbag3 from "../icons/yourbag3.svg";
import { useSelector } from "react-redux"
function YourBag() {
  const cart = useSelector(state => state.product.cart)
  return (
    <div className="yourBag">
      <h1 className="headerYourBag">Check your Bag Items</h1>
      <div className="bagContents">
        {cart.map(c => <div className="itemInBag">
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
        </div>)}
      </div>
    </div>
  );
}

export default YourBag;
