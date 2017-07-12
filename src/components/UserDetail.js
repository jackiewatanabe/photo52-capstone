import React from 'react';
import firebase from 'firebase';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from './common';
import PhotoList from './PhotoList';
import ThemeItem from './ThemeItem';

// const { currentUser } = firebase.auth();


const UserDetail = () => {
  console.log('props: ', this.props);


  return (
    <View>
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png'
            }}
            />
          </View>
          <View style={styles.usernameContentStyle}>
            <Text
              style={{
                fontFamily: 'Avenir-Light',
                fontWeight: '100',
                letterSpacing: 2
              }}
            >
              sushiigirl
            </Text>
          </View>
        </CardSection>

        <ThemeItem />
      </Card>
      <Card>
        <CardSection>
          <Text style={{
            fontFamily: 'Avenir-Light',
            fontWeight: '100',
            letterSpacing: 2
        }}>
            MY PHOTOROLL
          </Text>
        </CardSection>
        <PhotoList />
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
    marginRight: 100,
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
