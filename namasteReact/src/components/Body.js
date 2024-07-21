import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { topRestaurant } from "./RestaurantCard";
import ShimmerUiCard from "./ShimmerUiCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const TopRestaurantCard = topRestaurant(RestaurantCard);

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setOriginalRestaurants(restaurants);
      setList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = originalRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredList);
  };

  const handleFilterBest = () => {
    const filteredList = originalRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setList(filteredList);
  };

  const resetList = () => {
    setList(originalRestaurants);
  };

  return (
    <div>
      <div className="bg-gray-300 px-5 py-3 flex items-center space-x-2">
        <input
          className="border border-gray-300 rounded px-2 py-1 flex-grow"
          type="text"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-gray-400 py-1 px-3 rounded-xl font-semibold"
          onClick={handleSearch}
        >
          Search Restaurants
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded-xl font-semibold"
          onMouseEnter={handleFilterBest}
          onMouseLeave={resetList}
        >
          Filter The Best Restaurants
        </button>
        <label>User Name : </label>
        <input
          type="text"
          className="border border-black p-3"
          onChange={(e) => console.log(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {list.length > 0 ? (
          list.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/Restaurant/${restaurant.info.id}`}
              className="m-2"
            >
              {restaurant.info.avgRating >= 4.5 ? (
                <TopRestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div className="restaurant-container">
            {[...Array(12)].map((_, index) => (
              <ShimmerUiCard key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
