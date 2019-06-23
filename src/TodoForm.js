import React, { useState } from "react";

// 抽取共通的方法
const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

// 抽取之后的
export default () => {
  const text = useInputValue("");

  return <input type="text" {...text} />;
};

// 抽取之前的
// export default () => {
//   const [value, setValue] = useState("");

//   return (
//     <input type="text" value={value} onChange={e => setValue(e.target.value)} />
//   );
// };
