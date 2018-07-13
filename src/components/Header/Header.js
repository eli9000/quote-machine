import React from "react";
import "./header.css";

const Header = () => (
  <ul>
    <li>
      <a className="active" href="/home">
        Home
      </a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
    <li>
      <a href="/home">
        <i className="fab fa-twitter" />
      </a>
    </li>
  </ul>
);

export default Header;
