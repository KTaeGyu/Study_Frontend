import { useEffect, useState } from "react";
/* 
// useEffect 사용법
function Effect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // use Effect 사용법
  useEffect(() => {
    console.log("once");
  }, []);
  useEffect(() => {
    console.log("keward change");
  }, [keyword]);
  useEffect(() => {
    console.log("counter change");
  }, [counter]);
  useEffect(() => {
    console.log("keword or counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
*/

// Cleanup 함수 사용법
function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("hi");
    return byFn;
  }
  useEffect(hiFn, []);
  useEffect(() => {
    console.log("created");
    return () => {
      console.log("destroyed");
    };
  }, []);
  useEffect(function () {
    console.log("created");
    return function () {
      console.log("destroyed");
    };
  }, []);
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Cleanup;
