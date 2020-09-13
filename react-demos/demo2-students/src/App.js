import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store/index";
import StudentSearch from "./components/StudentSearch"

// import  "./store/test";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StudentSearch />
      </Provider>
    );
  }
}

export default App;
