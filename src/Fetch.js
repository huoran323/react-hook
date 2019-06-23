import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    // console.log(`render ${count}`);
    // document.title = `You clicked ${count} times`;
    const response = await fetch(url);
    const data = await response.json();
    // const item = data.results[0];
    setData(data);
    setLoading(false);
  }, []);

  return { data, loading };
};

const App = props => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch("https://randomuser.me/api/");

  // componentWillUnmount
  // componentDidMount() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }
  //
  // componentDidUpdate() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {loading ? (
        <div>...loading...</div>
      ) : (
        <div>{data.results[0].name.first}</div>
      )}
    </div>
  );
};

export default App;
