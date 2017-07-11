import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { photosFetch } from '../actions';

class PhotoList extends Component {
  componentWillMount() {
    this.props.photosFetch();
  }

  render() {
      return (
        <View>
          <Text>Photo List</Text>
          <Text>Photo List</Text>
          <Text>Photo List</Text>
          <Text>Photo List</Text>
          <Text>Photo List</Text>
        </View>
      );
  }
}

export default connect(null, { photosFetch })(PhotoList);
