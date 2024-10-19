import { useState } from "react";
import { Logo_Url } from "../utils/constant";
import { Link } from "react-router-dom";
import useCustomHookOnline from "../customHooks/useCustomHookOnline";


const Header = ()=>{

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useCustomHookOnline();

    return(
        <div className="header-container">
            <div className="logo-wrapper">
                <img src={Logo_Url}  width="70" height="70" alt="logo-image" />
            </div>
            <div className="menu-wrapper">
               <ul>
                <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
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