import React from 'react'
import { useNavigate } from "react-router-dom"
import addbag from "../icons/addtobag.svg";
import "../componentsCss/ProductCard.css";
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducers/productReducer"
function ProductCard({image, name, price, index, category, description}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function goToItem() {
        navigate(`/viewitem/${index}`);
    }
    function handleAddToCart() {
      dispatch(addToCart({
        image, name, price, category, description
      }))
    }
  return (
    <div className="itemCard" >
            <div onClick={goToItem} className="productImg">
              <img src={image} alt="product"></img>
            </div>

            <div className="content">
              <h3 onClick={goToItem}>{name}</h3>
              <h5>{category}</h5>
              <div className="itemCardBottom">
                <h3>${price}</h3>
                <button onClick={handleAddToCart} className="addtocart">
                  <img src={addbag} alt="carticon"></img>
                </button>
              </div>
            </div>
          </div>
  )
}

export default ProductCard