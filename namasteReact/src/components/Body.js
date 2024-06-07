import RestaurantCard from "./RestaurantCard";
import ShimmerUiCard from "./ShimmerUiCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [list, setList] = useState([]);
  const [originalRestaurants, setoriginalRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    let swiggyData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let resD = await swiggyData.json();
    let restaurants =
      resD?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setoriginalRestaurants(restaurants);
    setList(restaurants);
  };

  return (
    <div className="body">
      <div className="searchbar-container">
        <button
          onMouseEnter={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4.5);
            setList(filteredList);
          }}
          onMouseLeave={() => {
            console.log(originalRestaurants);
            setList(originalRestaurants);
          }}
        >
          Filter The Best RestaurantCard
        </button>
      </div>
      <div className="restaurant-container">
        {list.length > 0 ? (
          list.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <div className="restaurant-container">
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
            <ShimmerUiCard />
          </div>
        )}

        {/* {list.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
