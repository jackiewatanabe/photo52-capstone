import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// import axios from 'axios';
import UserDetail from './UserDetail';
// import { Header } from './common';


class UserPage extends Component {
  state = { theme: null };

  render() {
    console.log('state: ', this.state);
    // console.log('user: ', this.user);

    return (
      <View>
        <UserDetail />
      </View>
    );
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(null, {})(UserPage);

// <Header headerText="Authentication" />
