import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="https://c1.wallpaperflare.com/preview/756/507/790/clothes-fashion-clset-wardrobe.jpg"
          className="card-img"
          alt="Backgorund"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 ">
              NEW SEASON ARRIVAL
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
