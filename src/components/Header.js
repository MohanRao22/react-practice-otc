import { useState } from "react";
import { Logo_Url } from "../utils/constant";

import { Link } from "react-router-dom";


const Header = ()=>{

    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header-container">
            <div className="logo-wrapper">
                <img src={Logo_Url}  width="70" height="70" alt="logo-image" />
            </div>
            <div className="menu-wrapper">
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><button className="l-btn"  onClick={()=>{
                    
                    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                    console.log(btnName);

                }}  >{btnName}</button></li>
               </ul>
            </div>
        </div>
    )
}

export default Header