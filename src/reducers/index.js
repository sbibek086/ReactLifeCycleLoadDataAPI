import { combineReducers } from 'redux';
import fetchUsersReducer from './fetchUsersReducer';
import fetchSelectedUserReducer from './fetchSelectedUserReducer';

const rootReducer = combineReducers({
  //state : ( state = {} ) => state
  //users: userReducer,
  userList: fetchUsersReducer, 
  selectedUser :fetchSelectedUserReducer
 })

export default rootReducer;
