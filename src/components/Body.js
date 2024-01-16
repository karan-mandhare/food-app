import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  // Local State variable --> super power variable

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredReataurant, setFilteredReataurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_API);

    const json = await data.json();
    // Optional chaining
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListofRestaurants(restaurants);
    setFilteredReataurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  const PromotedRestaurant = withPromotedLabel(RestaurantCard);
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you`re offline!! Please check your internet connection.
      </h1>
    );

  // Conditional Rendering
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search p-4 m-4">
            <input
              type="text"
              className="border-black"
              placeholder="search here...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                const filterdList = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredReataurant(filterdList);
              }}
            >
              search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mx-28">
          {filteredReataurant.length > 0 ? (
            filteredReataurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
                className="link-component"
              >
                {restaurant.info.type === "T" ? (
                  <PromotedRestaurant {...restaurant.info} />
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )}
              </Link>
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
