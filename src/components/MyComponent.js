import React from "react";
import Userinfor from "./Userinfor";

class MyComponent extends React.Component{


    state ={
        name: 'Tien',
        address : "Thai binh ",
        age: 23
    };




handleOnChangeInput = (event) => {
    this.setState({
        name: event.target.value
    })
}

handleOnChangeAge = (event) => {
    this.setState({
        age: event.target.value
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
 
            <Userinfor></Userinfor>


             </div>
    );
    }
}

export default MyComponent;