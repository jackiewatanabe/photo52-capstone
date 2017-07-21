import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';

class InspirationChoice extends Component {

  on500pxPress() {
    Actions.inspirationPage({ api: '500px' });
  }

  onUnsplashPress() {
    Actions.inspirationPage({ api: 'unsplash' });
  }

  render() {
    return (
      <Card
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CardSection style={{ alignSelf: 'stretch' }}>
          <TouchableOpacity
            style={{ alignSelf: 'stretch' }}
            onPress={this.on500pxPress.bind(this)}>
            <Image source={require('../assets/logos/500px_logo_dark.png')} style={styles.imageStyle} />
          </TouchableOpacity>
        </CardSection>
        <CardSection style={{ alignSelf: 'stretch' }}>
          <TouchableOpacity
          style={{ alignSelf: 'stretch' }}
           onPress={this.onUnsplashPress.bind(this)}>
            <Image style={styles.unsplashImageStyle}
            source={require('../assets/logos/unsplash_logo.jpeg')} />
          </TouchableOpacity>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imageStyle: {
    // height: 200,
    // width: 350,
    alignSelf: 'center',
    // flex: 1,
    // width: null,
    height: 50,
    // backgroundColor: 'transparent',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unsplashImageStyle: {
    alignSelf: 'center',
    // flex: 2,
    // width: null,
    height: 200,
    // backgroundColor: 'transparent',
    resizeMode: 'contain',
    justifyContent: 'center',
    // paddingLeft: 100,
    alignItems: 'center',
  }
};

export default connect(null, actions)(InspirationChoice);
