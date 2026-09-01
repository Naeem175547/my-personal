import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "abc",
      task: "demo-task",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
    initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    marksAsDone: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.isDone = true;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  marksAsDone,
} = todoSlice.actions;
// todoSlice.actions is an object containing all the generated action creators.

export default todoSlice.reducer;


// todoSlice.reducer

// todoSlice.reducer is the single reducer function created by Redux Toolkit that handles all the cases.

// Internally, it behaves like:

// function reducer(state, action) {
//   switch (action.type) {
//     case "todo/addTodo":
//       // addTodo logic
//       break;

//     case "todo/deleteTodo":
//       // deleteTodo logic
//       break;

//     case "todo/marksAsDone":
//       // marksAsDone logic
//       break;

//     default:
//       return state;
//   }
// }