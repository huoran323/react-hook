import React from "react";

const Child = ({ seconds }) => {
  console.log("I am rendering");
  return <p>I am updating every {seconds} seconds.</p>;
};

// 使用React.memo包裹函数组件，当组件中的state值发生变化时，再去渲染；当组件中的值没有发生变化时，就不进行渲染；  类似于类组件中的PureComponent或shouldUpdateComponent函数
export default React.memo(Child);
