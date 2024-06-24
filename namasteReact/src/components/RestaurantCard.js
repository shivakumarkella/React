import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const restaurant = props.resData.info;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restaurant;

  return (
    <div className="w-[250px] h-[370px] m-2 bg-gray-300 rounded-xl overflow-hidden">
      <img
        className="w-full h-1/2 rounded-t-xl "
        src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <h4 className="whitespace-normal">{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
