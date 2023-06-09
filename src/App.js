import "./App.css";
import Home from "./components/HomePage/Main";
import Products from "./components/Pages/Products/Products";
import ProductPage from "./components/Pages/Products/ProductPage";
import Account from "./components/Pages/User/Account";
import Sell from "./components/Sell/Sell";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productpage" element={<ProductPage />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/add" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
