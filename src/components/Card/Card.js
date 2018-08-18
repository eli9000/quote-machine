import React from "react";
import PropTypes from "prop-types";

import "./card.css";

const Card = props => {
  const tweet = `https://twitter.com/intent/tweet?hashtags=quotes,antioch,yore&text=%22${
    props.quote
  }%22%20${props.author}`;

  return (
    <div className="card" id="quote-box">
      <div className="quote" id="text">
        <i className="fas fa-quote-left" />
        {props.quote}
      </div>
      <div className="container">
        <button id="new-quote" onClick={props.newIsh}>
          Get New Quote
        </button>
        <a href={tweet} target="_blank">
          <button id="tweet-quote">
            Tweet! <i className="fab fa-twitter" />
          </button>
        </a>
        <a href={props.wiki} target="_blank">
          <button id="wiki-quote">Wiki {props.author}</button>
        </a>
      </div>
      <div className="author" id="author">
        {props.author}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
  newIsh: PropTypes.func.isRequired
};

export default Card;

// Twitter query example
// https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It%E2%80%99s%20your%20place%20in%20the%20world%3B%20it%E2%80%99s%20your%20life.%20Go%20on%20and%20do%20all%20you%20can%20with%20it%2C%20and%20make%20it%20the%20life%20you%20want%20to%20live.%22%20Mae%20Jemison
