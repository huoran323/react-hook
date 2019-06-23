// 改造后
import React, { Component, useEffect, useState } from "react";

const MyAPI = {
  count: 0,
  subscribe(cb) {
    this.intervalId = setInterval(() => {
      this.count += 1;
      cb(this.count);
    }, 1000);
  },
  unsubscribe() {
    clearInterval(this.intervalId);
    this.reset();
  },
  reset() {
    this.count = 0;
  }
};

export default class UseEffectDemo extends Component {
  state = {
    project: "Foo"
  };

  render() {
    const { project } = this.state;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              project: project === "Foo" ? "Bar" : "Foo"
            })
          }
        >
          Change Project
        </button>
        <br />
        {/* <UseEffectComponent project={project} /> */}
        {project === "Foo" ? <UseEffectComponent project={project} /> : "Bar"}
      </div>
    );
  }
}

const UseEffectComponent = props => {
  const { project } = props;
  const [timeOnProject, setTimeOnProject] = useState(0);

  useEffect(() => {
    MyAPI.subscribe(timeOnProject => {
      setTimeOnProject(timeOnProject);
    });

    // return的函数就是willUnMount函数的内容
    return () => {
      MyAPI.unsubscribe();
      setTimeOnProject(0);
    };
  }, [project]);

  return (
    <div>
      <h1>Project: {project}</h1>
      <h2>
        Time on project: <br />
        {timeOnProject}
      </h2>
    </div>
  );
};

// 改造前
// import React, { Component } from "react";

// const MyAPI = {
//   count: 0,
//   subscribe(cb) {
//     this.intervalId = setInterval(() => {
//       this.count += 1;
//       cb(this.count);
//     }, 1000);
//   },
//   unsubscribe() {
//     clearInterval(this.intervalId);
//     this.reset();
//   },
//   reset() {
//     this.count = 0;
//   }
// };

// export default class UseEffectDemo extends Component {
//   state = {
//     project: "Foo"
//   };

//   render() {
//     const { project } = this.state;

//     return (
//       <div>
//         <button
//           onClick={() =>
//             this.setState({
//               project: project === "Foo" ? "Bar" : "Foo"
//             })
//           }
//         >
//           Change Project
//         </button>
//         <br />
//         {/* <UseEffectComponent project={project} /> */}
//         {project === "Foo" ? <UseEffectComponent project={project} /> : "Bar"}
//       </div>
//     );
//   }
// }

// class UseEffectComponent extends Component {
//   state = {
//     timeOnProject: 0
//   };

//   componentDidMount() {
//     MyAPI.subscribe(timeOnProject => {
//       this.setState({ timeOnProject });
//     });
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.project !== prevProps.project) {
//       MyAPI.unsubscribe();
//       this.setState({ timeOnProject: 0 });
//       MyAPI.subscribe(timeOnProject => {
//         this.setState({ timeOnProject });
//       });
//     }
//   }

//   componentWillUnmount() {
//     console.log("will unmount");
//     MyAPI.unsubscribe();
//   }

//   render() {
//     const { project } = this.props;
//     const { timeOnProject } = this.state;

//     return (
//       <div>
//         <h1>Project: {project}</h1>
//         <h2>
//           Time on project: <br />
//           {timeOnProject}
//         </h2>
//       </div>
//     );
//   }
// }
