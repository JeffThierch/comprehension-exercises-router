import React, { Component } from 'react';

class Users extends Component {
  render() {
    console.log(this.props);
    const { greetingsMessage } = this.props
    const {id} = this.props.match.params
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component, you are the user {id} </p>
      </div>
    );
  }
};

export default Users;

