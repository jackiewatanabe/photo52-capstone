import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// import axios from 'axios';
import UserDetail from './UserDetail';
import { loginUser } from '../actions';
// import { Header } from './common';


class UserPage extends Component {
  state = { theme: '', user: this.props.user };

  render() {
    console.log('state: ', this.state);
    // console.log('user: ', this.user);

    return (
      <View>
        <UserDetail user={this.state.user} theme={this.state.theme}/>
      </View>
    );
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;

  return { email, password, error, loading, user };
};

export default connect(mapStateToProps, { loginUser })(UserPage);
