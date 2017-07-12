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

    renderButton() {
      switch (this.state.theme) {
        case true:
          console.log('Im in switch case true in renderButton');
          console.log('renderButton:', this.state.theme);
          return (
            <Card>
              <CardSection>
                <Text style={{
                  fontFamily: 'Iowan Old Style',
                  fontSize: 25,
                  letterSpacing: 2 }}
                >BLACK AND WHITE</Text>
              </CardSection>
            </Card>
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
            {this.renderButton()}
          </CardSection>

        </Card>
      );
    }

}

export default ThemePage;
