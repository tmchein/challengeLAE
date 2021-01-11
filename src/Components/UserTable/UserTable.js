import React, { useState, useEffect, useContext } from 'react';
import style from './UserTable.module.scss';

import UserContext from '../../context/userContext';

const UserTable = () => {
  const [updateUser, setUpdateUser] = useState([]);
  const userContext = useContext(UserContext);

  const {
    getUsers,
    userlist,
    deleteUser,
    getSelectedUser,
    selectedUser,
    userUpdate,
    resetFields,
  } = userContext;

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedUser != null) {
      setUpdateUser(selectedUser);
    } else {
      setUpdateUser([]);
    }
  }, [setUpdateUser, selectedUser]);

  const handleDelete = (email) => {
    deleteUser(email);
    getUsers();
  };

  const handleSelection = (user) => {
    getSelectedUser(user);
  };

  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = (user) => {
    userUpdate(user);
    resetFields();
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
            {selectedUser ? (
              <>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    value={updateUser.firstName || ''}
                    placeholder={user.firstName}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    value={updateUser.lastName || ''}
                    placeholder={user.lastName}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    value={updateUser.phone || ''}
                    placeholder={user.phone}
                    onChange={handleChange}
                  />
                </td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() =>
                      handleUpdate({
                        ...updateUser,
                        email: user.email,
                        id: user._id,
                      })
                    }
                  >
                    <img src="/resources/img/check.svg" alt="save" />
                  </button>
                  <button>
                    <img src="/resources/img/cancel.svg" alt="cancel" />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleSelection(user)}>
                    <img src="/resources/img/edit.svg" alt="edit" />
                  </button>
                  <button onClick={() => handleDelete(user.email)}>
                    <img src="/resources/img/cancel.svg" alt="delete" />
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
