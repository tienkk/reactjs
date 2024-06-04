import React from "react";

class MyComponent extends React.Component{


    state ={
        name: 'Tien',
        address : "Thai binh ",
        age: 23
    };

handleClick(event){
console.log("Click me my button");

this.setState({
    name: 'Hoang' ,
    age: Math.floor(Math.random()* 100+1)
})


}

handleOnMouseOver(event){
// console.log(event.pageX)
}

    //JSX
    render(){
    return(
        <div>
            My name is {this.state.name } anh i'm  {this.state.age}
            <button onMouseOver={this.handleOnMouseOver}>  Hover me </button>
            <button onClick={(event)=>{ this.handleClick(event)}}> Click me</button>


             </div>
    );
    }
}

export default MyComponent;