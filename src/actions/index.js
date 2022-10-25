
import axios from 'axios';
import { FETCH_USERS } from './constants';
const url = 'https://jsonplaceholder.typicode.com/posts';


export function selectUser(user) {
  return {
    type: 'USER_CLICKED',
    payload: user,
  }
}


//this is our UserList get method

export function userList() {
  return function(dispatch) {
    const request = axios.get(url);
    request.then(response => {
      dispatch({
        type: FETCH_USERS,
        payload: response.data
      })
    }).catch(err => console.log(err))
  }  
}


