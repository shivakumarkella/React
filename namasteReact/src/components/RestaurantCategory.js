import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);
  return (
    <div className="mb-4">
      <div className="py-2 px-4 bg-slate-100 rounded-t-lg">
        <span></span>
      </div>
      <div className="bg-white shadow-lg rounded-b-lg border border-gray-300">
        <div className="p-4">
          <div className="text-black font-bold text-lg mb-2">
            <div className="flex justify-between items-center">
              <div>
                {data.title}
                {data?.itemCards?.length > 0 && (
                  <span className="ml-2 text-gray-500">
                    ({data.itemCards.length})
                  </span>
                )}
              </div>
              {data?.itemCards?.length > 0 && (
                <div
                  className="text-gray-600 mr-5 cursor-pointer"
                  onClick={() => {
                    setShowItems(!showItems);
                  }}
                >
                  ▼
                </div>
              )}
            </div>
            {data?.itemCards?.map(
              (item) => showItems && <ItemList item={item} />
            )}

            {data?.categories?.length > 0 &&
              data.categories.map((category) => (
                <div
                  key={category.id}
                  className="mt-3 flex items-center justify-between border-t pt-3"
                >
                  <div className="font-semibold">
                    {category.title}
                    {category?.itemCards?.length > 0 && (
                      <span className="ml-2 text-gray-500">
                        ({category.itemCards.length})
                      </span>
                    )}
                  </div>
                  <div
                    className="text-gray-600 mr-5 cursor-pointer"
                    onClick={() => {
                      console.log("Its clicked");
                    }}
                  >
                    ▼
                  </div>
                  <div>nested Items yet to be displayed</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
