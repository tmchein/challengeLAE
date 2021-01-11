import React, { useState, useEffect } from 'react';
import style from './UserTable.module.scss';

import axiosClient from '../../config/axios';

const UserTable = () => {
  const [UserList, setUserList] = useState([]);

  const getUsers = async () => {
    let result;
    const response = await axiosClient.post('/userlist').then((res) => {
      result = res.data;
    });
    console.log(result);
    setUserList(result);
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

        {UserList.map((user) => (
          <tr>
            <td>{user._id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
