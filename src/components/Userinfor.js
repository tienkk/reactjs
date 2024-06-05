import React from "react";

class Userinfor extends React.Component{
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
                <button>
                    Submit
                </button>

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





export default Userinfor;