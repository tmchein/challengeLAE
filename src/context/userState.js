import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';

import axiosClient from '../config/axios';

import { READ_USERLIST, DELETE_USER } from '../types';

const UserState = ({ children }) => {
  const initialState = {
    userlist: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  //declarando las funciones

  const getUsers = async () => {
    try {
      const response = await axiosClient.post('/userlist');
      dispatch({
        type: READ_USERLIST,
        payload: response.data.userlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (email) => {
    try {
      await axiosClient.post('/deleteuser', { email });
      dispatch({
        type: DELETE_USER,
        payload: email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{ userlist: state.userlist, getUsers, deleteUser }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserState;
