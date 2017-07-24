import React, { Component } from 'react';
import {
  StyleSheet,
  CameraRoll,
  View,
  Modal,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { photoUpdate, photoCreate, challengeSave } from '../actions';

const { width } = Dimensions.get('window');

class PhotoCreate extends Component {
  // constructor() {
  //   super();
  //   console.warn(CameraRoll.getPhotos());
  // }

  constructor(props) {
      super(props);

      this.state = {
        num: 0,
        selected: [],
        modalVisible: false,
        photos: [],
        index: null
      };
    }

  onButtonPress() {
    const { theme, start_date } = this.props.challenge;
    const { challenge_uid, image_url, week } = this.props;
    // var week_count = week + 1;

    this.props.challengeSave({ theme, image_url, challenge_uid, start_date, week });
  }

  onChooseButtonPress() {
      Actions.gallery();
  }

  onShareButtonPress() {
    Actions.shareGallery();
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }));
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null;
    }
    this.setState({ index });
  }

  getSelectedImages(images, current) {
    const num = images.length;

    this.setState({
      num: num,
      selected: images,
    });

    console.log(current);
    // console.log(this.state.selected);
  }
  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    console.log('this.props.upload_image_url type: ', typeof this.props.upload_image_url);
    return (
      <Card>
      <CardSection style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('closed')}
        >
          <View style={styles.modalContainer}>
            <Button
              title='Close'
              onPress={this.toggleModal}
            />
            <ScrollView
              contentContainerStyle={styles.scrollView}
            >
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{ opacity: i === this.state.index ? 0.5 : 1 }}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <ImageBackground
                        style={{
                          width: width / 3,
                          height: width / 3
                        }}
                        source={{ uri: p.node.image.uri }}
                      />
                    </TouchableHighlight>
                  );
                })
              }
            </ScrollView>
            {
              this.state.index !== null && (
                <View style={styles.shareButton}>
                  <Button
                      title='asdfasdf'
                      onPress={this.share}
                  />
                  <Button
                      title='Select'
                      onPress={this.select}
                  />
                </View>
              )
            }
          </View>
        </Modal>
      </CardSection>

        <CardSection>
          <Button
           onPress={this.onChooseButtonPress.bind(this)}
          >
            CHOOSE PHOTO
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onShareButtonPress.bind(this)}
          >
            SHARE PHOTO
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>UPLOAD</Button>
        </CardSection>
      </Card>
    );
  }

}


const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    // paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    width,
    padding: 10,
    bottom: 0,
    left: 0
  }
});
//
// const styles = {
//   pickerTextStyle: {
//     fontSize: 18,
//     paddingLeft: 20
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   content: {
//     marginTop: 15,
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   text: {
//     fontSize: 16,
//     alignItems: 'center',
//     color: '#fff',
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
//   info: {
//     fontSize: 12,
//   },
//   modalContainer: {
//     paddingTop: 20,
//     flex: 1
//   },
//   scrollView: {
//     flexWrap: 'wrap',
//     flexDirection: 'row'
//   },
//   shareButton: {
//     position: 'absolute',
//     width: 200,
//     padding: 10,
//     bottom: 0,
//     left: 0
//   }
// };

const mapStateToProps = (state) => {
  const { image_url } = state.photoForm;
  const { challenge, challenge_ref, challenge_uid, week } = state.auth;
  return { challenge, challenge_ref, challenge_uid, image_url, week };
};

export default connect(mapStateToProps, { photoUpdate, photoCreate, challengeSave })(PhotoCreate);
