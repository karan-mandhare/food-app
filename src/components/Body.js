import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
// import { useContext } from "react";
import Shimmer from "./Shimmer";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

export const Body = () => {
  // Local State variable --> super power variable

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredReataurant, setFilteredReataurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const { loggedInUser, setUserName } = useContext(UserContext);

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

  console.log(listofRestaurants);
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
          <div className="p-2 m-4 flex">
            <input
              type="text"
              className="border-black border-2 m-2 p-2 rounded-lg"
              placeholder="search here...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="p-2 bg-green-100 m-2 rounded-lg border-black border-2"
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

          <div className="p-2 m-4 flex">
            <button
              className="p-2 bg-green-100 m-2 rounded-lg border-black border-2"
              onClick={() => {
                const filterdList = listofRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredReataurant(filterdList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>

          {/* <div className="p-2 m-4 flex">
            <label className="p-2  m-2 text-lg font-bold" htmlFor="username">
              userName
            </label>
            <input
              type="text"
              id="username"
              className="border-black border-2 m-2 p-2 rounded-lg"
              placeholder="enter username"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div> */}
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
