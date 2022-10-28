import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectUser, userList } from '../actions/index';



class UserList extends Component {
  constructor(props) {
    super(props);  //its ritual of referencing back to constructor in parent n is needed after constructor(props)

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
          onClick={() => {this.props.selectUser(user)}}
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
  console.log(state);
  return {
    //users : state.users,
    selectedUser: state.selectedUser.selectedUser,
    userList: state.userList.userList,
  }
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({
   // selectUser : selectUser,

  //}, dispatch)

  return { 
    selectUser: (user)=> dispatch (selectUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
// while component makes UI element to props, Higher.Order.Component makes components like mapStateToProps and mapDispatchToprops
//to higher order another component. full in https://imgur.com/a/GFtRRAv
