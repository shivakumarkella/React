import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [auth, setAuth] = useState("Click Here to Sign In");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            id="btnSignIn"
            onClick={() => {
              auth === "Login" ? setAuth("Log out") : setAuth("Login");
            }}
          >
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
