import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState("Click Here to Sign In");

  return (
    <div className="flex justify-between bg-gray-300">
      <div className="w-[150px] bg-center py-2">
        <img className=" rounded-full" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex m-10 place-content-center">
          <li className="px-5">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-5">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-5">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-5">Cart</li>
          <button
            className=" bg-gray-400 py-1 px-2 rounded-xl font-semibold"
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
