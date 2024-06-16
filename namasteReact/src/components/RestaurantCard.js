import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const restaurant = props.resData.info;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restaurant;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
      />

      <h3>{name} </h3>

      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating + " Stars"} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
