//this immediate below line not necessary
//import {FETCH_USERS} from '../actions/constants';

//immediate below block not necessary
/*const initState = {
    users: []
} */


export default function(state = null, action) {
    switch(action.type) {
        case 'USER_CLICKED':
        return action.payload;
    }       
    return state;
}



//this below block was first try and then replaced by better above block
/*export default function(state = initState, action) {
    switch(action.type) {
        case 'USER_CLICKED':
        return {
            ...state,
            selectedUserReducer:action.payload
           
        }

        
    }
    return state;
}
*/