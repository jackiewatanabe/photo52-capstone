import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import firebase from 'firebase';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const UserDetail = () => {

  return (
    <View>
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png' }} />
          </View>
          <View style={styles.usernameContentStyle}>
            <Text style={{ fontFamily: 'Avenir-Light', fontWeight: '100', letterSpacing: 2 }}>sushiigirl</Text>
          </View>
          <View>
            <Button
              onPress={() => firebase.auth().signOut()}
            >
              LOG OUT
            </Button>
          </View>
        </CardSection>
        <CardSection style={styles.themeContentStyle}>
          <Text style={{ fontFamily: 'Avenir-Light', fontWeight: '100', letterSpacing: 2 }}>THIS WEEK'S THEME</Text>

        </CardSection>
        <CardSection>
            <Button style={{ flex: 1 }}>NO THEME SET YET</Button>
        </CardSection>
      </Card>

      <Card>
        <CardSection style={styles.photorollContentStyle}>
          <View>
            <Text style={{ fontFamily: 'Avenir-Light', fontWeight: '100', letterSpacing: 2 }}>MY PHOTOROLL</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.photorollContentStyle}>
            <Image
            style={styles.imageStyle}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}}   />
            <Image
            style={styles.imageStyle}
            source={{ uri: 'https://ak.picdn.net/assets/cms/f3819ba883198b89684e2d99064d0972a7fc0d49-stofro_offset_02.png'}}   />
          </View>
        </CardSection>
      </Card>
    </View>
  );

};

const styles = {

  thumbnailStyle: {
    height: 50,
    width: 50,
    marginRight: 5,
    borderRadius: 25,
    resizeMode: 'contain'

  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  usernameContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
  },
  imageStyle: {
    height: 200,
    // flex: 1,
    width: 350,
    alignSelf: 'stretch'
  },
  photorollImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    // marginTop: 50
  },
  // photorollContainer: {
  //   marginTop: 20
  // },
  photorollContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
    // marginTop: 100
  }

};

export default UserDetail;
