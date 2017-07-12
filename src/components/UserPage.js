import React, { Component } from 'react';
import { View } from 'react-native';
// import axios from 'axios';
import UserDetail from './UserDetail';
// import { Header } from './common';


class UserPage extends Component {
  state = { theme: null };

  render() {
    console.log('state: ', this.state);
    // console.log('user: ', this.user);

    return (
      <View user={this.props.user} theme={this.state.theme}>
        <UserDetail user={this.props.user} theme={this.state.theme} />
      </View>
    );
  }

}

export default UserPage;

// <Header headerText="Authentication" />
