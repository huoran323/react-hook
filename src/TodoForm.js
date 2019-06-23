import React, { useState, useCallback } from "react";

// 改造后

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: useCallback(e => setValue(e.target.value), []),
    resetValue: () => setValue("")
  };
};

export default React.memo(({ dispatch }) => {
  console.log("rendering form");
  const { resetValue, ...text } = useInputValue("");
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

// 改造前
// // 抽取共通的方法
// const useInputValue = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   return {
//     value,
//     onChange: e => setValue(e.target.value),
//     resetValue: () => setValue("")
//   };
// };

// // 抽取之后的
// export default ({ onSubmit }) => {
//   const { resetValue, ...text } = useInputValue("");

//   return (
//     <form
//       // onSubmit时，里面的方法会依次执行，可以是自定义的方法
//       onSubmit={e => {
//         e.preventDefault();
//         // 传入一个参数，调用父组件的onSubmit
//         onSubmit(text.value);
//         // 清空输入框内容
//         resetValue();
//       }}
//     >
//       <input type="text" {...text} />
//     </form>
//   );
// };

// // 抽取之前的
// // export default () => {
// //   const [value, setValue] = useState("");

// //   return (
// //     <input type="text" value={value} onChange={e => setValue(e.target.value)} />
// //   );
// // };
