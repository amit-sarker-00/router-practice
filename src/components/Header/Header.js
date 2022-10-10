import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header bg-cyan-700 p-5 flex justify-between text-center ">
      <div>
        <h4 className="text-2xl font-bold text-stone-50 font-mono">
          Logo Here
        </h4>
      </div>
      <div className="">
        <Link to="home">Home</Link>
        <Link to="reviews">Reviews</Link>
        <Link to="portfolio">Portfolio</Link>
        <Link to="about">About</Link>
      </div>
    </div>
  );
};

export default Header;
