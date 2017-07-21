import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, Image } from 'react-native';
import { Card, CardSection } from './common';
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
          alignItems: 'center' }}>
        <CardSection>
          <TouchableOpacity
          style={{ paddingLeft: 30, paddingBottom: 20 }}
           onPress={this.on500pxPress.bind(this)}>
           <Image
            style={styles.logo1Style}
            source={require('../assets/logos/500px_logo_dark.png')}
           />
          </TouchableOpacity>
          </CardSection>
          <CardSection>
          <TouchableOpacity
            style={{ paddingTop: 20 }}
            onPress={this.onUnsplashPress.bind(this)}>
            <Image
             style={styles.logo2Style}
             source={require('../assets/logos/unsplash_logo.jpg')}
            />
          </TouchableOpacity>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  logo1Style: {
    // flex: 1,
    // width: null,
    // height: null,
    height: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  logo2Style: {
    // flex: 1,
    // width: null,
    // height: null,
    height: 200,
    alignSelf: 'center',
      resizeMode: 'contain'
  }
};

export default connect(null, actions)(InspirationChoice);
