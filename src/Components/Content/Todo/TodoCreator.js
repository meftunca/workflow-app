import React, { useContext, useState } from "react";
import { TodoContext } from ".";

const TodoCreator = ({ onSave }) => {
  const todoState = useContext(TodoContext);
  const [state, setState] = useState({
    title: "",
    description: "",
  });
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    const { name, value } = event.currentTarget;
    state[name] = value;
    setState(state);
    setCount(count + 1);
  };

  return (
    <div className="todo-creator">
      <h1 className="title">ToDo Creator</h1>

      <input name="title" onChange={onChange} value={state.title} />
      <textarea
        name="description"
        onChange={onChange}
        rows={4}
        value={state.description}
      ></textarea>
      <br />
      <br />
      <button
        className="blue"
        onClick={() => {
          // document.querySelector("input[name='title']").innerHTML = "";
          // document.querySelector("textarea[name='description']").innerHTML = "";
          todoState.setState([...todoState.state, state]);
          setState({
            title: "",
            description: "",
          });
          setCount(count + 1);
        }}
      >
        Kaydet
      </button>
    </div>
  );
};

export default TodoCreator;
