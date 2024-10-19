import React from "react";

class AboutClass2 extends React.Component{

    constructor(props){
        super(props);
        console.log("Child-1 Constructor ");
    }

    componentDidMount(){
        console.log("Child-1 componentDidMount called");
    }

    render(){
        console.log("Child-1 Render ");
        return(
            <div className="child-1 wrapper">

            </div>
        )
    }

}

export default AboutClass2;