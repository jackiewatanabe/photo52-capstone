import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

class InspirationChoice extends Component {

  // renderUnsplashButton() {
  //   const { expanded } = this.props;
  //
  //   switch (this.props.theme !== null) {
  //     case true:
  //       return (
  //           <Button onPress={this.onInspirationPress.bind(this)} style={{ width: 300 }}>GET INSPIRED - unsplashed</Button>
  //           // {this.renderJoop()}
  //       );
  //     case false: break;
  //     default: break;
  //   }
  // }

  on500pxPress() {
    Actions.inspirationPage({ api: '500px' });
  }

  onUnsplashPress() {
    Actions.inspirationPage({ api: 'unsplash' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.on500pxPress.bind(this)}>500px</Button>
          </CardSection>
          <CardSection>
          <Button onPress={this.onUnsplashPress.bind(this)}>UNSPLASH</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, actions)(InspirationChoice);
