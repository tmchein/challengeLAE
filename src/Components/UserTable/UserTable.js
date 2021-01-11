import React, { useEffect, useContext } from 'react';
import style from './UserTable.module.scss';

import UserContext from '../../context/userContext';

const UserTable = () => {
  const userContext = useContext(UserContext);

  const { getUsers, userlist, deleteUser } = userContext;

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  const handleDelete = (email) => {
    deleteUser(email);
    getUsers();
  };

  return (
    <table className={style.o_table}>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Opciones</th>
        </tr>

        {userlist.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>
              <button>
                <img src="/resources/img/edit.svg" alt="edit" />
              </button>
              <button>
                <img
                  src="/resources/img/cancel.svg"
                  alt="delete"
                  onClick={() => handleDelete(user.email)}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
