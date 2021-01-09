import React from 'react';
import style from './UserTable.module.scss';

const UseTable = () => {
  return (
    <table className={style.o_table}>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>Estado</th>
      </tr>
    </table>
  );
};

export default UseTable;
