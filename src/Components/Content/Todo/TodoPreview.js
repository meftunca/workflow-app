import React from "react";
import { TodoConsumer } from ".";

const TodoPreview = ({}) => {
  return (
    <div className="todo-preview">
      <h1 className="title">ToDo Preview</h1>
      <br />
      <div className="todo-wrapper">
        <TodoConsumer>
          {({ state, setState }) => (
            <>
              {state.map((i, k) => (
                <div className="todo-item" key={k}>
                  <h4 className="title">{i.title}</h4>
                  <p>{i.description}</p>
                  <div className="actions">
                    <button
                      className="red"
                      onClick={() => {
                        const newTodoList = state.filter((a, b) => k !== b);
                        setState(newTodoList);
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </TodoConsumer>
      </div>
    </div>
  );
};

export default TodoPreview;
