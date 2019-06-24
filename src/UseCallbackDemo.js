import React, { useState, useCallback } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* //useCallback始终会先执行一次里面的函数，随后根据后面的参数来决定是否再次执行。如下例，当count发生变化时，再次点击还会执行setCount */}
      <button onClick={useCallback(() => setCount(count + 1), [count])}>
        {/* // 因为count值在不断发生变化，所有每次点击都会调用setCount函数 Click me */}
      </button>
      <p>You clicked {count1} times</p>
      {/* //因为useCallback后面的第二个参数是个空数组，只会执行一次setCount，再次点击不会执行了 */}
      <button onClick={useCallback(() => setCount1(count1 + 1), [])}>
        Click me
      </button>
      <p>You clicked {count1} times</p>
      <button onClick={useCallback(() => setCount1(count1 + 1), [count])}>
        Click me
      </button>
    </div>
  );
};
