import { createContext } from "react";
import TodoContextType from "../types/TodoContextType"

const todoContext = createContext<TodoContextType | undefined>(undefined);

export default todoContext;