// import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { ITEM_IMG } from "../utils/constants";
// import { MENU_API } from "../utils/constants";
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
    <div className="menu">
      <div className="top-content">
        <h1>{name}</h1>
        <p>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</p>
        <p>{areaName}</p>
        <p id="distance">{expectationNotifiers[0].text}</p>
        <hr />
        <h3>
          {sla.slaString} - {costForTwoMessage}
        </h3>
        <hr />
      </div>

      <div className="rec-list">
        <h2>Recommended ({resItem ? resItem.length : 0})</h2>
        <ul>
          {Array.isArray(resItem) &&
            resItem.map((res) => {
              return (
                <div className="item-container" key={res.card.info.id}>
                  <li>
                    <div className="item-info">
                      <p>{res.card.info.name}</p>
                      <p>Rs.{res.card.info.defaultPrice / 100}</p>
                    </div>
                    <div className="item-img">
                      <img src={ITEM_IMG + res.card.info.imageId} alt="" />
                    </div>
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
