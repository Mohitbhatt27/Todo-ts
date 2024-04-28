import React from "react";
import TodoState from "../interfaces/TodoState";
import Action from "./Action";

type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<Action>;
};

export default TodoContextType;
