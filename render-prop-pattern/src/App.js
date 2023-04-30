import React from "react";
import Counter1 from "./components/Counter1";
import Wrapper from "./components/Wrapper";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <>
      <Wrapper render={(count, incCount) => {
        return <Counter1 count={count} incCount={incCount} />
      }}/>
      <Wrapper render={(count, incCount) => {
        return <Counter2 count={count} incCount={incCount} />
      }}/>
    </>
  );
}

export default App;
