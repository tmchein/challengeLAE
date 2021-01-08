import { React, useState } from 'react';
import style from './TodoItem.module.scss';

const TodoItem = ({ description }) => {
  const [Completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!Completed);
  };

  return (
    <button className={style.o_item_container} onClick={handleClick}>
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
    </button>
  );
};

export default TodoItem;
