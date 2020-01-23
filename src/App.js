import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    title: "",
    input: "",
    post: {}
  };

componentDidMount(){
  this.handleAddTask()
}

  handleAddTask = ()=> {
    this.setState({
      list: [
        ...this.state.list,
        {
          post: {
            title: this.state.title,
            content: this.state.input,
            time: new Date().toLocaleTimeString([], {
              timeStyle: "short",
              dateStyle: "medium"
            })
          }
        }
      ],
      input: "",
      title: ""
    });
  }
  
  removePost= (name)=> {
    this.setState({
      list: this.state.list.filter(el => el !== name)
    });
  }



  render() {
    let list = this.state.list.map((e,i)=> {
      return(
        <div>
        <h1></h1>
        <h1></h1>
        <p></p>
        <button>
        Delete</button>
        </div>
      )
    })
    return <div className="App"></div>;
  }
}

export default App;
