import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ContentFrame from "../components/ContentFrame";
import "../pages/Dashboard.css";
import BagArea from "../components/BagArea";
import { fetchProducts } from "../redux/reducers/productReducer";
import { useDispatch } from "react-redux"
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);
  return (
    <div className="dashboard">
      <Navbar />
      <ContentFrame />
      <hr className="vertical" />
      <BagArea />
    </div>
  );
}

export default Dashboard;
