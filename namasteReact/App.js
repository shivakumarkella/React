import React from "react";
import ReactDOM from "react-dom";
import restaurants from "./restaurants";

//headerComponent
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const restaurant = props.resData.info;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restaurant;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name} </h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating + " Stars"} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="searchbar-container">search bar</div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
