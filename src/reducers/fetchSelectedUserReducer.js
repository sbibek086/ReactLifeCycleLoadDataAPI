//immediate below block not necessary
const initState = {
    selectedUser: []
} 


/*export default function(state = initState, action) {
    switch(action.type) {
        case 'USER_CLICKED':
        return action.payload;
    }       
    return state;
}
*/


//this below block was first try and then replaced by better above block
export default function(state = initState, action) {
    switch(action.type) {
        case 'USER_CLICKED':
        return {
            ...state,
            selectedUser:action.payload
           
        }

        
    }
    return state;
}
