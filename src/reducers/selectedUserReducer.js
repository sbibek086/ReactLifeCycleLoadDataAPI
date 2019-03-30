// this is not needed because it is done by fetchSelectedUserReducer
export default function a(state=[], action) {
  switch(action.type) {
    case 'USER_CLICKED':
      //console.log(action)
      return action.payload
  }
  return state;
}



