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
    // state = { theme: this.props.theme };

    componentWillMount() {
      LayoutAnimation.easeInEaseOut();
      // this.setState(this.props.themeChanged('asdf'));
    }


    // componentWillMount() {
    //   // if (this.state.theme) {
    //   //   this.setState({ theme: 'something' });
    //   // } else {
    //   //   this.setState({ theme: null });
    //   // }
    //   console.log('Im in component willmount themepage');
    //   // this.setState({ theme: 'something' });
    // }

    onButtonPress() {
      const myThemes = ['black and white', 'Leading Lines', 'circles', 'morning', 'long exposure', 'night sky', 'portrait of a stranger', 'water', 'self-portrait', 'silhouette', 'movement', 'messy', 'weather', 'transportation', 'blue', 'red', 'colors', 'minimalism', 'bokeh', 'SOLITUDE', 'GET HIGH', 'GET LOW', 'FASHION', 'TRENDY', 'STREET CANDID', 'food', 'symmetry', 'wabisabi', 'music', 'texture', 'close-up', 'light painting', 'business', 'formal', 'favorite', 'mid-day', 'feet', 'hands', 'shadows', 'angles', 'growth', 'soft', 'friendship', 'furry friends', 'distance', 'nostalgia', 'blur'];
      const rand = myThemes[Math.floor(Math.random() * myThemes.length)];
      // const { theme } = this.state;
      // this.setState({ theme: 'WEEEEE' });
      // console.log('onButtonPress-before themeChanged: ', this.props.theme);
      this.props.challengeCreate(rand);
      console.log('onButtonPress:', this.props.theme);


      // const { name, description, category, image_url } = this.props;

      // this.props.photoCreate(rand);
      // ;
      // return <Text>BLACK AND WHITE</Text>;
    }

    onInspirationPress() {
      Actions.inspirationChoice();
    }

    // onFlickrPress() {
    //   Actions.inspirationPage({ api: 'flickr'});
    // }

    onUnsplashPress() {
      Actions.inspirationPage({ api: 'unsplash' });
    }

    onUploadPress() {
      Actions.photoCreate();
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

    // renderFlickrButton() {
    //   switch (this.props.theme !== null) {
    //     case true:
    //       return (
    //           <Button onPress={this.onFlickrPress.bind(this)} style={{ width: 300 }}>GET INSPIRED - Flickr</Button>
    //       );
    //     case false: break;
    //     default: break;
    //   }
    // }


    renderUploadButton() {
      switch (this.props.challenge !== null) {
        case true:
          return (
              <Button onPress={this.onUploadPress.bind(this)}>UPLOAD PHOTO</Button>
          );
        case false: break;
        default: break;
      }
    }

    // renderJoop() {
    //   const { expanded } = this.props;
    //
    //   if (expanded) {
    //     return (
    //       <TouchableWithoutFeedback>
    //         <Text>Hello</Text>
    //       </TouchableWithoutFeedback>
    //     );
    //   }
    // }

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

          <CardSection style={{ alignSelf: 'center', width: 250 }}>
            {this.renderChallengeButton()}
          </CardSection>

          <CardSection>
            {this.renderCountdown()}
          </CardSection>

          <CardSection style={{ alignSelf: 'center', width: 250 }}>
            {this.renderInspireButton()}
          </CardSection>

          <CardSection style={{ alignSelf: 'center', width: 250 }}>
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
