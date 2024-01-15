import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../Images/logo-rmbg.png";

const Header = () => {
  const [btnstate, setBtnstate] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="flex w-full justify-between bg-pink-200 shadow-lg">
        <div>
          <img className="w-20 m-2 ml-10 rounded-lg" src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">
              <Link to="/">Cart</Link>
            </li>
            <li className="px-4">
              <Link to="/login">
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
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
