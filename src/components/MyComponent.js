import React from "react";

class MyComponent extends React.Component{
    //JSX
    render(){
    return(
        <div>my first component 
            {Math.random(1,7)}
            
             </div>
    );
    }
}

export default MyComponent;