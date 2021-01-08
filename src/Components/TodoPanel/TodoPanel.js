import { React, useState } from 'react';

import TodoInput from '../TodoInput/TodoInput';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoPanel.module.scss';

const TodoPanel = () => {
  const [data, setdata] = useState([]);

  /*Se crea un metodo que crea un objeto con la descripcion y posteriormente
  se asigna esto al state, copiamos los elementos que tiene el state y agregamos uno nuevo*/
  const createNewTask = (description) => {
    const newdata = { description };
    setdata([...data, newdata]);
  };

  return (
    <div className={style.o_main_container}>
      <div className={style.o_main_content}>
        <div className={style.o_title}>
          <h2>TO DO LIST</h2>
        </div>
        <div className={style.o_panel_container}>
          <TodoInput onAdd={createNewTask} />

          <div className={style.o_panel_content}>
            {data.map(({ description }, i) => (
              <TodoItem key={i} description={description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPanel;
