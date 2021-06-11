import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";
import { reducer } from "./redux/reducer/TodoReducer";

function App() {
  return (
    <div className="container">
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
