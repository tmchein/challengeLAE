import { React, useRef } from 'react';
import style from './TodoInput.module.scss';

const TodoInput = ({ onAdd }) => {
  const inputRef = useRef(null);

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      const value = inputRef.current.value;
      onAdd(value);
      inputRef.current.value = '';
    } else {
      return;
    }
  };

  return (
    <div className={style.o_input_container}>
      <input
        className={style.o_input}
        type="text"
        placeholder="Create a new todo..."
        ref={inputRef}
        onKeyDown={handleEnter}
      />
      <img
        src="/resources/img/icon-check.svg"
        alt="check"
        className={style.o_icon}
      />
    </div>
  );
};

export default TodoInput;
