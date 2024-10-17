import RestoCard from "./RestoCard";
import { allRestaurants } from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
let simpleList = [
    {
        "info": {
          "id": "485445",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Old Mahabalipuram Road OMR",
          "areaName": "Old Mahabalipuram Road OMR",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
          ],
          "avgRating": 3,
          "parentId": "61955",
          "avgRatingString": "3.0",
          "totalRatingsString": "1.9K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-18 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹149"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.3",
              "ratingCount": "56"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-ea34c4ea-b9cc-4585-b2c5-4f388eb5b3bf"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chennai/chinese-wok-old-mahabalipuram-road-omr-rest485445",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "764904",
          "name": "PVR Cafe",
          "cloudinaryImageId": "0635a497691a1b5b4f303e9c4cf1f056",
          "locality": "EAST COST ROAD",
          "areaName": "SHOLIGANALLUR TALU",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Snacks",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "11664",
          "avgRatingString": "4.3",
          "totalRatingsString": "28",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 7.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "7.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-18 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-ea34c4ea-b9cc-4585-b2c5-4f388eb5b3bf"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chennai/pvr-cafe-east-cost-road-sholiganallur-talu-rest764904",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "876113",
          "name": "Madurai meenatchi madurai bun parotta",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/25/f9813881-8cc4-4f01-b3f4-cd9747ffb489_876113.jpg",
          "locality": "Madurai Bun Parotta",
          "areaName": "Karapakkam",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "South Indian",
            "Chinese",
            "Fast Food"
          ],
          "avgRating": 3.2,
          "parentId": "513320",
          "avgRatingString": "4.2",
          "totalRatingsString": "223",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-18 05:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-ea34c4ea-b9cc-4585-b2c5-4f388eb5b3bf"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chennai/madurai-meenatchi-madurai-bun-parotta-madurai-bun-parotta-karapakkam-rest876113",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "672871",
          "name": "Kitchen No.7",
          "cloudinaryImageId": "2268b1e3b198e7810435c598e1916bf6",
          "locality": "Kancheepuram",
          "areaName": "PERUMBAKKAM",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Chinese",
            "Fast Food"
          ],
          "avgRating": 4,
          "parentId": "119172",
          "avgRatingString": "4.0",
          "totalRatingsString": "349",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-18 05:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "25% OFF",
            "subHeader": "ABOVE ₹800",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-ea34c4ea-b9cc-4585-b2c5-4f388eb5b3bf"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chennai/kitchen-no-7-kancheepuram-perumbakkam-rest672871",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
]

const [listOfResto, setlistOfResto] = useState(simpleList);


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