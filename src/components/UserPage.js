import React, { Component } from 'react';
import { View } from 'react-native';
// import axios from 'axios';
import UserDetail from './UserDetail';


class UserPage extends Component {
  render() {
    // console.log(this.state);

    return (
      <View>
        <UserDetail />
      </View>
    );
  }

}

export default UserPage;
