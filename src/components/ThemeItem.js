import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from './common';
// import { photoUpdate, photoCreate } from '../actions';

class ThemeItem extends Component {
  onButtonPress() {
      // const { name, description, category, image_url } = this.props;

      // this.props.photoCreate({
      //   name, description, category: category || 'uncategorized', image_url });
      Actions.themePage();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text
            style={{
              fontFamily: 'Avenir-Light',
              fontWeight: '100',
              letterSpacing: 2
            }}
          >
            THIS WEEKS THEME
          </Text>
        </CardSection>
        <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this)}
              style={{ flex: 1 }}
            >
              NO THEME SET YET
            </Button>
        </CardSection>
      </Card>
    );
  }

}

export default ThemeItem;
