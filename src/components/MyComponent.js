import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component{




    state ={
        listUsers:[
            {id: 1, name :"tien",age: "10"},
            {id: 2, name :"hung",age: "40"},
            {id: 3, name :"tien",age: "60"},

        ]
    }

    //JSX
    render(){
    return(
        <div>
 
            <Userinfor></Userinfor>
            <br /> <br />
            <DisplayInfor 
            listUsers = {this.state.listUsers}
            
            
            ></DisplayInfor>

             </div>
    );
    }
}

export default MyComponent;