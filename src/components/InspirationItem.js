import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class InspirationItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
  const { photo, expanded } = this.props;

  if (expanded) {

    return (
      <CardSection>
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <Text style={styles.resultDetailText}>CAMERA: {photo.camera} </Text>
        <Text style={styles.resultDetailText}>LENS: {photo.lens}</Text>
        <Text style={styles.resultDetailText}>ISO: {photo.iso}</Text>
        <Text style={styles.resultDetailText}>SHUTTER SPEED: {photo.shutter_speed}</Text>
        <Text style={styles.resultDetailText}>APERTURE: {photo.aperture}</Text>
        </View>
      </CardSection>
    );
  }
}


  render() {
    const { name, image_url, id, camera, lens, shutter_speed, iso } = this.props.photo;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectResultPhoto(id) }>
      <View>
      <CardSection style={{ alignSelf: 'center', paddingTop: 0, paddingBottom: 0 }}>
          <Image style={styles.imageStyle} source={{ uri: `${image_url}` }} />
      </CardSection>
      {this.renderDescription()}
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
    alignSelf: 'stretch'
  },
  resultDetailText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Avenir-Light',
    fontSize: 12,
    letterSpacing: 1
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log('mapstatetoprops: ', ownProps.photos);
  console.log('mapstatetoprops state: ', state);
  const expanded = state.selectedResultPhotoId === ownProps.photo.id;


  return { expanded };
};

export default connect(mapStateToProps, actions)(InspirationItem);
