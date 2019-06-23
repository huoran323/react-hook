import React, { useState } from "react";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    // 遍历todos,更新todo的completed
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  return (
    <div>
      <TodoForm
        // 传进来的text，添加到数组中
        onSubmit={text => setTodos([{ text, completed: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, completed }, i) => {
          return (
            <div
              key={text}
              onClick={() => toggleComplete(i)}
              style={{ textDecoration: completed ? "line-through" : "" }}
            >
              {text}
            </div>
          );
        })}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};

export default App;
