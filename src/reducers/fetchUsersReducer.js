
// this file is just giving out the additional info ie. list of selcted user
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
            /* about ...state -imagine that you have a component that accepts N number of properties. Passing these down can be tedious if the number grows.
                   <Component x={} y={} z={} />
                Thus instead you do this, wrap them up in an object and use the spread notation
                     var props = { x: 1, y: 1, z:1 };
                   <Component {...props} />
            which will unpack it into the props on your component, ie you "never" use {... props} inside your render() function but only when you pass props down to 
           another component. Use your unpacked props as normal this.props.x  */
        }    
    }
    return state;
}
