import React, { Component } from 'react';
import {connect} from 'react-redux';


import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';
import { userList } from '../actions/index'


class App extends Component {

  componentWillMount(){
    this.props.fetchUser();
  }

  render() {

    return(
    <div className="container app-container">
      <h4>Hello to User List</h4>
      <div className="row">
        <div className="col-4">
          <UserList/>
        </div>
        <div className="col-8">
          <UserDetails/>
        </div>
      </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({
   // selectUser : selectUser,

  //}, dispatch)

  return { 
    fetchUser: ( )=> dispatch(userList())
  }
}


export default connect(null, mapDispatchToProps)(App);
