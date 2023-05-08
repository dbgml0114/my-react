import { useState, useEffect } from "react";

function Sample3() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [toDo, ...currentArray]);
  };

  return (
    <div className="Sample">
      <h1>My to do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={toDo}
          placeholder="write"
        />
        <button type="submit">Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sample3;
