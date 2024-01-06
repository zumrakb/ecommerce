import React, { useState } from "react";
import "../componentsCss/ContentFrame.css";
import { useSelector, useDispatch } from "react-redux"
import ProductCard from "./ProductCard";
import {filterBySearch} from "../redux/reducers/productReducer"

function ContentFrame() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading)
  const [search, setSearch] = useState("");
  const handleOnChange = (e) => {
    setSearch(e.target.value);
    if(!loading)
      dispatch(filterBySearch(search));
  }
  return (
    <div className="contentFrames">
      <div className="topBar">
        <label htmlFor="searchBar">Search item:</label>
        <div className="inputField">
          <input
            type="text"
            id="searchBar"
            value={search}
            onChange={handleOnChange}
            placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          />
        </div>
      </div>
      <div className="contentArea">
        {products.map(product => <ProductCard key={product.id} index={product.id} name={product.title} price={product.price} image={product.image} category={product.category} description={product.description}/>)}
      </div>
    </div>
  );
}

export default ContentFrame;
