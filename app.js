import React, { Component } from 'react';
import firebase from 'firebase';
// import ReduxThunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import reducers from './reducers';
import { AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';
import Router from './Router';
import store from './store';
import PushNotifications from './components/PushNotifications';

// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentWillMount() {
    console.disableYellowBox = true;
    const config = {
      apiKey: 'AIzaSyCzVJ58tgRgTsbjnYNeX1WR16pWUqybvGw',
      authDomain: 'photo52authentication.firebaseapp.com',
      databaseURL: 'https://photo52authentication.firebaseio.com',
      projectId: 'photo52authentication',
      storageBucket: 'photo52authentication.appspot.com',
      messagingSenderId: '351350443180'
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      //TODO: schedule background notifications
      PushNotification.localNotificationSchedule({
        message: `Dont forget to take a photo for the week! ^_^ You have 7 days left to complete your challenge!`, // (required)
        date: new Date(Date.now() + (5 * 1000)), // in 5 secs
        number: 0,
      });
      console.log('app is in background, props: ', this.props);
    }
  }

  render() {
    // console.log('app.js render: ', this.state.user);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
