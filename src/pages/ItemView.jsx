import React, { useEffect } from "react";
import "../pages/ItemView.css";
import NavbarItemView from "../components/NavbarItemView";
import ItemDetail from "../components/ItemDetail";
import BagAreaItemDetail from "../components/BagAreaItemView";
import { fetchProductById } from "../redux/reducers/productReducer"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
function ItemView() {
  const { pageid } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product);
  const loading = useSelector(state => state.product.loading);
  useEffect(() => {
    dispatch(fetchProductById(pageid))
  }, [dispatch, pageid]);
  console.log(product);
  return (
    <div className="itemView">
      <NavbarItemView />
      {!loading && <ItemDetail name={product.title} image={product.image}  price={product.price} rating={product.rating?.rate} category={product.category} description={product.description} />}
      <hr className="vr" />
      <BagAreaItemDetail />
    </div>
  );
}

export default ItemView;
