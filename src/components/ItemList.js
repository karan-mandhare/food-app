import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-[1px] border-black text-left"
        >
          <div className="relative">
            <div className="w-10/12">
              <div className="py-2 flex ">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="m-2 p-4 w-3/12">
              <div className="absolute right-4 top-5 z-40">
                <button className="p-2 bg-white text-green-500 shadow-lg m-auto rounded-md w-15 h-10">
                  {" "}
                  Add +{" "}
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="img"
                className="w-2/12 absolute top-0 right-0 rounded-md z-0"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
