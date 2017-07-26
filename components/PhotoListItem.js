import React, { Component } from 'react';
import {
  Text,
  ImageBackground,
  View,
  LayoutAnimation,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as actions from '../actions';
import { CardSection } from './common';


class PhotoListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  share = (selectedImages, currentImage) => {
    const image = this.props.photo.image_url;
    const theme = this.props.photo;
    console.log('THEMEEEEE in PHOTOLIST: ', this.props.photo);

    // const image = this.state.photos[this.state.index].node.image.uri;
    // RNFetchBlob.fs.readFile(image, 'base64')
    // .then((data) => {
      const shareOptions = {
        title: 'React Native Share Example',
        message: `Completing this week's #PHOTO52 challenge! #${this.props.photo.theme}`,
        url: `${image}`,
        subject: 'Check out my photo of the week!'
      };

      Share.open(shareOptions)
        .then((res) => console.log('res:', res))
        .catch(err => console.log('err', err));
  }

  renderDescription() {
    const { photo, expanded } = this.props;

    // const { camera, lens, iso, shutter_speed, aperture } = this.props.photo;

    const { theme, end_date, week } = photo;

    if (expanded) {
      return (
        <CardSection style={styles.resultDetail}>
          <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 2.7, flexDirection: 'column' }}>
              <Text style={styles.resultDetailTextLabel}>WEEK: </Text>
              <Text style={styles.resultDetailTextLabel}>THEME:  </Text>
              <Text style={styles.resultDetailTextLabel}>COMPLETED:
              </Text>
            </View>
            <View style={{ flex: 3, flexDirection: 'column' }}>
              <Text style={styles.resultDetailText}>{week} of 52</Text>
              <Text style={styles.resultDetailText}>{theme ? theme.toUpperCase() : 'n/a'}</Text>
              <Text style={styles.resultDetailText}>{end_date ? end_date : 'n/a'}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.share.bind(this)}>
            <Icon
                name="share"
                size={35} color="#fff"
                style={{ alignSelf: 'center', textAlign: 'center', paddingTop: 5, paddingRight: 5 }}
            />
          </TouchableOpacity>
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
  resultDetailTextLabel: {
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
    flex: 1,
    alignSelf: 'stretch',
  },
  resultDetailTextLine: {
    flexDirection: 'row',
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
  const theme = ownProps.photo
  return { expanded, theme };
};

export default connect(mapStateToProps, actions)(PhotoListItem);
//
// defaultSource={require('../assets/logos/placeholder-4-500x300.png')}
