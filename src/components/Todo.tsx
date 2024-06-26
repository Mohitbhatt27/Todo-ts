import useTodoContext from "../hooks/useTodoContext";
import { TOGGLE_TODO, DELETE_TODO } from "../constants/ActionConstants";

type types = {
  id: string;
  text: string;
  completed: boolean;
};
function Todo({ id, text, completed }: types) {
  const { dispatch } = useTodoContext();
  function handleToggle() {
    dispatch({
      type: TOGGLE_TODO,
      payload: {
        id,
      },
    });
  }

  function handleDelete() {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span>{text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Todo;
