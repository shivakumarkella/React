import React, { useContext } from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.resData.info;

  return (
    <div className="w-[250px] h-[370px] m-2 bg-gray-300 rounded-xl overflow-hidden">
      <img
        className="w-full h-[50%] rounded-t-xl"
        src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <h4 className="whitespace-normal">{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    </div>
  );
};

const topRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white absolute m-0 rounded">
          Wow Rating
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export { topRestaurant };
export default RestaurantCard;
