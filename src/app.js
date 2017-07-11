import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import UserPage from './components/UserPage';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyCzVJ58tgRgTsbjnYNeX1WR16pWUqybvGw',
      authDomain: 'photo52authentication.firebaseapp.com',
      databaseURL: 'https://photo52authentication.firebaseio.com',
      projectId: 'photo52authentication',
      storageBucket: 'photo52authentication.appspot.com',
      messagingSenderId: '351350443180'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          // <Button
          //   onPress={() => firebase.auth().signOut()}
          // >
          //   LOG OUT
          // </Button>

          <UserPage />


        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router />

      </Provider>

    );
  }
}

export default App;
