import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer/TodoReducer";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        text: text,
      })
    );

    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
