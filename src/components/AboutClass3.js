import React from "react";

class AboutClass3 extends React.Component{

    constructor(props){
        super(props);
        console.log("Child-2 Constructor ");
    }

    componentDidMount(){
        console.log("child-2 componentDidMount called");
    }

    render(){
        console.log("Child Render ");
        return(
            <div className="child-2 wrapper">

            </div>
        )
    }

}

export default AboutClass3;