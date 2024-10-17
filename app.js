// Syntax : React.createElement("Tag", "Attributes of an element", "Inner Html / Child");

/**
 *   <div id="parent">
 *      <div id="child">
 *         <h1>H1 element<h1>
 *         <h2>H2 element<h2>
 *       </div>
 *   <div>
 */


const element = React.createElement("div", { id : "parent"}, 
    
     React.createElement("div", {id:"child"}, 
        [
            React.createElement("h1", {}, "H1 element"),
            React.createElement("h2", {}, "H2 element")
        ]
     )
  
);

//  This will return React Element  == JS Object
console.log(element)


const rooted = ReactDOM.createRoot(document.querySelector("#root4"));
rooted.render(element);