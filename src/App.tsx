import "./App.css";
import TodoReducer from "./reducers/TodoReducer";
import { useReducer } from "react";
import TodoContext from "./context/TodoContext";
import TodoList from "./components/TodoList";
import TodoState from "./interfaces/TodoState";
import { nanoid } from "nanoid";

function App() {
  const initialState: TodoState = {
    todoList: [
      {
        id: nanoid(),
        text: "Learn Typescript",
        completed: false,
      },
      {
        id: nanoid(),
        text: "Learn React",
        completed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
