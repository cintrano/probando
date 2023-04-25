import React, { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");

  const clickHandler = () => {
    const item = {
      id: Math.floor(Math.random() * 10000),
      value: input,
    };
    props.addItem(item);
    setInput("");
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      const item = {
        id: Math.floor(Math.random() * 10000),
        value: input,
      };
      props.addItem(item);
      setInput("");
    }
  };

  return (
    <>
      <input
        type="text"
        className="col-9"
        value={input}
        placeholder="Add an item"
        onKeyDown={keyDownHandler}
        onChange={changeHandler}
      />
      <button
        type="button"
        className="btn btn-success col-3"
        onClick={() => clickHandler()}
      >
        Add task
      </button>
    </>
  );
}

export default Input;
