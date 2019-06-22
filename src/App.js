import React from "react";
// 导入useState
import { useState, useEffect } from "react";

// 改造后

const App = () => {
  // 数组的解构语法 第一个是变量，第二个是function  useState(0)设定count的初始值为0
  // useState 会返回一对值：当前状态和一个让你更新它的函数
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hello");
  // 用上面的代替下面的state
  // state = {
  //   count: 0
  // };

  //useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  // componentDidMount() {
  //   document.title = `you clicked ${this.state.count} times`;
  // }

  // componentDidUpdate() {
  //   document.title = `you clicked ${this.state.count} times`;
  // }

  return (
    <div>
      <p>{name}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* <Hello name="hello" /> */}
    </div>
  );
};

export default App;

// 改造前
// const Hello = props => {
//   const { name } = props;
//   return <div>{name}</div>;
// };

// export default class App extends React.Component {
//   state = {
//     count: 0
//   };

//   componentDidMount() {
//     document.title = `you clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `you clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//         <Hello name="hello" />
//       </div>
//     );
//   }
// }
