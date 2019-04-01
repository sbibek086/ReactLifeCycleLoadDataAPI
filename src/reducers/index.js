import { combineReducers } from 'redux';

//import userReducer from './userReducer';
//import selectedUserReducer from './selectedUserReducer';
import fetchUsersReducer from './fetchUsersReducer';
//import { getUsersList } from '../actions/index';
//immediate above code may be needed

import fetchSelectedUserReducer from './fetchSelectedUserReducer';

const rootReducer = combineReducers({
  //state : ( state = {} ) => state
  //users: userReducer,
  //selectedUser: selectedUserReducer,
  // this immediate above line is done by fetchSelectedUserRed..
  
  selectedUser: fetchUsersReducer, // fetchUsersReducers on LHS is wrong, its selectedUserReducer var that its passing
  userList :fetchSelectedUserReducer
  //getUsersList: getUsersListReducer,
  
})

export default rootReducer;
