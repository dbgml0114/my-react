import { useState, useEffect } from "react";

function Hello() {
  function destroyedFn() {
    console.log("destroy");
  }
  function effectFn() {
    console.log("created");
    return destroyedFn;
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}

function Sample2() {
  const [showing, setShow] = useState(false);
  const onClick = () => setShow((showing) => !showing);
  return (
    <div className="Sample">
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default Sample2;
