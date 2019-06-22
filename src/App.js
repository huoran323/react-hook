import React from "react";
// 导入useState
import { useState } from "react";

// 改造后

const App = () => {
  // 数组的解构语法 第一个是变量，第二个是function  useState(0)设定count的初始值为0
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hello");
  // 用上面的代替下面的state
  // state = {
  //   count: 0
  // };

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
