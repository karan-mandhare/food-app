import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRating,
  sla,
}) => {
  return (
    <div className="w-[300px] h-[430px] m-4 p-2 rounded-md bg-neutral-200 hover:border-2">
      <img
        className="mb-2 w-72 rounded-md"
        alt="logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-content">
        <h2 className="text-xl font-bold pt-2">{name}</h2>
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
