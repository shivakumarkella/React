import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [Restaurantinfo, setRestaurantinfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState();
  let categories;
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(MENU_URL + resId);
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }
      const recommendedMenu = await response.json();
      setRestaurantinfo(recommendedMenu);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  if (Restaurantinfo === null) {
    return <p>menu about to load</p>;
  } else {
    categories =
      Restaurantinfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => {
          const cardType = c.card?.["card"]?.["@type"];
          return (
            cardType ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            cardType ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          );
        }
      );
  }

  return (
    <div className=" space-y-6 w-6/12 m-auto flxe h-screen">
      <span> </span>
      <div className="bg-slate-100 shadow-lg rounded-xl ">
        <h1 className=" font-bold font-serif text-xl text-center">
          {Restaurantinfo.data.cards[2].card.card.info.name}
        </h1>
        <h1 className=" font-semibold text-center">
          {Restaurantinfo.data.cards[2].card.card.info.costForTwoMessage}
        </h1>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
