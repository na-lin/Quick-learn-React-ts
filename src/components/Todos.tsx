import React from "react";
// Component
import TodoItem from "./TodoItem";

// Data Model
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li>{item.text}</li>
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
