import _ from 'lodash';
import React, { Component } from 'react';
// import { View } from 'react-native';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
// import axios from 'axios';
import { searchPhotosFetch, photosFetch } from '../actions';
import InspirationItem from './InspirationItem';


class InspirationPage extends Component {
  componentWillMount() {
    this.props.searchPhotosFetch();
    // this.props.photosFetch();
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

    this.dataSource = ds.cloneWithRows(photos);
  }

  renderRow(photo) {
    return <InspirationItem photo={photo} />;
  }

  render() {
    console.log(this.props);
    return (
      <ScrollView style={{ height: 400 }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (themes) => {

  const { theme } = themes;

  return { theme };

  // const results = _.map(state.themes, (val, uid) => {
  //   return { ...val, uid };
  // });
  //
  // return { results };
};

export default connect(null, { searchPhotosFetch })(InspirationPage);
