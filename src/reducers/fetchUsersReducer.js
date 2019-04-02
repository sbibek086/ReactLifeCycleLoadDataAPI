
import { FETCH_USERS } from '../actions/constants';


const initState = {
    userList: []
}


/*export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_USERS:
        return action.payload;      
    }
    return state;
}
*/



export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_USERS:
        return {
            ...state,
            userList:action.payload
        }

        
    }
    return state;
}
