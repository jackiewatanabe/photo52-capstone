import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardSection } from './common';
import * as actions from '../actions';

class ChallengeComplete extends Component {

  render() {
    const stars = [];

    let starCount = this.props.week;

    // if (this.props.challenge !== null) {
    //   starCount = (this.props.week - 1);
    // } else {
    //   starCount = (this.props.week);
    // }

    _.times(starCount, (i) => {
      stars.push(<Icon
          key={i}
          name="stars"
          size={55} color="#000"
          style={{ alignSelf: 'center', textAlign: 'center' }}
      />);
    });

    _.times((52 - starCount), (k) => {
    stars.push(<Icon
      key={k + 50}
      name="stars"
      size={55}
      color="#D8D8D8"
      style={{ alignSelf: 'center', textAlign: 'center' }}
    />);
    });

    return (
      <Card>
        <CardSection style={{ alignSelf: 'center' }}>
          <View>
            <Text
              style={styles.titleStyle}
            >
              COMPLETED CHALLENGES
            </Text>
          </View>
        </CardSection>
        <CardSection style={{ alignSelf: 'center' }}>
          <View
            style={{ alignSelf: 'center' }}
          >
            <Text>{stars}</Text>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    alignSelf: 'center',
    fontFamily: 'Iowan Old Style',
    fontSize: 25
  }
};

const mapStateToProps = ({ auth }) => {
  const { week, challenge } = auth;
  // const expanded = false;

  return { week, challenge };
};

export default connect(mapStateToProps, actions)(ChallengeComplete);
