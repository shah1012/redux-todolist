import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length + 1,
          text: action.payload.text,
          completed: false,
        },
      ];
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((t) =>
        t.id === action.payload.id ? { ...t, completed: !t.completed } : t
      );
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.todos;
export default todoSlice.reducer;
