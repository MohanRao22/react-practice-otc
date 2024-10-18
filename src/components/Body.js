import RestoCard from "./RestoCard";
import { useState } from "react";
import { useEffect } from "react";

const Body = ()=>{

useEffect(()=>{
    fetchData();
},[]);


const fetchData = async ()=>{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    let topRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setlistOfResto(topRestaurants);
}

const [listOfResto, setlistOfResto] = useState([]);

console.log("Body Called");

    return(
        <div className="body-main-wrapper">
            <div className="search-wrapper">
                <input type="search" placeholder="Search anything..!" />
                <button className="filter"
                 onClick={()=>{       
                 const allFilteredResto =   
                 listOfResto.filter((list)=>{
                        return list.info.avgRating > 3.9
                 });
                 console.log(allFilteredResto)
                   setlistOfResto(allFilteredResto)
                    
                 }}>Ratings 4+</button>
            </div>
            <div className="restocard-main-wrapper">
             {
                listOfResto.map((restos)=>
                     <RestoCard restocard = {restos} key={restos.info.id} />

                  )
             }
            </div>
        </div>
    )
}

export default Body;