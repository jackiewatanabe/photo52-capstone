import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
          <CardSection style={{ paddingTop: 20 }}>
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
          <CardSection style={{ alignSelf: 'center', paddingBottom: 10 }}>
            <View style={styles.fillerContainer}>
              <Icon name="star-border" size={150} color="#000" style={{ alignSelf: 'center', textAlign: 'center' }} />
            </View>
          </CardSection>
          <CardSection style={{ paddingBottom: 30 }}>
            <View style={styles.textContainer}>
              <Text style={styles.challengeText}>
                Great job on completing
              </Text>
              <Text style={styles.challengeText}>
                challenge { (this.props.week + 1) } of 52!
              </Text>
            </View>
          </CardSection>
          <CardSection style={{ alignSelf: 'center', width: 300 }}>
            <Button onPress={this.onPhotorollPress.bind(this)}>
              SEE YOUR PHOTO ROLL
            </Button>
          </CardSection>
          <CardSection style={{ alignSelf: 'center', width: 300 }}>
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
    fontSize: 35,
    textAlign: 'center'
  },
  challengeText: {
    alignSelf: 'center',
    fontFamily: 'Iowan Old Style',
    fontSize: 20,
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
