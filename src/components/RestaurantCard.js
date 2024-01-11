import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRating,
  sla
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="res-content">
        <h2>{name}</h2>
        <br />
        <p>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</p>
        <h4>{areaName}</h4>
        <span>
          <p>{avgRating} stars</p>
          <p>{costForTwo}</p>
          <p>{sla.slaString}</p>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
