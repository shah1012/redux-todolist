import React from "react";
import { useDispatch } from "react-redux";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { updateTodo, removeTodo } from "../../redux/reducer/TodoReducer";
import "./Todo.css";

const Todo = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(updateTodo({ id: id }));
  };

  const handleRemove = () => {
    dispatch(removeTodo({ id: id }));
  };

  return (
    <div className="todo-div">
      <li
        className="todo-li"
        style={{ textDecoration: completed ? "line-through" : "" }}
      >
        {text}
      </li>
      <button className="todo-trash" onClick={handleRemove}>
        <FaTrashAlt style={{ pointerEvents: "none" }} />
      </button>
      <button className="todo-check" onClick={handleUpdate}>
        <FaCheck style={{ pointerEvents: "none" }} />
      </button>
    </div>
  );
};

export default Todo;
