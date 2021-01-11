import {
  READ_USERLIST,
  DELETE_USER,
  SELECTED_USER,
  UPDATE_USER,
  RESET_FIELDS,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case READ_USERLIST:
      return { ...state, userlist: action.payload };
    case DELETE_USER:
      return {
        ...state,
        userlist: state.userlist.filter((email) => email !== action.payload),
      };
    case SELECTED_USER:
      return { ...state, selectedUser: action.payload };

    case UPDATE_USER:
      return {
        ...state,
        userlist: state.userlist.map((user) =>
          user.email === action.payload.email ? action.payload : user
        ),
      };

    case RESET_FIELDS:
      return {
        ...state,
        selectedUser: null,
      };

    default:
      return state;
  }
};
