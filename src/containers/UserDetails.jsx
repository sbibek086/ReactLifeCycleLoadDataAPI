import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {

    render(){

    console.log('details', this.props);

    if(!this.props.selectedUser){
      return(
        <div>...</div>
      )
    }

    return(
      <div className="card">
        <h6>details</h6>
        <div>title : {this.props.selectedUser.title}</div>
        <div>body : {this.props.selectedUser.body}</div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    selectedUser : state.selectedUser.selectedUser
  }
}

export default connect(mapStateToProps)(UserDetails)
