import React from "react";
import "./App.css";
import Todos from "./components/Todos";

// Model
import Todo from "./models/todo";

function App() {
  // create todo item
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
