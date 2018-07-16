import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="quote">
        <i className="fas fa-quote-left" />
        {props.quote}&nbsp;
      </div>
      <div className="author">{props.author}</div>
    </div>
  );
};

export default Card;
