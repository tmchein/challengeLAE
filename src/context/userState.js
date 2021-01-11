import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';

import axiosClient from '../config/axios';

import {
  READ_USERLIST,
  DELETE_USER,
  SELECTED_USER,
  UPDATE_USER,
  RESET_FIELDS,
} from '../types';

const UserState = ({ children }) => {
  const initialState = {
    userlist: [],
    selectedUser: null,
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

  const getSelectedUser = (selectedUser) => {
    try {
      dispatch({
        type: SELECTED_USER,
        payload: selectedUser,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const userUpdate = async (user) => {
    try {
      await axiosClient.put('/updateuser', user);
      dispatch({
        type: UPDATE_USER,
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const resetFields = () => {
    dispatch({
      type: RESET_FIELDS,
    });
  };

  return (
    <userContext.Provider
      value={{
        userlist: state.userlist,
        selectedUser: state.selectedUser,
        getUsers,
        deleteUser,
        getSelectedUser,
        userUpdate,
        resetFields,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserState;
