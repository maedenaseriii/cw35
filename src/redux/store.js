import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./feature/todo-slice";

const store = configureStore({
  reducer: {
    todosList: todoSlice,
  },
});

export default store;
