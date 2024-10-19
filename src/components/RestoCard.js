import {Hotel_Pre_Image} from "../utils/constant"


const RestoCard = (restaurantData)=>{
    // console.log(restaurantData.restocard);

    const {name, avgRating, locality, cuisines, cloudinaryImageId, id} = restaurantData.restocard.info;

  

    return(
        <div className="restocard-wrapper"  >
            <div className="resto-image">
            <img src={`${Hotel_Pre_Image}/${cloudinaryImageId}`} alt="Hotel-image" width="100" height="200" />
            </div>
            <div className="restocard-text">
            <h2>{name}</h2>
            <p>{cuisines.join("--")}</p>
            <p>{avgRating}⭐️</p>
            <p>{locality}</p>
            </div>
        </div>
    )
}

export default RestoCard;