import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/restaurants";

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

export default Body;
