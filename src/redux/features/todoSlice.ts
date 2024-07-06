import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo._id === action.payload);
      task!.isCompleted = !task?.isCompleted;

      // state.todos = state.todos.map((todo) =>
      //   todo.id === action.payload
      //     ? { ...todo, isCompleted: !todo.isCompleted }
      //     : todo
      // );
      // state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
