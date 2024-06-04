import React from "react";

class MyComponent extends React.Component{


    state ={
        name: 'Tien',
        address : "Thai binh ",
        age: 23
    };


    //JSX
    render(){
    return(
        <div>
            My name is {this.state.name } anh i'm from {this.state.address}
            
            
            
             </div>
    );
    }
}

export default MyComponent;