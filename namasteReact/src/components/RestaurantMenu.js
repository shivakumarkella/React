import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [Restaurantinfo, setRestaurantinfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
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
  }
  return (
    <div>
      <h1>{Restaurantinfo.data.cards[2].card.card.info.name}</h1>
      <ul>
        {Restaurantinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
          (i) => (
            <li key={i.card.info.id}>{i.card.info.name}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
