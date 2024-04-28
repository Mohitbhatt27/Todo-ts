import { useState } from "react";
import useTodoContext from "../hooks/useTodoContext";
import { ADD_TODO } from "../constants/ActionConstants";

function AddTodo() {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  function handleAddTodo() {
    dispatch({
      type: ADD_TODO,
      payload: {
        text: text,
      },
    });

    setText("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
