import React from "react";

class MyComponent extends React.Component{


    state ={
        name: 'Tien',
        address : "Thai binh ",
        age: 23
    };

handleClick(event){
console.log("Click me my button");
console.log("My name is",this.state.name)
}

handleOnMouseOver(event){
console.log(event.pageX)
}

    //JSX
    render(){
    return(
        <div>
            My name is {this.state.name } anh i'm from {this.state.address}
            <button onMouseOver={this.handleOnMouseOver}>  Hover me </button>
            <button onClick={this.handleClick}> Click me</button>


            
            
             </div>
    );
    }
}

export default MyComponent;