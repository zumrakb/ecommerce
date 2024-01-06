import React from "react";
import addtobag from "../icons/addtobag.svg";
import "../componentsCss/ItemDetail.css";
import backicon from "../icons/backicon.png";
import star from "../icons/star.svg";
import halfstar from "../icons/halfstar.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/reducers/productReducer";

function ItemDetail({image, name, description, price, rating, category}) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  function goToHome() {
    Navigate(`/`);
  }
  function handleOnClick() {
    dispatch(addToCart({image, name, description, price, rating, category}))
  }
  return (
    <div className="itemdetail">
      <div className="navlink" onClick={goToHome}>
        <img className="navlinkimg" src={backicon} alt="backicon" />
        <p className="navlinkP">Back</p>
      </div>

      <div className="topArea">
        <div className="imgArea">
          <div className="imgGallery">
            <div className="gallery1">
              <img src={image} alt="img" />
            </div>
            <div className="gallery1">
              <img src={image} alt="img" />
            </div>
            <div className="gallery1">
              <img src={image} alt="img" />
            </div>
          </div>
          <div className="mainImg">
            <img src={image} alt="mainimage" />
          </div>
        </div>
        <div className="textContent">
          <div className="header">
            <h1 className="modeltitle">{name}</h1>
            <h3 className="modelname">{category}</h3>
          </div>
          <div className="special">
            <div className="rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={halfstar} alt="star" />
            </div>
            <h4 className="ratenumber">{rating}/5</h4>
          </div>
          <h3 className="price">${price}</h3>
          <div className="shortDescription">
            <p className="briefDesc">
              {description}
            </p>
            <button onClick={handleOnClick} className="addtocart">
              <img
                className="addtobagstyle"
                src={addtobag}
                alt="carticon"

              ></img>
              <p>Add to Bag</p>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottomArea">
        <h2 className="descriptionTitle">Description</h2>
        <p className="descriptionText">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ItemDetail;
