import React from "react";
import PropTyes from "prop-types";

const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.PropTyes = {
  tagline: PropTyes.string.isRequired
};
export default Header;
