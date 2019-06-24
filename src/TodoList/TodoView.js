import React from "react";

import Form from "./Form";
import Todos from "./Todos";
import ResetButton from "./ResetButton";

export default () => {
  return (
    <>
      <Form />
      <Todos />
      <ResetButton />
    </>
  );
};
