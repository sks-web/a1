import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Sachi_02",
  };

  changeUserName = (props) => {
    this.setState({
      userName: props,
    });
  };

  inputUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserInput
          userName={this.state.userName}
          click_btn={this.changeUserName.bind(this, "Paritosh_02")}
          click_txt={this.changeUserName.bind(this, "Rahul_05")}
          changeText={this.inputUserName}
        />
        <UserOutput username={this.state.userName} />
      </div>
    );
  }
}

export default App;
