
import axios from 'axios';
import { FETCH_ANIMALS } from './constants';


export function selectAnimal(animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal,
  }
}

//this commented was for fetching hard coded animal list
/*export function fetchAnimals(){
  //do some AJAX ->  let response = do AJAX magic here

  return {
    type : 'FETCH_ANIMAL',
    payload : response
  }
} */

//this is our AnimalList get method




export function getAnimalsList() {

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const request = axios.get(url);

  request.then(response => {
    return ({
  
      type: FETCH_ANIMALS,
      payload: response.data
  
    })
  
  })
}


