
import { FETCH_USERS } from '../actions/constants';

/*
const initState = {
    users: []
}
*/

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_USERS:
        return action.payload;      
    }
    return state;
}


/*
export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_USERS:
        return {
            //yo style lai guru Jan le j garechh tyehi gara confusion vayo yesari
            ...state,
            getUsersListReducer:action.payload
        }

        
    }
    return state;
}
*/