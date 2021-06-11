import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/reducer/TodoReducer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
