import {FETCH_USERS} from '../actions/constants';

const initState = {
    users: []
}

export default function(state = initState, action) {
    switch(action.type) {
        case USER_CLICKED:
        return {
            ...state,
            SelectedUser:action.payload
           
        }

        
    }
    return state;
}