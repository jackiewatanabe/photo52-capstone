import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';

class ChallengeComplete extends Component {

render(){
  // const myStarIcon = (<Icon name="stars" size={60} color="#000" style={{ alignSelf: 'center', textAlign: 'center' }} />);

  const stars = [];

  let starCount = 0;

  if (this.props.challenge !== null) {
    starCount = (this.props.week - 1);
  } else {
    starCount = (this.props.week);
  }


  _.times(starCount, () => {
  stars.push(<Icon name="stars" size={55} color="#000" style={{ alignSelf: 'center', textAlign: 'center' }} />);
  });

  _.times((52 - starCount), () => {
  stars.push(<Icon name="stars" size={55} color="#D8D8D8" style={{ alignSelf: 'center', textAlign: 'center' }} />);
  });

  return (
    <Card>
      <CardSection style={{ alignSelf: 'center' }}>
        <View>
          <Text style={{ alignSelf: 'center', fontFamily: 'Iowan Old Style', fontSize: 25 }}>COMPLETED CHALLENGES</Text>
        </View>
      </CardSection>
      <CardSection style={{ alignSelf: 'center' }}>
        <View style={{ alignSelf:
        'center' }}>
          <Text>{stars}</Text>
        </View>
      </CardSection>
    </Card>
  );
}
}

const mapStateToProps = ({ auth }) => {
  const { week, challenge } = auth;
  const expanded = false;

  return { week, challenge };
};

export default connect(mapStateToProps, actions)(ChallengeComplete);
