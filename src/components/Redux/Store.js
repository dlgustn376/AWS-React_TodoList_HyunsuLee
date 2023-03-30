import { configureStore} from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};


export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo
        ),
      };
    default:
      return state;
  }
};

const store = configureStore({reducer:todosReducer});

export default store;
