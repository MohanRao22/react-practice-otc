import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header-container">
            <div className="logo-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PvLCoPdIz_A7pOEbBGg7ZZkXF-n7q3G3QQ&s" width="70" height="70" alt="logo-image" />
            </div>
            <div className="menu-wrapper">
               <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
               </ul>
            </div>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body-main-wrapper">
            <div className="search-wrapper">
                <input type="search" placeholder="Search anything..!" />
            </div>
            <div className="restocard-main-wrapper">
             <RestoCard />
            </div>
        </div>
    )
}

const RestoCard = ()=>{
    return(
        <div className="restocard-wrapper">
            <div className="resto-image">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="Hotel-image" width="100" height="200" />
            </div>
            <div className="restocard-text">
            <h2>Meghana Foods</h2>
            <p>Dishes</p>
            <p>Star rating</p>
            <p>ETA Time</p>
            </div>
        </div>
    )
}


const AppLayout = ()=>{
    return(
        <div className="main-container">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root1"));
root.render(<AppLayout />)