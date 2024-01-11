import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State variable --> super power variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional chaining
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListofRestaurants(restaurants);
    setFilteredReataurant(restaurants);
    console.log(restaurants);
  };

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredReataurant, setFilteredReataurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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
            filteredReataurant.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
              );
            })
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
