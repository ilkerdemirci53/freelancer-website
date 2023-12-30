import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="images/search.png" alt="search" />
              <input type="text" placeholder="Search" />
            </div>
            <button>
              <span>Search</span>
            </button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Logo Design</button>
            <button>Designer</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/vector-image.png" alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
