import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';
// import { photoUpdate, photoCreate } from '../actions';

class ThemeItem extends Component {

  componentWillMount() {

  }

  onButtonPress() {
      // const { name, description, category, image_url } = this.props;

      // this.props.photoCreate({
      //   name, description, category: category || 'uncategorized', image_url });
      Actions.themePage({ theme: this.props.challenge.theme });
  }

  renderButton() {
    switch (this.props.challenge === null) {
      case true:
        return (
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            NO THEME SET YET
          </Button>
        );
      case false:
        console.log('renderButton false in ThemeItem: ', this.props.challenge.theme);
        return (
          <Button
            onPress={this.onButtonPress.bind(this)}
            style={{ flex: 1 }}
          >
            {this.props.challenge.theme}
          </Button>
      );
      default:
        console.log('renderButton default in ThemeItem: ', this.props.challenge);
        return (

        <Button
          onPress={this.onButtonPress.bind(this)}
          style={{ flex: 1 }}
        >
          NO THEME SET YET
        </Button>
      );
    }
  }

  render() {
    console.log('THEEEME: ', this.props);
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
            {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

}

const mapStateToProps = ({ auth, challenger }) => {
  const { user } = auth;
  console.log('CHALLENGERRR: ', challenger);
  const { challenge } = challenger;

  return { user, challenge };
};


export default connect(mapStateToProps, actions)(ThemeItem);
