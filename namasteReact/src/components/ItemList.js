import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  return data?.itemCards?.map((item) => (
    <div
      key={item.id}
      className="p-5 shadow-lg mb-4 rounded-lg flex items-center"
      id="manipulate"
    >
      <div className="ml-4 flex-1">
        <div className="font-semibold text-gray-600">
          {item?.card?.info?.name}
        </div>
        <div className="text-base font-semibold">
          <span>
            ₹{" "}
            {(item?.card?.info?.defaultPrice || item?.card?.info?.price) / 100}
          </span>
        </div>
        {item?.card?.info?.ratings?.aggregatedRating?.rating > 0 && (
          <div className="text-sm text-pretty text-gray-600">
            {item?.card?.info?.ratings?.aggregatedRating?.rating}
            {item?.card?.info?.ratings?.aggregatedRating?.rating >= 2.5 ? (
              <span>❇️</span>
            ) : (
              <span>⭐</span>
            )}
            ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
          </div>
        )}
        <div className="text-xs text-gray-500 font-medium mt-2">
          {item?.card?.info?.description}
        </div>
      </div>
      <div className="relative h-36 w-36 flex-shrink-0 ml-auto">
        <img
          src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
          alt={item?.card?.info?.name}
          style={{
            height: "144px",
            aspectRatio: "156 / 144",
            width: "156px",
            objectFit: "cover",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)",
            borderRadius: "32px",
          }}
          className="rounded-lg shadow-md"
        />
        <button
          className="absolute inset-0 bg-transparent text-black flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100"
          onClick={() => {
            /* Handle button click */
          }}
        >
          Add
        </button>
      </div>
    </div>
  ));
};

export default ItemList;
