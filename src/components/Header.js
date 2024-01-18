import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../Images/logo-rmbg.png";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";
import cart from "../Images/cart.png";

const Header = () => {
  const [btnstate, setBtnstate] = useState("LogIn");
  const { loggedInUser } = useContext(UserContext);
  console.log("loggedusercontext:", loggedInUser);
  const onlineStatus = useOnlineStatus();
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

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
            <li className="px-4 hover:shadow-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 hover:shadow-xl">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 hover:shadow-xl">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 hover:shadow-xl">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 hover:shadow-xl">
              <Link to="/cart" className="font-bold text-xl flex">
                <img src={cart} alt="cart" className="w-8 mr-2" />
                {cartItems.length > 0 ? cartItems.length : ""}
              </Link>
            </li>
            <li className="px-4 hover:shadow-xl">
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
            {/* <li className="px-4 hover:shadow-xl">
              <Link to="/">
                <h1>{loggedInUser}</h1>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
