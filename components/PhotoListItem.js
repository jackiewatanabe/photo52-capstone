import React, { Component } from 'react';
import { Text, ImageBackground, Image, View, LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';


class PhotoListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
  const { photo, expanded } = this.props;

  // const { camera, lens, iso, shutter_speed, aperture } = this.props.photo;

  const { theme, end_date } = photo;

  if (expanded) {
    return (
      <CardSection style={styles.resultDetail}>
        <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row' }}>
          <View style={{ flex: 2.7, flexDirection: 'column' }}>
            <Text style={styles.resultDetailTextLabel}>THEME:  </Text>
            <Text style={styles.resultDetailTextLabel}>COMPLETED:
            </Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'column' }}>
            <Text style={styles.resultDetailText}>{theme ? theme : 'n/a'}</Text>
            <Text style={styles.resultDetailText}>{end_date ? end_Date : 'n/a'}</Text>
          </View>
        </View>
      </CardSection>
    );
  }
}


  render() {
    const { image_url, uid } = this.props.photo;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectResultPhoto(uid)}>
        <View>
          <CardSection style={{ paddingTop: 0, paddingBottom: 0 }}>
            { image_url ? (<ImageBackground style={styles.imageStyle} source={{ uri: `${image_url}` }}>{this.renderDescription()}</ImageBackground>) : null }
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    height: 200,
    width: 350,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  // imageStyle: {
  //   // height: 200,
  //   // width: 350,
  //   alignSelf: 'stretch',
  //   // flex: 1,
  //   width: 350,
  //   height: 200,
  //   backgroundColor: 'transparent',
  //   justifyContent: 'center',
  //   // alignItems: 'center',
  // },
  resultDetailTextLabel: {
    // alignSelf: 'flex-start',
    textAlign: 'right',
    fontFamily: 'Avenir-Light',
    fontSize: 12,
    letterSpacing: 1,
    color: 'white',
    opacity: 1,
    fontWeight: '400',
    paddingRight: 3
  },
  resultDetail: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    // opacity: 0.5,
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: '#ffffff',
    // opacity: 0.5
  },
  resultDetailTextLine: {
    flexDirection: 'row',
    // alignSelf: 'center',
    // flex: 1
  },
  resultDetailText: {
    alignSelf: 'stretch',
    // textAlign: 'left',
    fontFamily: 'Iowan Old Style',
    fontStyle: 'italic',
    fontSize: 12,
    letterSpacing: 1,
    color: 'white',
    opacity: 1,
    fontWeight: '400'
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log('STATE IN PHOTOLISTITEM: ', state);
  console.log('OWNPROPS IN PHOTOLISTITEM: ', ownProps);
  const expanded = state.selectedResultPhotoId === ownProps.photo.uid;

  return { expanded };
};

export default connect(mapStateToProps, actions)(PhotoListItem);
