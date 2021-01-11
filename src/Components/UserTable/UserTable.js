import React, { useState, useEffect } from 'react';
import style from './UserTable.module.scss';

import axiosClient from '../../config/axios';

const UseTable = () => {
  const [UserList, setUserList] = useState([]);

  const getUsers = async () => {
    const response = axiosClient.post('/userlist').then((data) => {
      console.log(data.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <table className={style.o_table}>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Email</th>
        </tr>
      </tbody>
    </table>
  );
};

export default UseTable;
