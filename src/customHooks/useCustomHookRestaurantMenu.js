import { useEffect, useState } from "react"

const useCustomHookRestaurantMenu = (resId)=>{

    const [ data, useData ] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);

    console.log("Entered")
    const fetchMenu = async()=>{
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        //  224279, 330270
        const json = await menuData.json();
        console.log(json);
        useData(json);
        }
        return data;
}



export default useCustomHookRestaurantMenu;