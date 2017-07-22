import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';

class ChallengeComplete extends Component {

    onPhotorollPress() {
        Actions.photoList();
    }

    onNextChallengePress() {
        Actions.themePage({ type: 'reset' });
    }

    render(){
      return (
        <Card>
          <CardSection>
            <View style={styles.textContainer}>
              <Text style={styles.congratsText}>
                YAY!
              </Text>
              <Text style={styles.congratsText}>
               GOLD STAR
              </Text>
              <Text style={styles.congratsText}>
               FOR YOU!
              </Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.textContainer}>
              <Text style={styles.challengeText}>
                Great job on completing
              </Text>
              <Text style={styles.challengeText}>
                challenge { (this.props.week - 1) } of 52!
              </Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.fillerContainer}>
              <Text style={styles.fillerText}>star image goes here</Text>
            </View>
          </CardSection>
          <CardSection style={{ alignSelf: 'center', width: 250 }}>
            <Button onPress={this.onPhotorollPress.bind(this)}>
              SEE YOUR PHOTO ROLL
            </Button>
          </CardSection>
          <CardSection style={{ alignSelf: 'center', width: 250 }}>
            <Button onPress={this.onNextChallengePress.bind(this)}>
              GET NEXT CHALLENGE
            </Button>
          </CardSection>
        </Card>
      );
    }
}

const styles = {
  textContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  congratsText: {
    alignSelf: 'center',
    fontFamily: 'Avenir-Light',
    fontSize: 40,
    textAlign: 'center'
  },
  challengeText: {
    alignSelf: 'center',
    fontFamily: 'Iowan Old Style',
    fontSize: 25,
    textAlign: 'center'
  },
  fillerContainer: {
    height: 150,
    alignSelf: 'center',
    flex: 1
  },
  fillerText: {
    textAlign: 'center',
    alignSelf: 'center',
    // justifyContent: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { week } = auth;
  const expanded = false;

  return { week };
};

export default connect(mapStateToProps, actions)(ChallengeComplete);
