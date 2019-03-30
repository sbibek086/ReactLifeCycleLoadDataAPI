
import axios from 'axios';
import { FETCH_USERS } from './constants';
const url = 'https://jsonplaceholder.typicode.com/posts';

export function selectUser(user) {
  return {
    type: 'USER_CLICKED',
    payload: user,
  }
}

//this commented was for fetching hard coded user list
/*export function fetchUsers(){
  //do some AJAX ->  let response = do AJAX magic here

  return {
    type : 'FETCH_USER',
    payload : response
  }
} */

//this is our UserList get method




//export function getUsersList() {

  export function userList() {
  //const url = 'https://jsonplaceholder.typicode.com/posts';

  const request = axios.get(url);

  request.then(response => {
    dispatch ({
  
      type: FETCH_USERS,
      payload: response.data
  
    })
  
  })
}


