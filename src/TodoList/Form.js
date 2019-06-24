import React, { useState, useCallback, useContext } from "react";
import { TodoContext } from "./TodoContext";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: useCallback(e => setValue(e.target.value), []),
    resetValue: () => setValue("")
  };
};

export default React.memo(() => {
  console.log("rendering form");
  const { resetValue, ...text } = useInputValue("");
  const { dispatch } = useContext(TodoContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", text: text.value });
        resetValue();
      }}
    >
      <input type="text" {...text} />
    </form>
  );
});
