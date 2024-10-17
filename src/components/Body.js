import RestoCard from "./RestoCard";
import { allRestaurants } from "../utils/mockData";


const Body = ()=>{
    return(
        <div className="body-main-wrapper">
            <div className="search-wrapper">
                <input type="search" placeholder="Search anything..!" />
            </div>
            <div className="restocard-main-wrapper">
             {
                allRestaurants.map((restos)=>
                     <RestoCard restocard = {restos} key={restos.info.id} />

                  )
             }
            </div>
        </div>
    )
}

export default Body;