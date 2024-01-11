import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnstate, setBtnstate] = useState("LogIn");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="button-75"
              onClick={() => {
                btnstate === "Login"
                  ? setBtnstate("Logout")
                  : setBtnstate("Login");
              }}
            >
              <span className="text">{btnstate}</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
