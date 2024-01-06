import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemView from "./pages/ItemView";
import BagSection from "./pages/BagSection";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/viewitem/:pageid" element={<ItemView />}></Route>
        <Route path="/mybag" element={<BagSection />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
