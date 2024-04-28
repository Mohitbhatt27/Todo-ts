import TodoState from "../interfaces/TodoState";
import Action from "../types/Action";
import { nanoid } from "nanoid";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from "../constants/ActionConstants";

function TodoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          {
            id: nanoid(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default TodoReducer;
