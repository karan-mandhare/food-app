import { useEffect, useState } from "react";
import { MAIN_API } from "./constants";

const useBody = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchApi();
  });

  const fetchApi = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return listofRestaurants;
};

export default useBody;
