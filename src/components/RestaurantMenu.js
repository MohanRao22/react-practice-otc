

import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useCustomHookRestaurantMenu from "../customHooks/useCustomHookRestaurantMenu";

const RestaurantMenu = ()=>{

    const {resId} = useParams();
    console.log(resId);

    const restaurntCustomHookMenuData = useCustomHookRestaurantMenu(resId);
    console.log(restaurntCustomHookMenuData)
        
      if(restaurntCustomHookMenuData == null){
        return <Shimmer />
      }

    
      const { name, cuisines } = restaurntCustomHookMenuData?.data?.cards[2]?.card?.card?.info;
    //   const menu = restaurntCustomHookMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories;
    const menu  =  restaurntCustomHookMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(menu);
    if(menu == undefined){
        return (
            <div className="restaurant-menu-wrapper">
            <h1>{name}</h1>
            <p>{cuisines}</p>
            <p>No Recommended dishes..</p>
        </div>
        )
    }
    //   console.log(restaurntCustomHookMenuData?.data?.cards[4])

    return(
        <div className="restaurant-menu-wrapper">
            <h1>{name}</h1>
            <p>{cuisines}</p>
            {/* <p>{costForTwoMessage}</p> */}
            <ul>
                <li><h6>Recommended dishes</h6></li>
               { menu.map((menuList)=>  <li>{menuList?.card?.info?.name}</li> ) }  
            </ul>
        </div>

    )
}

export default RestaurantMenu;