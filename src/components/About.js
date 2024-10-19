import AboutClass from "./AboutClass";
import { useState } from "react";
/**
 * 
 * A functional component nothing but  an normal JS function which returns some piece of JSX Code
 * 
 */

const About = (props)=>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);

//    console.log(props) 

    return(
        <div className="about-wrapper">
            <h1>{props.name}</h1>
            <h2>Count : {count}</h2>
            <button onClick={()=>{
                setCount(count+1)
            }} >Increase Count</button>
            <ul>
                
                <li>Name</li>
                <li>Place</li>
                <li>Photo image</li>
            </ul>

             <AboutClass name="class-based-props" />

        </div>
       
    )
}

export default About;