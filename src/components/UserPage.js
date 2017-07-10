import React, { Component } from 'react';
import { View } from 'react-native';
// import axios from 'axios';
import UserDetail from './UserDetail';
import { Header } from './common';


class UserPage extends Component {
  render() {
    // console.log(this.state);

    return (
      <View>
        <Header headerText="Authentication" />
        <UserDetail />
      </View>
    );
  }

}

export default UserPage;
