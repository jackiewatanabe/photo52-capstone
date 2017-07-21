import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// import axios from 'axios';
import UserDetail from './UserDetail';
import * as actions from '../actions';


class UserPage extends Component {
  // state = { theme: this.props.theme, user: this.props.user };

  componentWillMount() {

  }

  render() {
    console.log('state: ', this.state);
    // console.log('user: ', this.user);

    return (
      <View>
        <UserDetail user={this.props.user} />
      </View>
    );
  }

}

const mapStateToProps = ({ auth, challenge }) => {
  const { email, error, loading, user } = auth;
  console.log('CHALLENGE IN USERPAGE: ', challenge);
  const { currentChallenge } = challenge;

  return { email, error, loading, user, currentChallenge };
};

export default connect(mapStateToProps, actions)(UserPage);
