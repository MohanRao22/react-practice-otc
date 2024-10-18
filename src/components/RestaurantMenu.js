

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{

    const {resId} = useParams();
    const [renderMenu, setRenderMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async()=>{
    const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    //  224279, 330270
    const json = await menuData.json();

    console.log(json);
    setRenderMenu(json);
    }
   
     
      if(renderMenu == null){
        return <Shimmer />
      }

      console.log(renderMenu.data)
      const { name, cuisines } = renderMenu.data.cards[2].card?.card?.info;
    //   const menu = renderMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories;
    const menu  =  renderMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    if(menu == undefined){
        return (
            <div className="restaurant-menu-wrapper">
            <h1>{name}</h1>
            <p>{cuisines}</p>
            <p>No Recommended dishes..</p>
        </div>
        )
    }
    //   console.log(renderMenu?.data?.cards[4])

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