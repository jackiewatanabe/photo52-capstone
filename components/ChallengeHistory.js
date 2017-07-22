import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';

class ChallengeComplete extends Component {

render(){
  return (
    <Card>
      <CardSection>
        <View>
          <Text>COMPLETED CHALLENGES</Text>
        </View>
      </CardSection>
    </Card>
  );
}
}

const mapStateToProps = ({ auth }) => {
  const { week } = auth;
  const expanded = false;

  return { week };
};

export default connect(mapStateToProps, actions)(ChallengeComplete);
