import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { photosFetch } from '../actions';

class PhotoList extends Component {
  componentWillMount() {
    this.props.photosFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props
    // that this componenet will be rendered with
    //  this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ photos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.clonewithRows(photos);
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
