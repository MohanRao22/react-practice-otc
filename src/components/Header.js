import { useState } from "react";
import { Logo_Url } from "../utils/constant";




const Header = ()=>{

    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header-container">
            <div className="logo-wrapper">
                <img src={Logo_Url}  width="70" height="70" alt="logo-image" />
            </div>
            <div className="menu-wrapper">
               <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Contact</li>
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