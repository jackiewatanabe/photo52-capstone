import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Share from 'react-native-share';
import * as actions from '../actions';

class ShareGallery extends Component {

  // getSelectedImages = (selectedImages, currentImage) => {
  //   const image = currentImage.uri;
  //
  //   const { uid } = this.props.user;
  //
  //   console.log('currentImage in getSelectedImages', currentImage);
  //   console.log('props in getSlected Images: ', this.props);
  //   const Blob = RNFetchBlob.polyfill.Blob;
  //   const fs = RNFetchBlob.fs;
  //   window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  //   window.Blob = Blob;
  //
  //
  //   let uploadBlob = null;
  //   const imageRef = firebase.storage().ref('user').child(`${uid}`).child(`images`)
  //   .child(`${currentImage.filename}`);
  //   const mime = 'image/jpg';
  //   fs.readFile(image, 'base64')
  //     .then((data) => {
  //       return Blob.build(data, { type: `${mime};BASE64` });
  //   })
  //   .then((blob) => {
  //       uploadBlob = blob;
  //       return imageRef.put(blob, { contentType: mime });
  //     })
  //     .then(() => {
  //       uploadBlob.close();
  //       return imageRef.getDownloadURL();
  //     })
  //     .then((url) => {
  //       // URL of the image uploaded on Firebase storage
  //       console.log(url);
  //
  //       console.log('this.props.upload_image_url: ', this.props.image_url);
  //       this.props.photoUpdate({ prop: 'image_url', value: url });
  //       Actions.photoCreate();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  share = (selectedImages, currentImage) => {
    const image = currentImage.uri;

    // const image = this.state.photos[this.state.index].node.image.uri;
    RNFetchBlob.fs.readFile(image, 'base64')
    .then((data) => {
      const shareOptions = {
        title: 'React Native Share Example',
        message: `Completing this week's #PHOTO52 challenge!`,
        url: `data:image/jpg;base64,${data}`,
        subject: 'Check out my photo of the week!'
      };

      Share.open(shareOptions)
        .then((res) => console.log('res:', res))
        .catch(err => console.log('err', err));
    });
  }

  render() {
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
          callback={this.share.bind(this)}
        />
      </View>
    );
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
});

export default ShareGallery;
