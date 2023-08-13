import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home/:id" component={Product} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" component={Product} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
