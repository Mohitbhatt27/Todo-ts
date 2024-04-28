import useTodoContext from "../hooks/useTodoContext";
import Todo from "./Todo";

function TodoList() {
  const { state } = useTodoContext();

  return (
    <>
    <h1>Todos</h1>
    <ul>
      {state.todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
    </>
  )
}

export default TodoList;
