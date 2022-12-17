import React from "react";

function Header() {
  return (
    <header>
      <h1 className="main-heading">Password Generator</h1>
      <p className="tagline">
        Passwords are generated on your device and are not stored,
        <span> tracked or transported across the internet.</span>
      </p>
    </header>
  );
}

export default Header;
