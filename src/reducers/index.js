import { combineReducers } from 'redux';

import userReducer from './animalReducer';
//import selectedAnimalReducer from './selectedAnimalReducer';
import fetchUsersReducer from './fetchAnimalsReducer';
import { getUsersList } from '../actions';


const rootReducer = combineReducers({
  //state : ( state = {} ) => state
  users: userReducer,
  //selectedAnimal: selectedAnimalReducer,
  userList: fetchUsersReducer,
  getUsersList: getUsersList
})

export default rootReducer;
