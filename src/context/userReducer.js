import { READ_USERLIST, DELETE_USER } from '../types';

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
    default:
      return state;
  }
};
