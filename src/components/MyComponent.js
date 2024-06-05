import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

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
            <br /> <br />
            <DisplayInfor name= "Hoang" age ="25" ></DisplayInfor>
            <hr />
            <DisplayInfor name= "hung" age ="23" ></DisplayInfor>


             </div>
    );
    }
}

export default MyComponent;