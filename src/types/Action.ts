type Action =
  | {
      type: "ADD_TODO";
      payload: { text: string };
    }
  | {
      type: "TOGGLE_TODO";
      payload: { id: number };
    }
  | {
      type: "DELETE_TODO";
      payload: { id: number };
    };

export default Action;
