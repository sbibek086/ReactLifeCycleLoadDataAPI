
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {

    render(){
        return(
            <div>hello from userlist</div>
        )

    }

}

function mapStateToProps(state){
    return{
        name: 'bluebeard'
    } 
}

//export default AnimalList;
export default connect(mapStateToProps)(UserList); 
