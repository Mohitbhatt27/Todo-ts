type Action =
  | {
      type: "ADD_TODO";
      payload: { text: string };
    }
  | {
      type: "TOGGLE_TODO";
      payload: { id: string };
    }
  | {
      type: "DELETE_TODO";
      payload: { id: string };
    };

export default Action;
