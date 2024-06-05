import React from "react";

class AddUserinfor extends React.Component{
    state ={
        name: '',
        address : "Thai binh ",
        age: ''
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
    this.props.handleAddNewUser({
        id: Math.floor((Math.random() * 100)+1) + "random",
        name: this.state.name,
        age: this.state.age
    });
}

    render(){
        return(
            <div>
            My name is {this.state.name } anh i'm  {this.state.age}
            <form action="" onSubmit={(event) => this.handleOnSubmit(event)}> 
            <label htmlFor="">Your name: </label>
                <input type="text" 
                value={this.state.name}
                onChange={(event) => {this.handleOnChangeInput(event)}}
                />

                <label htmlFor="">Your age: </label>
                <input type="text" 
                value={this.state.age}
                onChange={(event) => {this.handleOnChangeAge(event)}}
                />
                <button>
                    Submit
                </button>
            </form>
            </div>
        )
    }
}





export default AddUserinfor;