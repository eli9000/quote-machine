import React from "react";
import "./header.css";

const site = "Like this? Check out my site! eli9000.com";
const share = `https://twitter.com/intent/tweet?hashtags=rad,cool&text=${site}`;

const Header = () => (
  <header className="header">
    Quotes from Antioch and Yore
    <div className="social">
      Share via&nbsp;&nbsp;
      <a href={share}>
        <i className="fab fa-twitter-square fa-md" />
      </a>
    </div>
  </header>
);

export default Header;
