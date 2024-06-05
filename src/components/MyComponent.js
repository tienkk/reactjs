import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserinfor from "./AddUserinfor";

class MyComponent extends React.Component{




    state ={
        listUsers:[
            {id: 1, name :"tien",age: "10"},
            {id: 2, name :"hung",age: "40"},
            {id: 3, name :"tien",age: "60"},

        ]
    }

    handleAddNewUser = (useObj) => {
        // let listUsersClone = [...this.state.listUsers]
        // listUsersClone.unshift(useObj)
        // listUsersClone.push(useObj)
        // this.state({
        //     listUsers : listUsersClone
        // })

        console.log("check data ",useObj)
        this.setState({
            listUsers:[useObj,...this.state.listUsers]
        })
    }

    //JSX
    render(){
    return(
        <div>
            <AddUserinfor
                handleAddNewUser = {this.handleAddNewUser}
            ></AddUserinfor>
            <br /> <br />
            <DisplayInfor 
            listUsers = {this.state.listUsers}
            handleAddNewUser = {this.handleAddNewUser}
            
            
            ></DisplayInfor>

            </div>
    );
    }
}

export default MyComponent;