import RestaurantCard from "./RestaurantCard";
import ShimmerUiCard from "./ShimmerUiCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [originalRestaurants, setOriginalRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    try {
      const swiggyData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resD = await swiggyData.json();
      const restaurants =
        resD?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
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
    const filteredList = list.filter((res) => res.info.avgRating > 4.5);
    setList(filteredList);
  };

  return (
    <div>
      <div className="bg-gray-100 px-5 py-3 flex items-center space-x-2">
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
          onMouseLeave={() => setList(originalRestaurants)}
        >
          Filter The Best Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {list.length > 0 ? (
          list.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/Restaurant/" + restaurant.info.id}
              className="m-2"
            >
              <RestaurantCard resData={restaurant} />
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
