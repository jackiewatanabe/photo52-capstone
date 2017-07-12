import React, { Component } from 'react';
import { View } from 'react-native';
// import axios from 'axios';
import UserDetail from './UserDetail';
import { Header } from './common';


class UserPage extends Component {
  render() {
    console.log('state: ', this.state);

    return (
      <View>

        <UserDetail />
      </View>
    );
  }

}

export default UserPage;

// <Header headerText="Authentication" />
