import React, { createContext, useLayoutEffect, useState } from "react";
import TodoCreator from "./TodoCreator";
import TodoPreview from "./TodoPreview";
import "./todo.scss";

export const TodoContext = createContext({
  state: JSON.parse(localStorage.getItem("todo") || "[]"),
  setState(data) {
    this.list.push(data);
  },
});

export const TodoProvider = TodoContext.Provider;
export const TodoConsumer = TodoContext.Consumer;
const TodoApp = () => {
  const [count, setCount] = useState(0);
  const setItem = (data) => {
    localStorage.setItem("todo", JSON.stringify(data));
    setCount(count + 1);
  };
  return (
    <TodoProvider
      value={{
        state: JSON.parse(localStorage.getItem("todo") || "[]"),
        setState: setItem,
      }}
    >
      <div className="todo-container">
        <TodoCreator />
        <TodoPreview />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
