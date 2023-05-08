import { useState, useEffect } from "react";

function Sample() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    console.log("처음 호출");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 1) {
      console.log("검색어 변경될때", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("숫자 변할때", counter);
  }, [counter]);
  useEffect(() => {
    console.log("둘다", counter);
  }, [counter, keyword]);

  return (
    <div className="Sample">
      <input
        type="text"
        placeholder="search...."
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default Sample;
