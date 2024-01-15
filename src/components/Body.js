import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  // Local State variable --> super power variable

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

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredReataurant, setFilteredReataurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

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
        <div className="filter">
          <div className="search-box">
            <input
              type="text"
              placeholder="search here...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
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
        <div className="restaurant-list">
          {filteredReataurant.length > 0 ? (
            filteredReataurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
                className="link-component"
              >
                <RestaurantCard {...restaurant.info} />
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
