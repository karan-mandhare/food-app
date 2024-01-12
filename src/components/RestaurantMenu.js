import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { ITEM_IMG } from "../utils/constants";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resItem, setResItem] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${MENU_API}${resId}`);
      const json = await data.json();
      const resInfodata = json?.data?.cards[0]?.card?.card?.info;
      const resItemdata =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
      setResInfo(resInfodata);
      setResItem(resItemdata);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  if (resItem === null || resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    sla,
    expectationNotifiers,
  } = resInfo || {};

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
          {resItem.map((res) => {
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
