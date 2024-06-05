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

handleOnChangeInput = (event) => {
    this.setState({
        name: event.target.value
    })
}
handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
}

    //JSX
    render(){
    return(
        <div>
            My name is {this.state.name } anh i'm  {this.state.age}
            <form action="" onSubmit={(event) => this.handleOnSubmit(event)}> 
                <input type="text" 
                onChange={(event) => {this.handleOnChangeInput(event)}}
                />
                <button>
                    Submit
                </button>
            </form>

             </div>
    );
    }
}

export default MyComponent;