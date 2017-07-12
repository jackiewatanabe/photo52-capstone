import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios';
// import UserDetail from './UserDetail';
import { Card, CardSection, Button, Spinner } from './common';


class ThemePage extends Component {
    state = { theme: null };


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
      console.log('onButtonPress:', this.state.theme);
      this.setState({ theme: true });
      return <Text>BLACK AND WHITE</Text>;
    }

    renderChallengeButton() {
      switch (this.state.theme) {
        case true:
          console.log('Im in switch case true in renderButton');
          console.log('renderButton:', this.state.theme);
          return (
                <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 15, paddingTop: 10 }}>
                  <Text style={{
                    alignSelf: 'center',
                    fontFamily: 'Avenir-Light' }}
                  >
                    YOUR THEME FOR THE WEEK IS
                  </Text>
                  <Text style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    alignSelf: 'center',
                    fontFamily: 'Iowan Old Style',
                    fontSize: 30,
                    letterSpacing: 2 }}
                  >BLACK AND WHITE</Text>
                </View>
          );
        case false:
          console.log('Im in switch case false in renderButton');
          console.log('renderButton:', this.state.theme);
          return (
            <Button onPress={this.onButtonPress.bind(this)}>
              GIVE ME A CHALLENGE
            </Button>
          );
        default:
        console.log('Im in default');
        console.log('renderButton:', this.state.theme);
          return (<Button onPress={this.onButtonPress.bind(this)}>
            GIVE ME A CHALLENGE
          </Button>);
      }
    }

    renderInspireButton() {
      switch (this.state.theme) {
        case true:
          return (
              <Button>GET INSPIRED</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderUploadButton() {
      switch (this.state.theme) {
        case true:
          return (
              <Button>UPLOAD PHOTO</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderCountdown() {
          switch (this.state.theme) {
            case true:
              return (
                  <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 30, paddingTop: 10 }}>
                    <Text style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light',
                      fontWeight: '100',
                      fontSize: 40,
                      letterSpacing: 2 }}>
                      7 DAYS
                    </Text>
                    <Text style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light',
                      fontWeight: '100',
                      fontSize: 15,
                      letterSpacing: 2 }}>
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
              >WEEK 1 OF 52</Text>
            </View>
          </CardSection>
          <CardSection>
            {this.renderChallengeButton()}
          </CardSection>
          <CardSection>
            {this.renderCountdown()}
          </CardSection>
          <CardSection>
            {this.renderInspireButton()}
          </CardSection>
          <CardSection>
            {this.renderUploadButton()}
          </CardSection>
        </Card>
      );
    }
}

export default ThemePage;
