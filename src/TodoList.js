import React, { useState, useCallback, useReducer } from "react";
import TodoForm from "./TodoForm";

// 改造后

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [{ text: action.text, complete: false }, ...todos];
    case "TOGGLE_COMPLETE":
      return todos.map((todo, k) =>
        k === action.i
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
      );
    case "RESET":
      return [];
    default:
      return todos;
  }
};

const App = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(todosReducer, []);

  // const toggleComplete = (i) => setTodos(todos.map((todo, k) => k === i ? {
  //   ...todo,
  //   complete: !todo.complete
  // } : todo))

  // const onSubmit = useCallback(
  //   text => setTodos([{ text, complete: false }, ...todos]),
  //   [todos]
  // )

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={`${text}-${i}`}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE", i })}
            style={{ textDecoration: complete ? "line-through" : "" }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};

export default App;

// 改造前
// const App = () => {
//   const [todos, setTodos] = useState([]);

//   const toggleComplete = i =>
//     // 遍历todos,更新todo的completed
//     setTodos(
//       todos.map((todo, k) =>
//         k === i
//           ? {
//               ...todo,
//               completed: !todo.completed
//             }
//           : todo
//       )
//     );
//   return (
//     <div>
//       <TodoForm
//         // 传进来的text，添加到数组中
//         onSubmit={text => setTodos([{ text, completed: false }, ...todos])}
//       />
//       <div>
//         {todos.map(({ text, completed }, i) => {
//           return (
//             <div
//               key={text}
//               onClick={() => toggleComplete(i)}
//               style={{ textDecoration: completed ? "line-through" : "" }}
//             >
//               {text}
//             </div>
//           );
//         })}
//       </div>
//       <button onClick={() => setTodos([])}>reset</button>
//     </div>
//   );
// };

// export default App;
