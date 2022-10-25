// this file is just giving out which user is clicked, and not the additional info ie. list of selcted user
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
export default function(state = initState, action) {    //default means this function name wud be fetchSelectedUserReducer, name of this file.
    switch(action.type) {
        case 'USER_CLICKED':
        return {
            ...state,
            selectedUser:action.payload      
        }        
    }
    return state;
}
