//I think this is not needed for what is asked in assignment
export default function a(state=[], action) {
  switch(action.type) {
    case 'USER_CLICKED':
      //console.log(action)
      return action.payload
  }
  return state;
}



