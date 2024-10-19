import RestoCard from "./RestoCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useCustomHookOnline from "../customHooks/useCustomHookOnline.js";

const Body = () => {

    const [listOfResto, setlistOfResto] = useState([]);
    const [filteration, setFilteration] = useState([]);
    const [searchData, setSearchData] = useState("");
   

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    let topRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setlistOfResto(topRestaurants);
    setFilteration(topRestaurants);
  };

 
  // console.log("Body Called");

  const onlineStatusCustomHook = useCustomHookOnline();


  if(onlineStatusCustomHook === false){
      return ( 
      <h1>Looks like you are offline..!</h1>
      )
  } 

  return listOfResto.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-main-wrapper">
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="Search anything..!"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button className="search-things" onClick={()=>{
    
          
         const filteredData = listOfResto.filter((element)=>{
            console.log(element.info.name.toLowerCase());
            console.log(searchData.toLowerCase());
            return element.info.name.toLowerCase().includes(searchData.toLowerCase());
          });
          setFilteration(filteredData);

        }} >Search</button>
        <button
          className="filter"
          onClick={() => {
            const allFilteredResto = listOfResto.filter((list) => {
              return list.info.avgRating > 3.9;
            });
            console.log(allFilteredResto);
            setFilteration(allFilteredResto);
          }}
        >
          Ratings 4+
        </button>
      </div>
      <div className="restocard-main-wrapper">
        
        { filteration.map((restos) => (
         <><Link to={"/restaurant/"+restos.info.id}> <RestoCard restocard={restos} key={restos.info.id} /> </Link></>
        ))}
      </div>
    </div>
  );
};

export default Body;
