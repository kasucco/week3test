import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    return setTodos((currentarray) => [todo, ...currentarray]);
  };
  console.log(todos);
  return (
    <div>
      <div className="input">
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} value={todo}></input>
          <button>추가하기</button>
        </form>
      </div>
      <div className="title">
        <h2>Todo List</h2>
      </div>
      <div>
        {todos.map((todo) => (
          <div className="cardBox">{todo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
