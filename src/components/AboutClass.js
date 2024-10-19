import React from "react";
import { useState } from "react";
import AboutClass2 from "./AboutClass2";
import AboutClass3 from "./AboutClass3";
/**
 * 
 * A class component nothing but  an normal JS Class which gives access to method render() and it give some piece of JSX Code.
 * 
 */

class AboutClass extends React.Component{


    // Constructor will receive props..
    constructor(props){
     console.log("Parent Constructor");
        super(props);

        this.state = {
            count : 0,
            count2 : 20,
            data : ""
        }
    }

async componentDidMount(){
    console.log("Parent Component Did mount");

    const data = await fetch("https://api.github.com/users/MohanRao22");

    const json = await data.json();
    console.log(json);
    this.setState({
        data : json
    })
}

    render(){
        console.log("Parent Render called");
        return(
            <div className="about-wrapper">
            <h1>{this.props.name}</h1>
            <h2>Count : {this.state.count}</h2>
            <button onClick={()=>{

// Updating state varaibles
//  Don't  like this count = count+1 ❌
    this.setState({
        count : this.state.count +1
    });

            }}>Increse Count</button>
            <ul>
                <li>{this.state.data.name}</li>
                <li>
                    <img src={this.state.data.avatar_url} width="100"  height="100" />
                </li>
                {/* public_repos */}
                <li>Public Repo : {this.state.data.public_repos}</li>
                <li>Photo image</li>
            </ul>
            <AboutClass2 />
            <AboutClass3 />
           </div>
           
        )
        
    }

}

export default AboutClass