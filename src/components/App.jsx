import React, { Component } from 'react';

import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';

class App extends Component {

  render() {

    return(
    <div className="container app-container">
      <h4>Hello to zookeper</h4>
      <div className="row">
        <div className="col-4">
          <UserList/>
        </div>
        <div className="col-8">
          <UserDetails />
        </div>
      </div>
    </div>
    )
  }
}

export default App;