import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios';
// import UserDetail from './UserDetail';
import { Card, CardSection, Button } from './common';


class ThemePage extends Component {
    onButtonPress() {
      console.log(this.props);
    }

    renderTheme() {
      if (this.props.loading) {
        return <Spinner size="large" />;
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          LOG IN
        </Button>
      );
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
            <Button onPress={this.onButtonPress.bind(this)}>
              GIVE ME A CHALLENGE
            </Button>
          </CardSection>

        </Card>
      );
    }

}

export default ThemePage;
