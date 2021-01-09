import { React, useState } from 'react';
import style from './TodoItem.module.scss';

const TodoItem = ({ description }) => {
  const [Completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!Completed);
  };

  return (
    <button className={style.o_item_container} onClick={handleClick}>
      <div className={style.o_description_container}>
        <img
          src="/resources/img/icon-check.svg"
          alt="check item"
          className={
            Completed ? `${style.o_icon} ${style.o_icon_focused}` : style.o_icon
          }
        />
        <p
          style={
            Completed
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {description}
        </p>
      </div>
      <div className={style.o_todo_tool_container}>
        <img
          src="/resources/img/check.svg"
          alt="check"
          className={style.o_todo_option}
        />
        <img
          src="/resources/img/edit.svg"
          alt="edit"
          className={style.o_todo_option}
        />
        <img
          src="/resources/img/cancel.svg"
          alt="delete"
          className={style.o_todo_option}
        />
      </div>
    </button>
  );
};

export default TodoItem;
