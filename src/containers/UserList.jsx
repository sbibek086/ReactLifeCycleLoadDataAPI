import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectUser, userList } from '../actions/index';



class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
    };
  }
  
  renderUsersList() {
    let counter = 0;
    return this.props.userList.map((user) => {
      counter = counter +1;
      return(
        <li
          onClick={() => {this.props.selectedUser(user)}}
          key={counter}
          className="list-group-item">
          <p> Title: {user.title} </p>
        </li>
        
      )
    })
  }

  render() {  
    return(
      <ul className="list-group">
        {this.renderUsersList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
 
  return {
    //users : state.users,
    selectedUser: state.selectedUser,
    userList: state.userList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectUser : selectUser,

  }, dispatch)
}

//export default AnimalList;
//wrapped component -> higher order component
//the order counts here, 1st mapStateToProps, 2nd mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
