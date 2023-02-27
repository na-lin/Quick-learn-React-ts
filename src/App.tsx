import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Todo items={["learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
