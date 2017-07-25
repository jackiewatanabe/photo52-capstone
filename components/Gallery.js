import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  Text
} from 'react-native';
import firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, CardSection, Spinner } from '../components/common';
import * as actions from '../actions';

class Gallery extends Component {

  constructor(props) {
      super(props);

      this.state = {
        loading: false,
      };
    }

  getSelectedImages = (selectedImages, currentImage) => {
    // let loading = false;

    const image = currentImage.uri;

    const { uid } = this.props.user;

    console.log('currentImage in getSelectedImages', currentImage);
    console.log('props in getSlected Images: ', this.props);
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;


    let uploadBlob = null;
    Alert.alert(
    'Upload Photo',
    'Do you want to upload this photo?',
    [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
      { text: 'Cancel', onPress: () => Actions.shareGallery(), style: 'cancel' },
      { text: 'OK', onPress: () => {
          this.setState({ loading: true })
          const imageRef = firebase.storage().ref('user').child(`${uid}`).child(`images`)
          .child(`${currentImage.filename}`);
          const mime = 'image/jpg';
          fs.readFile(image, 'base64')

            .then((data) => {
              return Blob.build(data, { type: `${mime};BASE64` });
          })
          .then((blob) => {
              uploadBlob = blob;
              return imageRef.put(blob, { contentType: mime });
            })
            .then(() => {
              uploadBlob.close();
              return imageRef.getDownloadURL();
            })
            .then((url) => {
              // URL of the image uploaded on Firebase storage
              console.log(url);

              console.log('this.props.upload_image_url: ', this.props.image_url);
              this.props.photoUpdate({ prop: 'image_url', value: url });
              this.setState({ loading: false });
              // Actions.photoCreate();
              // renderSubmitButton();
            })
            .catch((error) => {
              console.log(error);
            });} },
    ],
    { cancelable: false }
    );
  }

  // renderSpinner() {
  //   if (this.state.loading) {
  //     return (
  //       <Spinner size='large' />
  //     );
  //   }
  // }
  onSubmitPress() {
    const { theme, start_date } = this.props.challenge;
    const { challenge_uid, image_url, week } = this.props;
    // var week_count = week + 1;

    this.props.challengeSave({ theme, image_url, challenge_uid, start_date, week });
  }

  renderSubmitButton() {
    if (this.props.uploadReady) {
      return (
        <Button onPress={this.onSubmitPress.bind(this)}>
          SUBMIT MY CHALLENGE
        </Button>
      );
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner size='large' />
      );
    }

    if (!this.props.uploadReady) {

    return (
      <View style={styles.container}>
        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes='SavedPhotos'
          batchSize={5}
          maximum={1}
          selected={[]}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages.bind(this)}
        />
      </View>
    );
  } else {
    return (
      <View>
        <CardSection style={{ paddingLeft: 10, paddingTop: 20, paddingBottom: 0 }}>
          <Text style={styles.submitText}>SUBMIT PHOTO FOR</Text>
        </CardSection>
        <CardSection style={{ paddingLeft: 10 }}>
          <Text style={styles.themeText} >{this.props.challenge.theme.toUpperCase()}</Text>
        </CardSection>
        <CardSection style={{ alignSelf: 'center' }}>
          <Image style={styles.imageStyle} source={{ uri: `${this.props.image_url}` }} />
        </CardSection>
        <CardSection>
          <Text style={styles.weekText}>CHALLENGE: Week {this.props.week} of 52</Text>
        </CardSection>
        <CardSection>
        {this.renderSubmitButton()}
        </CardSection>
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#817f7f',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
  imageStyle: {
    height: 225,
    width: 350,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  submitText: {
    fontFamily: 'Avenir-Light',
    fontSize: 20,
    letterSpacing: 2
  },
  themeText: {
    fontFamily: 'Iowan Old Style',
    fontSize: 22,
    letterSpacing: 1
  },
  weekText: {
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  }
});

const mapStateToProps = (state, ownProps) => {
  console.log('mapstatetoprops state.photoForm: ', state.photoForm);
  const { user, challenge, week, challenge_ref, challenge_uid } = state.auth;
  const { image_url, uploadReady } = state.photoForm;

  // const expanded = state.selectedResultPhotoId === ownProps.photo.id;

  return { image_url, user, uploadReady, challenge, week, challenge_ref, challenge_uid };
};

export default connect(mapStateToProps, actions)(Gallery);
