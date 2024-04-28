import useTodoContext from "../hooks/useTodoContext";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function TodoList() {
  const { state } = useTodoContext();

  return (
    <>
      <h1>Todos</h1>
      <AddTodo />
      <ul>
        {state.todoList.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
