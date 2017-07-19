import React, { Component } from 'react';
import { StyleSheet, Text, Picker, CameraRoll, View, Modal, ScrollView, TouchableHighlight, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
// import CameraRollPicker from 'react-native-camera-roll-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { Card, CardSection, Input, Button } from './common';
import { photoUpdate, photoCreate } from '../actions';

// import Share from 'react-native-share';

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

    setIndex = (index) => {
      if (index === this.state.index) {
        index = null;
      }
      this.setState({ index });
    }

    getPhotos = () => {
      CameraRoll.getPhotos({
        first: 20,
        assetType: 'All'
      })
      .then(r => this.setState({ photos: r.edges }));
    }

  onButtonPress() {
    const { name, description, category, image_url } = this.props;

    this.props.photoCreate({
      name, description, category: category || 'uncategorized', image_url });
  }

  onChooseButtonPress() {
      Actions.gallery();
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
    console.log('this.props.image_url: ', this.props.image_url);
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
                      <Image
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
          <Input
            label="Name"
            placeholder="Enter image name here"
            value={this.props.name}
            onChangeText={text => this.props.photoUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Description"
          placeholder="Enter description here"
          value={this.props.description}
          onChangeText={text => this.props.photoUpdate({ prop: 'description', value: text })}
        />
        </CardSection>

        <CardSection>
          <Input
            label="Image URL"
            placeholder={this.props.image_url}
            value={this.props.image_url}
            onChangeText={text => this.props.photoUpdate({ prop: 'image_url', value: text })}
          />
        </CardSection>
        <CardSection>
          <Button
           onPress={this.onChooseButtonPress.bind(this)}
          >
            CHOOSE PHOTO
          </Button>
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Category</Text>
          <Picker
            selectedValue={this.props.category}
            onValueChange={value => this.props.photoUpdate({ prop: 'category', value })}
          >
            <Picker.Item label="Uncategorized" value="uncategorized" />
            <Picker.Item label="Portrait" value="portrait" />
            <Picker.Item label="Landscape" value="landscape" />
            <Picker.Item label="Animals" value="animals" />
            <Picker.Item label="Fashion" value="fashion" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>UPLOAD</Button>
        </CardSection>
      </Card>
    );
  }

}


styles = StyleSheet.create({
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
  const { name, description, category, image_url } = state.photoForm;

  return { name, description, category, image_url };
};

export default connect(mapStateToProps, { photoUpdate, photoCreate })(PhotoCreate);
