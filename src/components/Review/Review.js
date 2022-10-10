import React from "react";
import "./Review.css";
const Review = ({ revi }) => {
  const { img, name, review, star } = revi;
  return (
    <div className="review grid grid-cols-2">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p>
          <small className="font-bold">{review.slice(0, 64) + "..."}</small>
        </p>
        <p>
          <strong>{star} stars</strong>
        </p>
      </div>
    </div>
  );
};

export default Review;
