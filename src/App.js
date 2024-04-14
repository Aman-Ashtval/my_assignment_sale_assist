import { Component } from "react";

import Home from "./components/Home";
import AppContext from "./context/AppContext";

import "./App.css";

class App extends Component {

  state = {lightTheme: false}

  changeAppTheme = () => {
    this.setState(prevState => {
      return {lightTheme: !prevState.lightTheme}
    })
  }

  render(){
    const {lightTheme} = this.state

    return (
      <AppContext.Provider value={{
        lightTheme, changeAppTheme: this.changeAppTheme
      }}>
        <Home />
      </AppContext.Provider>
    );
  }
}

export default App;
