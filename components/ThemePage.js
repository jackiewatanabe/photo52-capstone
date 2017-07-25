import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
// import axios from 'axios';
// import UserDetail from './UserDetail';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
// import { themeChanged } from '../actions';
import { challengeCreate, photoCreate } from '../actions';

class ThemePage extends Component {

    componentWillMount() {
      LayoutAnimation.easeInEaseOut();
    }

    onButtonPress() {
      const myThemes = ['black and white', 'Leading Lines', 'circles', 'morning', 'long exposure', 'night sky', 'portrait of a stranger', 'water', 'self-portrait', 'silhouette', 'movement', 'messy', 'weather', 'transportation', 'blue', 'red', 'colors', 'minimalism', 'bokeh', 'SOLITUDE', 'GET HIGH', 'GET LOW', 'FASHION', 'TRENDY', 'STREET CANDID', 'food', 'symmetry', 'wabisabi', 'music', 'texture', 'close-up', 'light painting', 'business', 'formal', 'favorite', 'mid-day', 'feet', 'hands', 'shadows', 'angles', 'growth', 'soft', 'friendship', 'furry friends', 'distance', 'nostalgia', 'blur'];
      const rand = myThemes[Math.floor(Math.random() * myThemes.length)];

      this.props.challengeCreate(rand);
    }

    onInspirationPress() {
      Actions.inspirationChoice();
    }

    onUnsplashPress() {
      Actions.inspirationPage({ api: 'unsplash' });
    }

    onUploadPress() {
      Actions.gallery();
    }

    renderChallengeButton() {
      switch (this.props.challenge === null) {
        case true:
          console.log('THEMEPAGE Im in switch case true in renderButton');
          console.log('THEMEPAGE STATE.THEME:', this.props.theme);
          return (
            <Button onPress={this.onButtonPress.bind(this)}>
              GIVE ME A CHALLENGE
            </Button>
          );
        case false:
          console.log('THEMEPAGE Im in switch case false in renderButton');
          console.log('THEMEPAGE STATE.THEME:', this.props);
          return (
                <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 15, paddingTop: 10 }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light'
                    }}
                  >
                    YOUR THEME FOR THE WEEK IS
                  </Text>
                  <Text
                    style={{
                      paddingTop: 10,
                      paddingBottom: 20,
                      textAlign: 'center',
                      alignSelf: 'center',
                      fontFamily: 'Iowan Old Style',
                      fontSize: 30,
                      letterSpacing: 2 }}
                  >{this.props.challenge.theme.toUpperCase()}</Text>
                </View>
          );
        default:
        console.log('THEMEPAGE Im in default');
        console.log('THEMEPAGE STATE.THEME:', this.props.challenge);
          return (<Button onPress={this.onButtonPress.bind(this)}>
            GIVE ME A CHALLENGE
          </Button>);
      }
    }

    renderInspireButton() {
      switch (this.props.challenge !== null) {
        case true:
          return (
              <Button
                onPress={this.onInspirationPress.bind(this)}
                style={{ width: 300 }}
              >
                  GET INSPIRED
              </Button>
          );
        case false: break;
        default: break;
      }
    }

    renderUploadButton() {
      switch (this.props.challenge !== null) {
        case true:
          return (
              <Button onPress={this.onUploadPress.bind(this)}>SUBMIT PHOTO</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderCountdown() {
          switch (this.props.challenge !== null) {
            case true:
              return (
                  <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 30, paddingTop: 10 }}>
                    <Text
                      style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light',
                      fontWeight: '100',
                      fontSize: 40,
                      letterSpacing: 2
                      }}
                    >
                      7 DAYS
                    </Text>
                    <Text
                      style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light',
                      fontWeight: '100',
                      fontSize: 15,
                      letterSpacing: 2
                      }}
                    >
                      LEFT IN CHALLENGE
                    </Text>
                  </View>
              );
            case false: break;
            default: break;
          }
    }

    render() {
      return (
        <Card>
          <CardSection>
            <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 30, paddingTop: 10 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Avenir-Light',
                  fontWeight: '100',
                  fontSize: 30,
                  letterSpacing: 2 }}
              >WEEK {this.props.week} OF 52</Text>
            </View>
          </CardSection>

          <CardSection style={{ alignSelf: 'center', width: 300 }}>
            {this.renderChallengeButton()}
          </CardSection>

          <CardSection>
            {this.renderCountdown()}
          </CardSection>

          <CardSection style={{ alignSelf: 'center', width: 300 }}>
            {this.renderInspireButton()}
          </CardSection>

          <CardSection style={{ alignSelf: 'center', width: 300 }}>
            {this.renderUploadButton()}
          </CardSection>
        </Card>
      );
    }
}

const styles = {

};

const mapStateToProps = ({ auth }) => {
  const { challenge, week } = auth;
  const expanded = false;

  return { challenge, week, expanded };
};

export default connect(mapStateToProps, { challengeCreate, photoCreate })(ThemePage);
