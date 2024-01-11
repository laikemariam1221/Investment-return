import logo from "../assets/investment-calculator-logo.png";
import React from "react";
import header from "./header.module.css"
function Header() {
  return (
    <div>
      <header className={header.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}

export default Header;
