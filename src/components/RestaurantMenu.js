import Shimmer from "./Shimmer";
import { ITEM_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    sla,
    expectationNotifiers,
  } = resInfo?.cards[0]?.card?.card?.info;

  const resItem =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  console.log("resitem:", resItem);

  return (
    <div className="m-4 p-4 mx-80 text-start w-2/4">
      <div className="text-xl">
        <h1 className="pt-4">{name}</h1>
        <p>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</p>
        <p>{areaName}</p>
        <p className="pb-4">{expectationNotifiers[0].text}</p>
        <hr />
        <h3 className="py-4">
          {sla.slaString} - {costForTwoMessage}
        </h3>
        <hr />
      </div>

      <div className="rec-list">
        <h2 className="text-3xl shadow-md my-4">
          Recommended ({resItem ? resItem.length : 0})
        </h2>
        <ul>
          {Array.isArray(resItem) &&
            resItem.map((res) => {
              return (
                <div className="item-container" key={res.card.info.id}>
                  <li className="flex">
                    <div className="ml-4">
                      <p>{res.card.info.name}</p>
                      <p>Rs.{res.card.info.defaultPrice / 100}</p>
                    </div>

                    <img
                      className="w-[150px] h-[100px] item-img"
                      src={ITEM_IMG + res.card.info.imageId}
                      alt=""
                    />
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
