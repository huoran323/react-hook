import React, { Component } from "react";
import { useState, useEffect } from "react";

// 改造后
class TokenForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    // 取出setToken
    const { setToken } = this.props;
    const token = this.tokenInput.value;
    if (token) {
      // setToken的实现在父组件
      setToken(token);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="Enter your Github token"
          ref={input => {
            this.tokenInput = input;
          }}
        />
      </form>
    );
  }
}

export default () => {
  // 默认会从浏览器取默认值
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  //   state = {
  //     token: null
  //   };

  useEffect(() => {
    sessionStorage.setItem("token", token);
  });
  //   componentDidMount() {
  //     this.setState({ token: sessionStorage.getItem("token") });
  //   }

  //   setToken = token => {
  //     sessionStorage.setItem("token", token);
  //     // 更新token
  //     setToken(token);
  //     // this.setState({ token });
  //   };

  return (
    <div>
      <h1>Hello</h1>
      {token ? token : <TokenForm setToken={setToken} />}
    </div>
  );
};

// 改造前
// class TokenForm extends Component {
//   handleSubmit = event => {
//     event.preventDefault();
//     // 取出setToken
//     const { setToken } = this.props;
//     const token = this.tokenInput.value;
//     if (token) {
//       // setToken的实现在调用的地方
//       setToken(token);
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="token"
//           placeholder="Enter your Github token"
//           ref={input => {
//             this.tokenInput = input;
//           }}
//         />
//       </form>
//     );
//   }
// }

// export default class TokenApp extends Component {
//   state = {
//     token: null
//   };

//   componentDidMount() {
//     this.setState({ token: sessionStorage.getItem("token") });
//   }

//   setToken = token => {
//     sessionStorage.setItem("token", token);
//     // 更新token
//     this.setState({ token });
//   };

//   render() {
//     const { token } = this.state;
//     return (
//       <div>
//         <h1>Hello</h1>
//         {token ? token : <TokenForm setToken={this.setToken} />}
//       </div>
//     );
//   }
// }
