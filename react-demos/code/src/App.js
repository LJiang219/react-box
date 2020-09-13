import React, { Component } from 'react';
import './App.css';
// import GoodsList from './pages/Goods/GoodsList'
// import TodoList from './components/TodoList'
// import PersonList from "./pages/Persons/PersonList";
// import Form from "./components/Form";
import CoursePage from "./pages/Course/CoursePage"
// import CourseList from "./components/CourseList/index_test";

class App extends Component {
  render() {
    return (
      <div>
        {/* <GoodsList /> */}
        {/* <TodoList /> */}
        {/* <PersonList /> */}
        {/* <Form /> */}
        <CoursePage />
        {/* <CourseList /> */}
      </div>
    );
  }
}

export default App;
