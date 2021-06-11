import React, { useReducer } from "react";
import { useSelector } from "react-redux";

import Todo from "../Todo/Todo";
import { selectTodos } from "../../redux/reducer/TodoReducer";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  console.log(todos);

  return (
    <ul className="todo-list">
      {todos.map((t, index) => (
        <Todo id={t.id} key={index} text={t.text} completed={t.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
